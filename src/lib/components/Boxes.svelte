<script lang="ts">
    import { onMount } from 'svelte';
    import {fetchFromCMS} from '$lib/ultiltyFunctions.js'
    let {boxSet} :Array<Object> = $props();
    console.log(boxSet);
    //let boxSet :string = data.boxSet;
    let loading = $state(true);
    let error = $state(null);
    let res :any = $state(null);
    let query = encodeURIComponent('{"name":"'+boxSet+'"}');
    let amountOfBoxes = boxSet.length;
    onMount(async () => {
      try {
        res = await fetchFromCMS("http://cockpit.com/api/content/tree/boxset?populate=1&filter=" + query, "GET");
        //return res;
      } catch (err :any) {
        error = err.message;
      } finally {
        loading = false;
      }
    });
</script>
  
{#if boxSet}
<div class="flex gap gap-x-[1rem] justify-between">
  {#each boxSet as box }
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex-1 basis-full">
      <a href="{box.url}">
          <img class="rounded-t-lg" src="http://cockpit.com/storage/uploads{box.image.path}" alt="{box.image.altText}" />
      </a>
      <div class="p-5">
          <a href="{box.url}">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{box.description}</p>
          <a href="{box.url}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
               <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
    
  {/each}
  
</div>  
{/if}
