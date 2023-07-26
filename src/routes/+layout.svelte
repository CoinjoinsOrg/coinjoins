<script>
  import "../app.css";
  import CoinjoinLogo from "../lib/img/CoinjoinLogo.svelte";
  import gustavo from "@lib/img/gus.png";
  import thibaud from "@lib/img/thib.png";
</script>

<div class="flex justify-between max-w-5xl mx-auto py-6 items-center">
  <div class="flex-auto">
    <div class="w-6">
      <CoinjoinLogo />
    </div>
  </div>
  <div
    class="flex flex-1 justify-between font-inconsolata font-normal text-white"
  >
    <div class="hover:text-green-cj hover:cursor-pointer">Intro</div>
    <div class="hover:text-green-cj hover:cursor-pointer">Advanced</div>
    <div class="hover:text-green-cj hover:cursor-pointer">History</div>
  </div>
  <div class="flex-auto flex justify-end">
    <a
      href="/"
      class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline"
      >Try coinjoins</a
    >
  </div>
</div>

<div class="min-w[320px] bg-dark-blue flex flex-col gap-40">
  <slot />
</div>

<div class="flex flex-col items-center gap-16 pt-36">
  <div class="h-px bg-green-cj w-80 mx-auto" />
  <div class="flex flex-col items-center gap-8">
    <div class="text-xl">Maintainers</div>
    <div class="flex gap-10">
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
