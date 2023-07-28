<script>
  import "../app.css";
  import CoinjoinLogo from "../lib/img/CoinjoinLogo.svelte";
  import gustavo from "@lib/img/gus.png";
  import thibaud from "@lib/img/thib.png";
  import { page } from "$app/stores";

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
</script>

<svelte:head>
  <title>Coinjoins.org - Lean about bitcoin collaborative transactions</title>
  <meta
    name="description"
    content="Coinjoins are collaborative bitcoin transactions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Coinjoins.org" />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content="https://coinjoins.org" />
  <meta
    property="og:title"
    content="Coinjoins.org - Lean about bitcoin collaborative transactions"
  />
  <meta
    property="og:description"
    content="Coinjoins are collaborative bitcoin transactions."
  />
  <meta property="og:image" content="https://coinjoins.org/preview.png" />
</svelte:head>

<header
  class="min-w-[320px] flex justify-between h-[90px] md:max-w-5xl md:mx-auto py-6 items-center px-4"
>
  <div class="py-1 flex-auto">
    <div class="w-6">
      <a href="/">
        <CoinjoinLogo />
      </a>
    </div>
  </div>

  <div
    class="font-inconsolata isolate {showMobileMenu
      ? 'z-10 font-semibold text-5xl bg-dark-blue fixed h-screen w-screen top-24 left-0 px-4 overflow-hidden flex flex-col gap-8 items-start'
      : 'hidden md:flex md:flex-1 md:justify-center md:font-normal md:gap-4'}    "
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
    <!-- <div
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
    </div> -->
    <div
      class="cursor-default {$page.url.pathname === '/history'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <div class="relative">
        <div
          class="absolute -top-6 left-56 md:left-20 md:text-xs md:-top-4 text-sm border rounded px-1 text-green-cj"
        >
          soon
        </div>
        Advanced
      </div>
    </div>
    <div class="md:hidden flex justify-center">
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="#try"
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
      href="#try"
      class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline"
      >Try coinjoins</a
    >
  </div>
</header>

<div class="min-w-[320px] bg-dark-blue flex flex-col gap-40 md:gap-72">
  <slot />
</div>

<div class="flex flex-col items-center gap-16 pt-36">
  <div
    class="h-px bg-green-cj w-[calc(100%-128px)] md:w-full max-w-lg mx-auto"
  />
  <div class="flex flex-col items-center gap-8">
    <div class="text-xl">Maintainers</div>
    <div class="flex flex-col md:flex-row gap-10">
      <div class="flex flex-col items-center gap-2">
        <div><img src={thibaud} alt="Thibaud" /></div>
        <div>
          <a
            href="https://twitter.com/thibm_/"
            class="text-green-cj no-underline">Thibaud Marechal</a
          >
        </div>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div><img src={gustavo} alt="Gustavo" /></div>
        <div>
          <a
            href="https://twitter.com/gustavojfe/"
            class="text-green-cj no-underline">Gustavo Flores</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4 items-center text-center pt-36 pb-4">
    <div class="w-10">
      <CoinjoinLogo />
    </div>
    <div>
      <div class="text-lg font-bold">Coinjoins.org</div>
      <div>Learn about bitcoin collaborative transactions</div>
    </div>
  </div>
</div>

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
