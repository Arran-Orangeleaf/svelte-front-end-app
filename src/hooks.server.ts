import { error, type Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
    if (!dev) {
        const url = new URL(event.request.url);
        const hostname = url.hostname;

        // Enforce hostname check
        if (hostname !== 'apis-svelte-cloudflare-tester.orangeleaf.dev') {
            throw error(403, {
                message: `Access denied - Invalid hostname ${hostname} v1.1`
            });
        }

        // Enforce Cloudflare check
        const cfRay = event.request.headers.get('cf-ray');
        if (!cfRay) {
            throw error(403, {
                message: 'Access denied - Request must come through Cloudflare'
            });
        }
    }

    return resolve(event);
};