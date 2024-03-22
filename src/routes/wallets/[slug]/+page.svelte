<script>
  import overviewDataFile from "@lib/data/wallet-overview.json";

  import H1 from "@components/H1.svelte";
  import H2 from "@components/H2.svelte";
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
  import Calendar from "@lib/img/Calendar.svelte";
  import Package from "@lib/img/Package.svelte";
  import Code from "@lib/img/Code.svelte";
  import Address from "@lib/img/Address.svelte";
  import Tag from "@lib/components/Tag.svelte";

  export let data;
  let y;

  const overview = overviewDataFile.overview;
  const wallets = overviewDataFile.wallets;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>{data.content.title}</title>
</svelte:head>

<div class="relative px-4 pt-10 h-[60vh] max-w-3xl mx-auto">
  <div class="absolute flex flex-col items-start gap-10 pt-32 px-4">
    <div class="flex gap-4">
      {#each data.content.tags as tag}
        <Tag type={tag.type} title={tag.title} description={tag.description} />
      {/each}
    </div>
    <H1
      >{data.content.wallet_name}<br />
      {#if data.content.wallet_name !== "Joinstr"}
        <GreenText>& {data.content.protocol_name}</GreenText>
      {/if}
    </H1>
    <div class="text-lg">
      {data.content.hero}
    </div>

    <div class="flex gap-6">
      <div class="w-6"><a href={data.content.github}> <GitHub /></a></div>
      <div class="w-6"><a href={data.content.twitter}> <Twitter /></a></div>
      <div class="w-6"><a href={data.content.website}> <Website /></a></div>
    </div>

    <div class="flex w-full justify-center">
      <div class="w-6 animate-bounce">
        <a href="#overview">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>

  <img
    src="/wallets-bg/{data.content.wallet_logo}-bg.png"
    alt="{data.content.wallet_name} Logo"
  />
</div>

<div
  id="overview"
  class="px-4 flex flex-col gap-6 max-w-2xl mx-auto md:gap-12 items-center"
>
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
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>

<div class="px-4 flex flex-col gap-6 max-w-2xl mx-auto md:gap-12">
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
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>

<div class="px-4 flex flex-col gap-6 md:gap-12 max-w-2xl mx-auto">
  <div class="text-center rounded-lg border-4 border-red px-6 py-4">
    <H2><RedText>Trade Offs</RedText></H2>
  </div>
  <div class="flex flex-col gap-6">
    {#each Object.entries(data.content.tradeoffs) as [point, text]}
      <div class="flex gap-4 items-start">
        <div class="w-4 flex-shrink-0">
          <XCircleSvg />
        </div>
        <p>{@html text}</p>
      </div>
    {/each}
  </div>
</div>

<div class="flex flex-col justify-between gap-10 px-2 text-center">
  <H2>Extra Details</H2>
  <div
    class="flex flex-wrap justify-center md:justify-between max-w-5xl mx-auto gap-10"
  >
    {#each data.content.basics as item}
      <div
        class="flex flex-col gap-2 items-center w-full sm:w-[calc(50%-40px)] md:w-[calc(25%-40px)]"
      >
        <div class="w-8">
          {#if item.id === "release_date"}
            <Calendar />
          {:else if item.id === "platform"}
            <Package />
          {:else if item.id === "programming_language"}
            <Code />
          {:else}
            <Address />
          {/if}
        </div>
        <div class="text-lg font-inconsolata">
          {item.title}
        </div>
        <div class="text-sm">{item.body}</div>
      </div>
    {/each}
  </div>
</div>

<CompareWalletsBox
  header={overview.compare_header}
  subheader={overview.compare_subheader}
  walletsList={wallets}
/>
