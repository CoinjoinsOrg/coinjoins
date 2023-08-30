<script>
  import overviewDataFile from "@lib/data/wallet-overview.json";

  import H1 from "@components/H1.svelte";
  import H2 from "@components/H2.svelte";
  import FlatCoinjoinSvg from "@components/FlatCoinjoinSvg.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import GreenText from "@components/GreenText.svelte";
  import CompareWalletsBox from "@components/CompareWalletsBox.svelte";
  import TelescopeSvg from "@lib/img/TelescopeSvg.svelte";
  import GreenCircleSvg from "@lib/img/GreenCircleSvg.svelte";
  import BlueCheckSvg from "@lib/img/BlueCheckSvg.svelte";
  import XCircleSvg from "@lib/img/XCircleSvg.svelte";
  import RedText from "@components/RedText.svelte";
  import GitHub from "@lib/img/GitHub.svelte";
  import Twitter from "@lib/img/Twitter.svelte";
  import Website from "@lib/img/Website.svelte";

  export let data;
  let y;

  const overview = overviewDataFile.overview;
  const wallets = overviewDataFile.wallets;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>{data.content.title}</title>
</svelte:head>

<div class="relative px-4 pt-10 h-[50vh] max-w-3xl mx-auto">
  <div class="absolute flex flex-col gap-10 pt-32">
    <H1
      >{data.content.wallet_name}<br /><GreenText
        >& {data.content.protocol_name}</GreenText
      ></H1
    >
    <div class="text-lg">
      {data.content.hero}
    </div>

    <div class="flex gap-6">
      <div class="w-6"><a href={data.content.github}> <GitHub /></a></div>
      <div class="w-6"><a href={data.content.twitter}> <Twitter /></a></div>
      <div class="w-6"><a href={data.content.website}> <Website /></a></div>
    </div>

    <div class="flex justify-center">
      <div class="w-6 animate-bounce">
        <a href="#overview">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>

  <img src="/wallets-bg/{data.content.wallet_logo}-bg.png" alt="Wasabi Logo" />
</div>

<div>
  <FlatCoinjoinSvg />
</div>

<div id="overview" class="px-4 flex flex-col gap-6 max-w-3xl mx-auto md:gap-12">
  <div class="w-20">
    <TelescopeSvg />
  </div>
  <H2>Overview</H2>
  <div class="flex flex-col gap-6">
    {#each Object.entries(data.content.overview) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <GreenCircleSvg />
        </div>
        <p>{text}</p>
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
    {#each Object.entries(data.content.benefits) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <BlueCheckSvg />
        </div>
        <p>{text}</p>
      </div>
    {/each}
  </div>
</div>

<div class="px-4 flex flex-col gap-6 md:gap-12 max-w-3xl mx-auto">
  <div class="text-center rounded-lg border-4 border-red px-6 py-4">
    <H2><RedText>Trade Offs</RedText></H2>
  </div>
  <div class="flex flex-col gap-6">
    {#each Object.entries(data.content.tradeoffs) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <XCircleSvg />
        </div>
        <p>{text}</p>
      </div>
    {/each}
  </div>
</div>

<CompareWalletsBox
  header={overview.compare_header}
  subheader={overview.compare_subheader}
  walletsList={wallets}
/>
