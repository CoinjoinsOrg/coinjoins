<script lang="ts">
  import text from "@lib/data/calculator.json";

  import H1 from "@lib/components/H1.svelte";
  import FlatCoinjoinSvg from "@lib/components/FlatCoinjoinSvg.svelte";
  import ArrowDown from "@lib/img/ArrowDown.svelte";
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import H3 from "@components/H3.svelte";

  export let data;
  export let form;

  let y: number;
  let btcAmount: number = 0;
  let inputCount: number = 0;
  let isPrivacyLevelHigh: boolean;
  let currentFeeRate: number = 0;
  let isFirstCoinjoin: boolean;

  onMount(() => {
    currentFeeRate = data?.miningFees?.data?.fastestFee;
    const { hash } = document.location;
    const scrollTo = hash && document.getElementById(hash.slice(1));

    if (scrollTo) {
      setTimeout(() => scrollTo.scrollIntoView(), 800);
    }
  });

  function handlePrivacyLevelChange(event: any) {
    isPrivacyLevelHigh = event.target.value as boolean;
  }

  function handleIsFirstCoinjoinChange(event: any) {
    isFirstCoinjoin = event.target.value as boolean;
  }

  function scrollToResults() {
    const element = document.getElementById("results");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="px-4 flex flex-col gap-10 w-full mx-auto pt-32">
  <div class=" flex flex-col gap-10 max-w-3xl mx-auto">
    <H1>{text.hero.title}</H1>
    <div class="text-lg">
      {text.hero.body}
    </div>
    <div class="flex justify-center">
      <div class="w-6 animate-bounce">
        <a href="#calculator">
          <ArrowDown />
        </a>
      </div>
    </div>
  </div>
</div>

<div class="p-4 flex flex-col gap-6 max-w-xl mx-auto" id="calculator">
  <form
    method="POST"
    class="flex flex-col items-center w-full gap-4"
    use:enhance={() => {
      return ({ update }) => update({ reset: false });
    }}
  >
    <label
      for="how_much_bitcoin"
      class="border rounded-md border-green-cj p-6 flex flex-col md:flex-row items-start md:items-center gap-4 font-inconsolata text-base w-full justify-between"
    >
      {text.calculator.how_much_bitcoin.label}
      <div>
        <input
          type="number"
          id="how_much_bitcoin"
          name="how_much_bitcoin"
          class="text-dark-blue text-right px-2 max-w-20"
          bind:value={btcAmount}
        />
        {text.calculator.how_much_bitcoin.btc}
      </div>
    </label>

    <label
      for="how_many_inputs"
      class="border rounded-md border-green-cj p-6 flex flex-col md:flex-row items-start md:items-center gap-4 font-inconsolata text-base w-full justify-between"
    >
      {text.calculator.how_many_inputs.label}
      <input
        type="number"
        id="how_many_inputs"
        name="how_many_inputs"
        bind:value={inputCount}
        class="text-dark-blue text-right px-2 max-w-20"
      />
    </label>

    <label
      for="privacy_level"
      class="border rounded-md border-green-cj p-6 flex flex-col md:flex-row items-start md:items-center gap-4 font-inconsolata text-base w-full justify-between"
    >
      {text.calculator.expected_privacy.label}
      <select
        on:change={handlePrivacyLevelChange}
        bind:value={isPrivacyLevelHigh}
        name="privacy_level"
        class="text-dark-blue text-right px-2"
      >
        <option value="">{text.calculator.expected_privacy.placeholder}</option>
        {#each text.calculator.expected_privacy.dropdown as level}
          <option value={level.id}>{level.name}</option>
        {/each}
      </select>
    </label>

    <label
      for="mining_fees"
      class="border rounded-md border-green-cj p-6 flex flex-col md:flex-row items-start md:items-center gap-4 font-inconsolata text-base w-full justify-between"
    >
      {text.calculator.current_fee_rate}
      <input
        type="text"
        id="mining_fees"
        name="mining_fees"
        bind:value={currentFeeRate}
        readonly
        class="text-dark-blue text-right px-2 hover:cursor-not-allowed"
      />
    </label>

    <label
      for="is_first_coinjoin"
      class="border rounded-md border-green-cj p-6 flex flex-col md:flex-row items-start md:items-center gap-4 font-inconsolata text-base w-full justify-between"
    >
      {text.calculator.is_first_coinjoin.label}
      <select
        on:change={handleIsFirstCoinjoinChange}
        bind:value={isFirstCoinjoin}
        name="is_first_coinjoin"
        class="text-dark-blue text-right px-2"
      >
        <option value="">{text.calculator.is_first_coinjoin.placeholder}</option
        >
        {#each text.calculator.is_first_coinjoin.dropdown as option}
          <option value={option.id}>{option.name}</option>
        {/each}
      </select>
    </label>

    <div class="w-full flex justify-center pt-4">
      <button
        on:click={() => scrollToResults()}
        type="submit"
        class="bg-green-cj px-4 py-2 rounded-md text-dark-blue"
        >{text.calculator.cta.text}</button
      >
    </div>
  </form>
</div>

{#if form?.success}
  <div class="w-full flex flex-col items-center gap-4 p-4" id="results">
    <div class="w-full flex flex-col items-start max-w-xl gap-2">
      <H3>{text.results.title}</H3>
      <div class="flex flex-col gap-4 w-full">
        <div class="flex justify-between items-start w-full gap-4">
          <div>
            <div>
              {text.results.total_fees.title}
            </div>
            <div class="text-sm text-grey">
              {text.results.total_fees.subtitle}
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <div class="whitespace-nowrap">
              {form?.totalFeesInBtc.toFixed(8)} BTC
            </div>
            <div class="text-sm text-grey">
              {form?.totalFeesInSats.toLocaleString()} sats
            </div>
          </div>
        </div>

        <div class="flex justify-between items-start w-full gap-4">
          <div>
            <div>
              {text.results.coordinator_fees.title}
            </div>
            <div class="text-sm text-grey">
              {text.results.coordinator_fees.subtitle}
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <div class="whitespace-nowrap">
              {form?.coordinatorFeesInBtc.toFixed(8)} BTC
            </div>
            <div class="text-sm text-grey">
              {form?.coordinatorFeesInSats.toLocaleString()} sats
            </div>
          </div>
        </div>

        <div class="flex justify-between items-start w-full gap-4">
          <div>
            <div>
              {text.results.mining_fees.title}
            </div>
            <div class="text-sm text-grey">
              {text.results.mining_fees.subtitle}
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <div class="whitespace-nowrap">
              {form?.miningFeesInBtc.toFixed(8)} BTC
            </div>
            <div class="text-sm text-grey">
              {form?.miningFeesInSats.toLocaleString()} sats
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="w-full max-w-xl flex justify-center mx-auto">
    <div class="w-full">
      {text.no_results.title}
    </div>
  </div>
{/if}
