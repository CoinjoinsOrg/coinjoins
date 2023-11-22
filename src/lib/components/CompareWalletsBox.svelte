<script>
  import H2 from "@lib/components/H2.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  export let header;
  export let subheader;
  export let walletsList;

  $: currentPath = $page.url.pathname;

  function goToWalletPage(url) {
    goto(url);
  }
</script>

<div class="px-4 flex flex-col gap-14 max-w-3xl mx-auto">
  <div class="flex flex-col gap-14 text-center">
    <H2>{header}</H2>
    <div class="text-lg">
      {subheader}
    </div>
  </div>
  <div
    class="flex flex-col md:flex-row md:flex-wrap items-center gap-8 md:justify-center"
  >
    {#each walletsList as wallet}
      {#if !currentPath.includes(wallet.id)}
        <div
          class="w-full max-w-xs md:w-[30%] md:flex-shrink-0 flex flex-col gap-6 items-center"
        >
          <div class="w-16">
            <img src={"/wallets-icon/" + wallet.icon} alt={wallet.name} />
          </div>
          <button
            on:click={() => goToWalletPage(wallet.page)}
            class="border-2 w-full text-center rounded-lg py-2 px-4 no-underline
             'border-green-cj text-green-cj enabled:hover:bg-green-cj hover:text-dark-blue"
            >About {wallet.name}</button
          >
        </div>
      {/if}
    {/each}
  </div>
</div>
