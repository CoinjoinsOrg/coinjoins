<script>
  import data from "@lib/data/advanced.json";

  import H1 from "@lib/components/H1.svelte";
  import H2 from "@lib/components/H2.svelte";
  import FlatCoinjoinSvg from "@lib/components/FlatCoinjoinSvg.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import GreenText from "@lib/components/GreenText.svelte";
  import MagnifyingGlassSvg from "@lib/img/MagnifyingGlassSvg.svelte";
  import ClickedArrow from "@lib/img/ClickedArrow.svelte";
  import UnclickedArrow from "@lib/img/UnclickedArrow.svelte";

  const essentialsList = data.essentialsList;
  const wallets = data.wallets;

  function handleEssentialTitleClick(i) {
    essentialsList[i].isClicked = !essentialsList[i].isClicked;
  }
</script>

<div class="px-4 flex flex-col gap-10 pt-8">
  <H1>Into the Guts of Coinjoins</H1>
  <div class="text-lg">
    Picking the right wallet with coinjoins ain’t easy. Some folks would say to
    use Wasabi Wallet. Others would tell you to use Samourai or suggest to try
    JoinMarket. So which one to choose? And why?
  </div>
  <div>
    <FlatCoinjoinSvg />
  </div>
  <div class="flex justify-center">
    <div class="w-6 animate-bounce">
      <a href="#open">
        <ArrowDown />
      </a>
    </div>
  </div>
</div>

<div class="px-4 flex flex-col gap-6">
  <div class="w-16">
    <MagnifyingGlassSvg />
  </div>
  <H2>Don’t Trust,<br /> <GreenText>Verify</GreenText></H2>
  <div class="flex flex-col gap-4">
    <p>
      Unspent Transaction Outputs, or UTXOs, are essentially the coins in the
      bitcoin network.
    </p>
    <p>
      Each UTXO has a very distinct transaction history, making all bitcoin
      transactions easily trackable and unique from one another.
    </p>
  </div>
</div>

<div class="flex flex-col gap-6 px-4">
  <div
    class="text-green-cj text-center rounded-lg border-4 border-green-cj px-6 py-4"
  >
    <H2><GreenText>What is a Coinjoin Protocol?</GreenText></H2>
  </div>
  <div class="text-lg text-center">
    A coinjoin protocol is the design of the software that is used to create
    collaborative bitcoin transactions. There are currently 3 popular coinjoin
    protocols that are used in bitcoin wallets: JoinMarket, WabiSabi, Whirlpool.
  </div>
</div>

<div class="px-4 flex flex-col gap-6">
  <div class="flex flex-col gap-6 text-center">
    <H2>Privacy Essentials for Coinjoins</H2>
    <div>
      Bitcoin wallets with coinjoins have different tradeoffs. Common to all,
      there are essential things to consider when looking at all the options
      available.
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
          <div class="text-white/80 text-xl md:px-16">
            {@html essential.body}
            <ul>
              {#each essential.questions as question, index}
                <li>
                  * {question}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<div class="px-4 flex flex-col gap-8">
  <div class="flex flex-col gap-6 text-center">
    <H2>Let’s Compare Bitcoin Wallets with Coinjoins</H2>
    <div class="text-lg">
      It is obviously not a walk in the park to compare each bitcoin wallet but
      we will try to present them with different considerations so that you can
      make up your own mind.
    </div>
  </div>
  <div class="flex flex-col items-center gap-8">
    {#each wallets as wallet}
      <div class="flex flex-col gap-6 items-center">
        <div class="w-16">
          <img src={"src/lib/img/logos/" + wallet.icon} alt={wallet.name} />
        </div>
        <a
          href={wallet.page}
          class="border-2 rounded-lg py-2 px-4 no-underline hover:text-dark-blue {wallet.page.includes(
            'wasabi'
          ) ||
          wallet.page.includes('samourai') ||
          wallet.page.includes('sparrow')
            ? 'border-green-cj text-green-cj hover:bg-green-cj'
            : 'text-[rgba(107,110,134,0.95)] border-[rgba(107,110,134,0.95)] hover:text-[rgba(107,110,134,0.95)] hover:cursor-default'}"
          >About {wallet.name}</a
        >
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
