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
<div class="flex gap gap-x-[1rem]">
  {#each boxSet as box }
    <a href="{box.url}" class="group basis-xs grow relative block bg-black max-w-[300px]">
      <img
        alt=""
        src="http://cockpit.com/storage/uploads{box.image.path}"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
    
      <div class="relative p-4 sm:p-6 lg:p-8">
        <h2 class="text-sm font-medium tracking-widest text-pink-500 uppercase">{box.title}</h2>
        <div class="mt-32 sm:mt-48 lg:mt-64">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p class="text-sm text-white">
              {box.description}
            </p>
          </div>
        </div>
      </div>
    </a>
    
  {/each}
  
</div>  
{/if}