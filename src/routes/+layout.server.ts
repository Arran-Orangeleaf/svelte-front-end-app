import { error } from '@sveltejs/kit';
import {fetchFromCMS} from '$lib/ultiltyFunctions.js'
import { cms_url, cms_token } from '$env/static/private';
export const load = async ({ params }) => {
    let slug = params.slug ? params.slug : "Home";
    let query = encodeURIComponent('{"Page Title":"'+slug+'"}');
    let url = `${cms_url}/api/content/item/Page?populate=1&filter=` + query;
    let response = await fetchFromCMS(url, cms_token, "GET");
    console.log(response, url);
        if (!response) {
            error(404, {
                message: 'Not found'
            });
        }
    query = encodeURIComponent('{"name":"top-nav"}');
    url = `${cms_url}/api/content/item/menu?populate=1&filter=` + query;
    let header = await fetchFromCMS(url, cms_token, "GET");
    if (!header) {
        error(404, {
            message: 'No Header found'
        });
    }
    return {
            header: header,
            postContent: response,
    };
};