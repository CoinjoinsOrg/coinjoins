<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import Header from "@lib/components/Header.svelte";
  import Footer from "@lib/components/Footer.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";

  let y;
  $: currentPath = $page.url.pathname;
</script>

<svelte:head>
  <title>Coinjoins - Learn about bitcoin collaborative transactions</title>
  <meta
    name="description"
    content="Reclaim your privacy with coinjoins. Learn about bitcoin collaborative transactions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Coinjoins.org" />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content="https://coinjoins.org" />
  <meta
    property="og:title"
    content="Coinjoins - Learn about bitcoin collaborative transactions"
  />
  <meta
    property="og:description"
    content="Reclaim your privacy with coinjoins. Learn about bitcoin collaborative transactions."
  />
  <meta property="og:image" content="https://coinjoins.org/preview.png" />
</svelte:head>

<svelte:window bind:scrollY={y} />

{#if y > 700}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={() => goto(currentPath)}
    class="hover:cursor-pointer bg-lighter-blue rounded-full p-4 fixed bottom-14 right-8"
  >
    <div class="w-8">
      <ClickedArrow color="white" />
    </div>
  </div>
{/if}

<Header />
<div class="z-0 min-w-[320px] bg-dark-blue flex flex-col gap-40 md:gap-56">
  <slot />
</div>
<Footer />
