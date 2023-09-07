<script>
  import data from "@lib/data/wallet-overview.json";

  import H1 from "@lib/components/H1.svelte";
  import H2 from "@lib/components/H2.svelte";
  import FlatCoinjoinSvg from "@lib/components/FlatCoinjoinSvg.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import GreenText from "@lib/components/GreenText.svelte";
  import MagnifyingGlassSvg from "@lib/img/MagnifyingGlassSvg.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";
  import GreenCircleSvg from "@lib/img/GreenCircleSvg.svelte";
  import CompareWalletsBox from "@lib/components/CompareWalletsBox.svelte";

  const overview = data.overview;
  const wallets = data.wallets;
  const essentialsList = data.essentialsList;

  function handleEssentialTitleClick(i) {
    essentialsList[i].isClicked = !essentialsList[i].isClicked;
  }
  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="px-4 flex flex-col gap-10 w-full mx-auto pt-32">
  <div class=" flex flex-col gap-10 max-w-3xl mx-auto">
    <H1>{overview.hero_title}</H1>
    <div class="text-lg">
      {overview.hero_subtitle}
    </div>
    <div class="flex justify-center">
      <div class="w-6 animate-bounce">
        <a href="#verify">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>
  <div>
    <FlatCoinjoinSvg />
  </div>
</div>

<div id="verify" class="px-4 flex flex-col gap-14 max-w-3xl mx-auto">
  <div class="w-16">
    <MagnifyingGlassSvg />
  </div>
  <H2>{@html overview.verify_header}</H2>
  <div class="flex flex-col gap-4">
    <p>
      {overview.verify_body_1}
    </p>
    <p>
      {overview.verify_body_2}
    </p>
  </div>
</div>

<div class="flex flex-col gap-14 px-4 max-w-3xl mx-auto">
  <div
    class="text-green-cj text-center rounded-lg border-4 border-green-cj px-6 py-4"
  >
    <H2><GreenText>{overview.cj_protocol_header}</GreenText></H2>
  </div>
  <div class="text-lg text-center">
    {@html overview.cj_protocol_body}
  </div>
</div>

<div class="px-4 flex flex-col gap-14 max-w-3xl mx-auto">
  <div class="flex flex-col gap-14 text-center">
    <H2>{overview.essentials_header}</H2>
    <div>
      {overview.essentials_sub_header}
    </div>
  </div>
  <div class="flex flex-col gap-4">
    {#each essentialsList as essential, i}
      <div class="flex flex-col gap-4">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="flex gap-2 md:gap-10 items-center justify-between hover:cursor-pointer text-red"
          on:click={() => {
            handleEssentialTitleClick(i);
          }}
        >
          <div
            class="flex gap-2 font-inconsolata text-xl md:text-2xl text-green-cj {essentialsList[
              i
            ].isClicked
              ? 'font-bold'
              : 'font-normal'}"
          >
            <div>{i + 1 + "."}</div>
            <div>
              {essential.title}
            </div>
          </div>
          <div class="w-8 flex-shrink-0">
            {#if essentialsList[i].isClicked}
              <ClickedArrow color={"rgb(0,255,25,1.0)"} />
            {:else}
              <UnclickedArrow color={"rgb(0,255,25,1.0)"} />
            {/if}
          </div>
        </div>
        {#if essentialsList[i].isClicked}
          <div class="text-white/80 text-xl md:px-16 pb-8 flex flex-col gap-6">
            <div>
              {@html essential.body}
            </div>
            <div class="font-bold">Additional Questions</div>
            <ul>
              {#each essential.questions as question, index}
                <li class="pt-2">
                  <div class="w-3 inline-block mx-4">
                    <GreenCircleSvg />
                  </div>
                  {question}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<CompareWalletsBox
  header={overview.compare_header}
  subheader={overview.compare_subheader}
  walletsList={wallets}
/>

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
