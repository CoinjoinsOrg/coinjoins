<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import basicsData from "@data/basics.json";

  import H1 from "@lib/components/H1.svelte";
  import H2 from "@lib/components/H2.svelte";
  import H3 from "@lib/components/H3.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import Bitcoin from "@lib/img/Bitcoin.svelte";
  import CoinjoinVisual from "@lib/img/CoinjoinVisual.svelte";
  import CoinjoinVisualMobile from "@lib/img/CoinjoinVisualMobile.svelte";
  import Eye from "@lib/img/Eye.svelte";
  import GreenLine from "@lib/img/GreenLine.svelte";
  import MoneyBill from "@lib/img/MoneyBill.svelte";
  import RedLine from "@lib/img/RedLine.svelte";
  import Rotate from "@lib/img/Rotate.svelte";
  import TxVisual from "@lib/img/TxVisual.svelte";
  import User from "@lib/img/User.svelte";
  import Utxos from "@lib/img/Utxos.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";
  import GreenBitcoin from "@lib/img/GreenBitcoin.svelte";
  import GreenBrackets from "@lib/img/GreenBrackets.svelte";
  import GreenBan from "@lib/img/GreenBan.svelte";
  import GreenKey from "@lib/img/GreenKey.svelte";
  import WasabiLogo from "@lib/img/WasabiLogo.svelte";
  import Cj from "@lib/img/Cj.svelte";
  import CoinjoinMobile from "@lib/img/CoinjoinMobile.svelte";

  const data = basicsData;
  let isLoaded = false;
  let y;

  function handleQuestionClick(i) {
    data.fudBustList[i].isClicked = !data.fudBustList[i].isClicked;
  }

  onMount(() => (isLoaded = true));
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<div class="flex items-center relative w-full isolate z-0 h-[70vh] md:h-[80vh]">
  <div class="flex md:hidden items-center w-full">
    <CoinjoinVisualMobile />
  </div>
  <div class="md:flex hidden items-center w-full" transition:fade>
    <CoinjoinVisual />
  </div>

  {#if isLoaded}
    <div
      in:fly={{ duration: 2000 }}
      out:fade={{ delay: 0, duration: 300 }}
      class="min-w-[320px] absolute top-[40%] mx-auto right-0 left-0 flex flex-col gap-10 md:gap-48 z-0"
    >
      <div class="flex flex-col items-center gap-10">
        <H1>{data.header}</H1>
        <p class="text-white text-center text-2xl px-4">
          {@html data.subheader}
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-6 animate-bounce">
          <a href="#open">
            <ArrowDown />
          </a>
        </div>
      </div>
    </div>
  {/if}
</div>

{#if isLoaded}
  <div
    id="open"
    class="relative mx-auto w-full h-full"
    in:fade={{
      delay: 1400,
      duration: 2000,
    }}
    out:fade={{ delay: 0, duration: 300 }}
  >
    <div
      class="absolute flex flex-col items-center justify-center left-0 top-0 bottom-0 right-0 gap-10 md:gap-14 mx-auto"
    >
      <div class="w-20 md:w-32"><Bitcoin /></div>

      <H2>{data.open.title}</H2>

      <p class="text-xl text-center text-white max-w-2xl p-8">
        {data.open.body}
      </p>
    </div>

    <div class="w-full h-[calc(50vh)]">
      <div class="w-10 eye-move-down eye-1 left-1/4 absolute block top-20">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-2 right-1/4 absolute block top-0">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-3 absolute block top-4 left-8">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-4 absolute block right-8 top-4">
        <Eye />
      </div>
      <div class="w-10 eye-move-up eye-5 absolute block top-2/3 left-20">
        <Eye />
      </div>
      <div class="w-10 eye-move-up eye-11 absolute block top-1/2 right-6">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-12 absolute block bottom-10 right-10">
        <Eye />
      </div>
      <div class="w-10 eye-move-up eye-6 absolute block bottom-0 left-1/3">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-7 absolute block bottom-10 left-40">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-8 absolute block bottom-10 left-0">
        <Eye />
      </div>
      <div class="w-10 eye-move-up eye-9 absolute block bottom-0 right-1/3">
        <Eye />
      </div>
      <div class="w-10 eye-move-down eye-10 absolute block bottom-28 right-20">
        <Eye />
      </div>
    </div>
  </div>
{/if}

{#if y > 600}
  <div
    in:fly={{ delay: 1000, x: 200, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col md:flex-row max-w-5xl mx-auto items-center gap-20 px-4"
  >
    <div class="w-full px-4 md:px-0 flex-auto md:flex-1"><Utxos /></div>

    <div class="flex flex-col gap-12 flex-1">
      <H2>{data.utxos.title}</H2>
      <p class="text-white text-xl">
        {@html data.utxos.body}
      </p>
    </div>
  </div>
{/if}

{#if y > 1100}
  <div
    id="transactions"
    in:fly={{ delay: 1000, x: -400, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto items-center px-4"
  >
    <div class="flex flex-col gap-12 flex-1">
      <H2>{data.transactions.title}</H2>

      <ol class="text-white text-xl">
        {#each data.transactions.explainer as explainer}
          <li>
            {explainer}
          </li>
        {/each}
      </ol>
    </div>
    <div class="px-4 md:px-0 w-full flex-1"><TxVisual /></div>
  </div>
{/if}

{#if y > 2000}
  <div
    class="flex flex-col items-center gap-8 mx-auto max-w-5xl px-4"
    in:fly={{ delay: 1000, x: 200, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
  >
    <div class="flex flex-col gap-12 items-center text-center">
      <H2>{data.tracking.title}</H2>
      <p class="text-white text-xl text-center">
        {data.tracking.body}
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between gap-12 px-4 items-center md:items-start"
    >
      {#each data.tracking.examples as example}
        <div class="flex flex-col items-center gap-6 py-8 max-w-md">
          <div class="w-8">
            {#if example.icon === "moneybill"}
              <MoneyBill />
            {:else if example.icon === "rotate"}
              <Rotate />
            {:else if example.icon === "user"}
              <User />
            {/if}
          </div>
          <div class="text-2xl">{example.title}</div>
          <p class="text-white text-center">
            {example.body}
          </p>
        </div>
      {/each}
    </div>
  </div>
{/if}

{#if y > 2700}
  <div
    in:fly={{ delay: 1000, x: -400, duration: 1000 }}
    out:fade={{ delay: 0, duration: 300 }}
    id="surveillance"
    class="flex flex-col md:flex-row gap-12 max-w-xl md:max-w-5xl mx-auto items-center px-4"
  >
    <div class="flex-1">
      <H2>{data.surveillance.title}</H2>
    </div>

    <p class="flex-1 text-white text-xl">
      {@html data.surveillance.body}
    </p>
  </div>
{/if}

{#if y > 3000}
  <div
    in:fade={{ delay: 1000, duration: 1600 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col gap-12 max-w-xl md:max-w-3xl mx-auto px-4"
  >
    <div
      class="border-2 border-green-cj rounded text-green-cj text-center px-8 py-6"
    >
      <h2 class="text-3xl md:text-5xl font-inconsolata">
        {data.catch.title}
      </h2>
    </div>
    <div class="text-white text-xl text-center">
      {@html data.catch.body}
    </div>
  </div>
{/if}

{#if y > 3800}
  <div
    in:fly={{ delay: 1000, x: -400, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col md:flex-row max-w-xl md:max-w-5xl justify-between mx-auto gap-24 items-center px-4"
  >
    <div>
      <H2>{data.hide.title}</H2>
    </div>
    <div class="text-white text-xl">
      {@html data.hide.body}
    </div>
  </div>
{/if}

{#if y > 4300}
  <div
    in:fade={{ delay: 1000, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col gap-12 items-center text-center max-w-3xl mx-auto px-4"
  >
    <H2>{data.privacy.title}</H2>
    <p class="text-white text-xl">
      {data.privacy.body}
    </p>
  </div>
{/if}

{#if y > 4800}
  <div
    in:fade={{ delay: 1000, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col gap-20 items-center max-w-lg mx-auto px-4"
  >
    <div
      class="border-4 rounded border-red p-4 md:p-8 text-3xl md:text-5xl text-center text-red font-inconsolata"
    >
      {data.reclaim.one}
    </div>
    <div class="max-h-60"><RedLine /></div>
    <div
      class="border-none text-3xl md:text-5xl text-center text-white font-inconsolata"
    >
      {data.reclaim.two}
    </div>
    <div class="max-h-60"><GreenLine /></div>
    <div
      class="border-4 rounded border-green-cj p-4 md:p-8 text-3xl md:text-5xl text-center text-green-cj font-inconsolata"
    >
      {data.reclaim.three}
    </div>
  </div>
{/if}

{#if y > 6200}
  <div
    class="relative"
    in:fade={{ delay: 1000, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
  >
    <div
      class="min-w-[320px] hidden w-full h-full md:flex justify-center items-center"
    >
      <Cj />
    </div>
    <div
      class="min-w-[320px] w-full flex justify-center items-center md:hidden"
    >
      <CoinjoinMobile />
    </div>

    <div
      id="coinjoins"
      class="min-w-[320px] absolute mx-auto px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl"
    >
      <div
        class="flex flex-col items-center gap-28 text-center"
        transition:fade={{ duration: 1400, delay: 400 }}
      >
        <H2>{data.coinjoins.title}</H2>

        <div class="flex flex-col max-w-xl lg:flex-row lg:max-w-none gap-12">
          {#each data.coinjoins.description as desc}
            <div class="text-white text-2xl text-center">
              {desc}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

{#if y > 7400}
  <div
    id="faq"
    class="px-4 flex flex-col gap-28"
    in:fade={{ delay: 400, duration: 1000 }}
    out:fade={{ delay: 0, duration: 300 }}
  >
    <div
      class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto"
    >
      <H2>{data.fud.title}</H2>
      <p class="text-white text-xl">
        {data.fud.body}
      </p>
    </div>

    <div class="text-white max-w-5xl mx-auto flex flex-col gap-12 flex-1 pt-12">
      {#each data.fudBustList as fud, i}
        <div class="flex flex-col gap-4">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="flex gap-2 md:gap-10 items-center justify-between hover:cursor-pointer text-red"
            on:click={() => {
              handleQuestionClick(i);
            }}
          >
            <div
              class="flex gap-2 font-inconsolata text-xl md:text-2xl {data
                .fudBustList[i].isClicked
                ? 'text-red font-bold'
                : 'text-white font-normal'}"
            >
              <div>{i + 1 + "."}</div>
              <div>
                {fud.question}
              </div>
            </div>
            <div class="w-8 flex-shrink-0">
              {#if data.fudBustList[i].isClicked}
                <ClickedArrow />
              {:else}
                <UnclickedArrow />
              {/if}
            </div>
          </div>
          {#if data.fudBustList[i].isClicked}
            <div
              class="text-white/80 text-xl md:px-16"
              in:fly={{ y: 200, duration: 600 }}
              out:fade={{ delay: 0, duration: 300 }}
            >
              {@html fud.answer}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
{/if}

{#if y > 9000}
  <div
    in:fly={{ delay: 1000, y: -100, duration: 1400 }}
    out:fade={{ delay: 0, duration: 300 }}
    class="flex flex-col gap-28 px-4"
  >
    <div class="flex flex-col items-start gap-14 max-w-3xl text-center mx-auto">
      <H2>{data.benefits.title}</H2>
      <p class="text-white text-xl">
        {data.benefits.body}
      </p>
    </div>
    <div
      class="flex flex-wrap lg:flex-row justify-between gap-8 max-w-5xl mx-auto"
    >
      {#each data.benefits.list as benefit}
        <div
          class="whitespace-nowrap flex-1 flex flex-col items-center gap-8 border-2 border-white rounded-lg px-10 py-8 text-center"
        >
          <div class="w-10">
            {#if benefit.icon === "greenbitcoin"}
              <GreenBitcoin />
            {:else if benefit.icon === "greenbrackets"}
              <GreenBrackets />
            {:else if benefit.icon === "greenban"}
              <GreenBan />
            {:else if benefit.icon === "greenkey"}
              <GreenKey />
            {/if}
          </div>
          <p class="text-xl">{@html benefit.title}</p>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  ol {
    counter-reset: cupcake;
  }
  li {
    counter-increment: cupcake;
    padding-bottom: 32px;
  }
  li:before {
    content: counters(cupcake, ".") ". ";
    color: #00ff19;
    font-weight: bold;
    font-size: large;
  }

  @keyframes animateUp {
    0% {
      opacity: 0.8;
      transform: translateY(0) translateX(0);
    }
    50% {
      opacity: 0.2;
      transform: translateY(-40px) translate(25px);
    }
    100% {
      opacity: 0.8;
      transform: translateY(0) translateX(0);
    }
  }
  @keyframes animateDown {
    0% {
      opacity: 0.2;
      transform: translateY(0) translateX(0);
    }
    50% {
      opacity: 0.8;
      transform: translateY(40px) translate(20px);
    }
    100% {
      opacity: 0.2;
      transform: translateY(0) translateX(0);
    }
  }
  .eye-move-up {
    animation: animateUp 21s linear infinite;
  }
  .eye-move-down {
    animation: animateDown 21s linear infinite;
  }
  .eye-1 {
    animation-duration: 19s;
  }
  .eye-2 {
    animation-duration: 8s;
  }
  .eye-3 {
    animation-duration: 18s;
  }
  .eye-4 {
    animation-duration: 20s;
  }
  .eye-5 {
    animation-duration: 12s;
  }
  .eye-6 {
    animation-duration: 6s;
  }
  .eye-7 {
    animation-duration: 6s;
  }
  .eye-8 {
    animation-duration: 12s;
  }
  .eye-9 {
    animation-duration: 18s;
  }
  .eye-10 {
    animation-duration: 18s;
  }
  .eye-11 {
    animation-duration: 8s;
  }
  .eye-12 {
    animation-duration: 6s;
  }
</style>
