<script>
  import H2 from "@lib/components/H2.svelte";
  import { page } from "$app/stores";

  export let header;
  export let subheader;
  export let walletsList;

  $: currentPath = $page.url.pathname;
  $: console.log("currentPath", currentPath);
</script>

<div class="px-4 flex flex-col gap-14 max-w-3xl mx-auto">
  <div class="flex flex-col gap-14 text-center">
    <H2>{header}</H2>
    <div class="text-lg">
      {subheader}
    </div>
  </div>
  <div
    class="flex flex-col md:flex-row md:flex-wrap items-center gap-8 md:justify-between"
  >
    {#each walletsList as wallet}
      {#if !currentPath.includes(wallet.id)}
        <div
          class="w-full max-w-xs md:w-[30%] md:flex-shrink-0 flex flex-col gap-6 items-center"
        >
          <div class="w-16">
            <img src={"/wallets-icon/" + wallet.icon} alt={wallet.name} />
          </div>
          <a
            href={wallet.page}
            class="border-2 w-full text-center rounded-lg py-2 px-4 no-underline hover:text-dark-blue {wallet.page.includes(
              'wasabi'
            ) ||
            wallet.page.includes('samourai') ||
            wallet.page.includes('sparrow') ||
            wallet.page.includes('joinmarket')
              ? 'border-green-cj text-green-cj hover:bg-green-cj'
              : 'text-[rgba(107,110,134,0.95)] border-[rgba(107,110,134,0.95)] hover:text-[rgba(107,110,134,0.95)] hover:cursor-not-allowed'}"
            >About {wallet.name}</a
          >
        </div>
      {/if}
    {/each}
  </div>
</div>
