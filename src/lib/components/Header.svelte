<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import data from "@lib/data/header.json";
  import CoinjoinLogo from "@lib/img/CoinjoinLogo.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";

  let y;
  let showMobileMenu;
  let timeoutHideSubMenuWallets;
  let isWalletsSubMenuShown = false;

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

  function handleWalletsMenuClicked() {
    isWalletsSubMenuShown = !isWalletsSubMenuShown;
  }

  function handleWalletsSubMenuClicked(url) {
    goto(url);
    setTimeout(() => {
      if (showMobileMenu) {
        handleMobileMenuItemClick();
      }
      isWalletsSubMenuShown = false;
      clearTimeout(timeoutHideSubMenuWallets);
      timeoutHideSubMenuWallets = null;
    }, 200);
  }

  function handleShowSubMenuOnHover() {
    clearTimeout(timeoutHideSubMenuWallets);
    timeoutHideSubMenuWallets = null;
    isWalletsSubMenuShown = true;
  }

  function handleHideSubMenuOnHoverOut() {
    if (timeoutHideSubMenuWallets) {
      clearTimeout(timeoutHideSubMenuWallets);
    }
    timeoutHideSubMenuWallets = setTimeout(
      () => (isWalletsSubMenuShown = false),
      300
    );
  }

  const headerData = data;
  function goHome() {
    showMobileMenu = false;
    goto("/");
  }
</script>

<svelte:window bind:scrollY={y} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header
  class="z-50 min-w-[320px] flex justify-between h-[90px] md:max-w-5xl md:mx-auto py-6 items-center px-4"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="py-1 flex-auto isolate z-20 hover:cursor-pointer"
    on:click={goHome}
  >
    <div class="w-10 h-6">
      <CoinjoinLogo />
    </div>
  </div>

  <div
    class="z-10 font-inconsolata isolate {showMobileMenu
      ? ' font-semibold text-5xl bg-dark-blue fixed h-screen w-screen top-0 pt-24 left-0 px-4 overflow-hidden flex flex-col gap-8 items-start justify-start'
      : 'hidden md:flex md:flex-1 md:justify-center md:font-normal md:gap-12'}"
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
        {headerData.menu.basics}
      </a>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <div
      class="z-10 relative hover:text-green-cj hover:cursor-pointer {$page.url
        .pathname === '/wallet-overview' ||
      $page.url.pathname.includes('wallets')
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div class="flex gap-2" on:click={handleWalletsMenuClicked}>
        <div
          on:mouseover={handleShowSubMenuOnHover}
          on:mouseout={handleHideSubMenuOnHoverOut}
        >
          {headerData.menu.wallets}
        </div>

        <div
          class="w-6"
          on:mouseover={handleShowSubMenuOnHover}
          on:mouseout={handleHideSubMenuOnHoverOut}
        >
          {#if isWalletsSubMenuShown}
            <ClickedArrow
              color={$page.url.pathname === "/wallet-overview" ||
              isWalletsSubMenuShown ||
              $page.url.pathname.includes("wallets")
                ? "rgb(0,255,25,1.0)"
                : "rgb(255,255,255,1.0)"}
            />
          {:else}
            <UnclickedArrow
              color={$page.url.pathname === "/wallet-overview" ||
              isWalletsSubMenuShown ||
              $page.url.pathname.includes("wallets")
                ? "rgb(0,255,25,1.0)"
                : "rgb(255,255,255,1.0)"}
            />
          {/if}
        </div>
      </div>

      {#if isWalletsSubMenuShown}
        <div
          class="flex md:flex-wrap flex-col items-start py-4 px-2 bg-dark-blue hover:cursor-default {showMobileMenu
            ? 'block top-12 text-3xl text-left'
            : 'absolute top-8 rounded h-40 justify-start w-96'}"
          on:mouseover={handleShowSubMenuOnHover}
          on:mouseout={handleHideSubMenuOnHoverOut}
        >
          {#each headerData.submenu as sub}
            <div
              class="w-1/2 whitespace-nowrap flex gap-2 items-center pt-2 md:pt-0 font-normal"
            >
              <button
                disabled={!sub.isActive}
                on:click={() =>
                  handleWalletsSubMenuClicked(
                    `${sub.path === "wallet-overview" ? "/" : "/wallets/"}${
                      sub.path
                    }`
                  )}
                class="no-underline font-inconsolata {sub.isActive
                  ? 'hover:text-green-cj text-white'
                  : 'text-inactive-grey hover:text-inactive-grey'}"
                >{sub.name}</button
              >
              {#if !sub.isActive}
                <div class="pl-1 md:pl-0">
                  <span
                    class="text-green-cj text-[10px] px-1 py-1 md:py-0 rounded border border-green-cj"
                    >SOON</span
                  >
                </div>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div
      class="cursor-default hover:text-green-cj hover:cursor-pointer {$page.url
        .pathname === '/history'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="/history"
        class="no-underline"
      >
        {headerData.menu.history}
      </a>
    </div>
    <div
      class="cursor-default hover:text-green-cj hover:cursor-pointer {$page.url
        .pathname === '/calculator'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <a
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        href="/calculator"
        class="no-underline"
      >
        {headerData.menu.calculator}
      </a>
    </div>
    <div class="isolate z-20 md:hidden flex justify-center pt-12">
      <a
        href="/try"
        on:click={showMobileMenu
          ? handleMobileMenuItemClick
          : handleDesktopMenuItemClick}
        class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline hover:text-green-cj hover:bg-dark-blue hover:border-green-cj"
        >{headerData.cta}</a
      >
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={handleMobileIconClick}
    class="mobile-icon w-6 h-4 relative cursor-pointer z-40 md:hidden"
  >
    <div class="middle-line" />
  </div>

  <div class="hidden md:flex flex-auto justify-end isolate z-20">
    <a
      href="/try"
      class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline hover:text-green-cj hover:bg-dark-blue hover:border-green-cj"
      >{headerData.cta}</a
    >
  </div>
</header>

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
