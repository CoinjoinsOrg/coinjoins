<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import CoinjoinLogo from "@lib/img/CoinjoinLogo.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";

  let showMobileMenu = false;
  let y;
  let timeoutHideSubMenuAdvanced;
  let isAdvancedSubMenuShown = false;

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

  function handleAdvancedMenuClicked() {
    isAdvancedSubMenuShown = !isAdvancedSubMenuShown;
  }

  function handleAdvancedSubMenuClicked(url) {
    if (showMobileMenu) {
      handleMobileMenuItemClick();
    }
    isAdvancedSubMenuShown = !isAdvancedSubMenuShown;
    clearTimeout(timeoutHideSubMenuAdvanced);
    timeoutHideSubMenuAdvanced = null;

    goto(url);
  }

  function handleShowSubMenuOnHover() {
    clearTimeout(timeoutHideSubMenuAdvanced);
    timeoutHideSubMenuAdvanced = null;
    isAdvancedSubMenuShown = true;
  }
  function handleHideSubMenuOnHoverOut() {
    if (timeoutHideSubMenuAdvanced) {
      clearTimeout(timeoutHideSubMenuAdvanced);
    }
    timeoutHideSubMenuAdvanced = setTimeout(
      () => (isAdvancedSubMenuShown = false),
      300
    );
  }
</script>

<svelte:window bind:scrollY={y} />

<header
  class="z-10 min-w-[320px] flex justify-between h-[90px] md:max-w-5xl md:mx-auto py-6 items-center px-4"
>
  <div class="py-1 flex-auto isolate">
    <a href="/">
      <div class="isolate w-10 h-6 z-40">
        <CoinjoinLogo />
      </div>
    </a>
  </div>

  <div
    class="z-10 font-inconsolata isolate {showMobileMenu
      ? ' font-semibold text-5xl bg-dark-blue fixed h-screen w-screen top-20 pt-12 left-0 px-4 overflow-hidden flex flex-col gap-8 items-start'
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
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:mouseover={handleShowSubMenuOnHover}
      on:mouseout={handleHideSubMenuOnHoverOut}
      on:click={handleAdvancedMenuClicked}
      class="z-10 relative flex gap-2 hover:text-green-cj hover:cursor-pointer {$page
        .url.pathname === '/advanced'
        ? 'text-green-cj'
        : 'text-white'}"
    >
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      Advanced

      <div class="w-6">
        {#if isAdvancedSubMenuShown}
          <ClickedArrow
            color={$page.url.pathname === "/advanced" || isAdvancedSubMenuShown
              ? "rgb(0,255,25,1.0)"
              : "rgb(255,255,255,1.0)"}
          />
        {:else}
          <UnclickedArrow
            color={$page.url.pathname === "/advanced" || isAdvancedSubMenuShown
              ? "rgb(0,255,25,1.0)"
              : "rgb(255,255,255,1.0)"}
          />
        {/if}
      </div>
      {#if isAdvancedSubMenuShown}
        <div
          class="absolute flex w-80 justify-between py-4 px-2 bg-dark-blue rounded h-auto {showMobileMenu
            ? 'flex-col top-12 text-3xl text-left'
            : 'flex-row top-8'}"
          on:mouseover={handleShowSubMenuOnHover}
          on:mouseout={handleHideSubMenuOnHoverOut}
          on:click={handleAdvancedMenuClicked}
        >
          <div class="flex flex-col">
            <div>
              <button
                on:click={() => handleAdvancedSubMenuClicked("/advanced")}
                class=" no-underline text-white hover:text-green-cj font-inconsolata"
                >Overview</button
              >
            </div>
            <div>
              <button
                on:click={() => handleAdvancedSubMenuClicked("/wasabi-wallet")}
                class=" no-underline text-white hover:text-green-cj font-inconsolata"
                >Wasabi Wallet</button
              >
            </div>
            <div>
              <button
                on:click={() => handleAdvancedSubMenuClicked("/sparrow-wallet")}
                class=" no-underline text-white hover:text-green-cj font-inconsolata"
                >Sparrow Wallet</button
              >
            </div>
            <div>
              <button
                on:click={() => handleAdvancedSubMenuClicked("/joinmarket")}
                class=" no-underline text-white hover:text-green-cj font-inconsolata"
                >JoinMarket</button
              >
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <button
                on:click={() =>
                  handleAdvancedSubMenuClicked("/samourai-wallet")}
                class=" no-underline text-white hover:text-green-cj font-inconsolata"
                >Samourai Wallet</button
              >
            </div>
            <div>
              <button
                disabled={true}
                on:click={() => handleAdvancedSubMenuClicked("/trezor-suite")}
                class=" no-underline text-inactive-grey font-inconsolata"
                >Trezor Suite</button
              >
            </div>
            <div>
              <button
                disabled={true}
                on:click={() => handleAdvancedSubMenuClicked("/btcpay-server")}
                class=" no-underline text-inactive-grey font-inconsolata"
                >BTCPay Server
              </button>
            </div>
            <div>
              <button
                disabled={true}
                on:click={() => handleAdvancedSubMenuClicked("/vortex-ln")}
                class=" no-underline text-inactive-grey font-inconsolata"
                >Vortex LN</button
              >
            </div>
          </div>
        </div>
      {/if}
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
