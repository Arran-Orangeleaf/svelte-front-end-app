<script lang="ts">
     import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
     import { page } from '$app/state';
    let {header} = $props();
    let pageUrl = decodeURI(page.url.pathname.replace("/", ""));
    console.log(header, pageUrl, "header above");
</script>
<style>

</style>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each header.link as link}
            <NavLi href="/{link["Page Title"]}" active={pageUrl === link["Page Title"]}>{link["Page Title"]}</NavLi>
        {/each}
    </NavUl>
 </Navbar>
  