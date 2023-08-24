<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import Footer from "@lib/components/Footer.svelte";
  import CoinjoinLogo from "@lib/img/CoinjoinLogo.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";

  let showMobileMenu = false;

  function handleMobileIconClick() {
    showMobileMenu = !showMobileMenu;
    window.document.body.classList.toggle("mobile-menu-active");
  }

  function handleMobileMenuItemClick() {
    showMobileMenu = false;
    window.document.body.classList.toggle("mobile-menu-active");
  }

  function handleDesktopMenuItemClick() {
    showMobileMenu = false;
  }

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

<header
  class="min-w-[320px] flex justify-between h-[90px] md:max-w-5xl md:mx-auto py-6 items-center px-4"
>
  <div class="py-1 flex-auto isolate">
    <a href="/">
      <div class="isolate w-10 h-6 z-40">
        <CoinjoinLogo />
      </div>
    </a>
  </div>

  <div
    class="font-inconsolata isolate {showMobileMenu
      ? 'z-10 font-semibold text-5xl bg-dark-blue fixed h-screen w-screen top-20 pt-12 left-0 px-4 overflow-hidden flex flex-col gap-8 items-start'
      : 'hidden md:flex md:flex-1 md:justify-center md:font-normal md:gap-12'}    "
  >
    <div
      class="hover:text-green-cj hover:cursor-pointer {$page.url.pathname ===
      '/'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="/"
        class="no-underline"
      >
        Intro
      </a>
    </div>
    <div
      class="hover:text-green-cj hover:cursor-pointer {$page.url.pathname ===
      '/advanced'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="/advanced"
        class="no-underline"
        >Advanced
      </a>
    </div>
    <div
      class="cursor-default {$page.url.pathname === '/history'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <div class="relative">
        <div
          class="absolute -top-6 left-56 md:left-20 md:text-[10px] font-bold md:-top-4 text-sm border rounded-md px-2 text-green-cj"
        >
          SOON
        </div>
        History
      </div>
    </div>
    <div class="md:hidden flex justify-center pt-12">
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="/#try"
        class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline"
        >Try coinjoins</a
      >
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={handleMobileIconClick}
    class="mobile-icon w-6 h-4 relative cursor-pointer z-10 md:hidden"
  >
    <div class="middle-line" />
  </div>

  <div class="hidden md:flex flex-auto justify-end">
    <a
      href="/#try"
      class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline"
      >Try coinjoins</a
    >
  </div>
</header>

<div class="min-w-[320px] bg-dark-blue flex flex-col gap-40 md:gap-56">
  <slot />
</div>
<Footer />

<style>
  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.4s;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after {
    width: 100%;
  }
</style>
