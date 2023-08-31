<script>
  import data from "@data/404.json";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import MagnifyingGlassSvg from "@lib/img/MagnifyingGlassSvg.svelte";
  import ChevronLeft from "../lib/img/ChevronLeft.svelte";

  let isButtonHover = false;
  function goToBasics() {
    goto("/");
  }
</script>

<div class="max-w-4xl mx-auto flex justify-between h-[70vh] gap-16 pt-16">
  <div class="flex flex-col items-start gap-12">
    <div class="text-7xl text-green-cj font-bold">{$page.status}</div>
    <div>{data.main_message}</div>
    <div>
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button
        on:click={goToBasics}
        on:mouseenter={() => (isButtonHover = true)}
        on:mouseout={() => (isButtonHover = false)}
        class="flex gap-2 items-center border-2 w-full bg-green-cj text-dark-blue text-center rounded-lg py-2 px-4 no-underline border-green-cj hover:text-green-cj hover:bg-dark-blue hover:cursor-pointer"
      >
        <div class="w-4 inline-block">
          <ChevronLeft color={isButtonHover ? "#00FF19" : "#181B2D"} />
        </div>
        {data.back_btn}</button
      >
    </div>
  </div>
  <div class="h-80">
    <MagnifyingGlassSvg />
  </div>
</div>
