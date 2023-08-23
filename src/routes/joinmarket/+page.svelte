<script>
  import data from "@lib/data/joinmarket.json";

  import H1 from "@lib/components/H1.svelte";
  import H2 from "@lib/components/H2.svelte";
  import FlatCoinjoinSvg from "@lib/components/FlatCoinjoinSvg.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import GreenText from "@lib/components/GreenText.svelte";
  import joinmarketLogo from "@lib/img/wallets/joinmarket-bg.png";
  import TelescopeSvg from "@lib/img/TelescopeSvg.svelte";
  import GreenCircleSvg from "@lib/img/GreenCircleSvg.svelte";
  import BlueCheckSvg from "@lib/img/BlueCheckSvg.svelte";
  import XCircleSvg from "@lib/img/XCircleSvg.svelte";
  import RedText from "@lib/components/RedText.svelte";

  let y;

  const joinmarketData = data;
</script>

<svelte:window bind:scrollY={y} />

<div class="relative px-4 pt-10 h-[60vh] max-w-5xl mx-auto">
  <div class="absolute flex flex-col gap-10 pt-8">
    <H1>QT & CLI <br /><GreenText>By JoinMarket</GreenText></H1>
    <div class="text-lg">
      {joinmarketData.hero}
    </div>
    <div>
      <FlatCoinjoinSvg />
    </div>
    <div class="flex justify-center">
      <div class="w-6 animate-bounce">
        <a href="#overview">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>

  <img src={joinmarketLogo} alt="JoinMarket Logo" />
</div>

<div class="px-4 flex flex-col gap-6 max-w-3xl mx-auto md:gap-12" id="overview">
  <div class="w-20">
    <TelescopeSvg />
  </div>
  <H2>Overview</H2>
  <div class="flex flex-col gap-6">
    {#each Object.entries(joinmarketData.overview) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <GreenCircleSvg />
        </div>
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>

<div class="px-4 flex flex-col gap-6 max-w-3xl mx-auto md:gap-12">
  <div
    class="text-green-cj text-center rounded-lg border-4 border-green-cj px-6 py-4"
  >
    <H2><GreenText>Benefits</GreenText></H2>
  </div>
  <div class="flex flex-col gap-6">
    {#each Object.entries(joinmarketData.benefits) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <BlueCheckSvg />
        </div>
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>
<div class="px-4 flex flex-col gap-6 md:gap-12 max-w-3xl mx-auto">
  <div class="text-center rounded-lg border-4 border-red px-6 py-4">
    <H2><RedText>Trade Offs</RedText></H2>
  </div>
  <div class="flex flex-col gap-6">
    {#each Object.entries(joinmarketData.tradeoffs) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <XCircleSvg />
        </div>
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>

<div
  class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto px-4"
>
  <H2>Have More Questions?</H2>
  <p class="text-white text-xl">
    If you have any comments or suggestions, we are open to hearing from you.
    Please reach out on <a href="mailto:coinjoins@protonmail.com"
      >coinjoins@protonmail.com</a
    >.
  </p>
</div>
