<script>
  import data from "@lib/data/footer.json";
  import { goto } from "$app/navigation";

  import H2 from "@components/H2.svelte";
  import CoinjoinLogo from "@lib/img/CoinjoinLogo.svelte";

  const footerData = data;
</script>

<div
  class="max-w-5xl mx-auto pt-96 pb-8 min-w-[320px] flex flex-col gap-40 px-4"
>
  <div class="flex flex-col items-center gap-14 max-w-3xl text-center mx-auto">
    <H2>{footerData.questions.title}</H2>
    <p class="text-white text-xl">
      {@html footerData.questions.body}
    </p>
  </div>
  <div class="h-[1px] bg-green-cj w-full max-w-md mx-auto" />

  <div class="flex flex-col gap-20">
    <div class="flex flex-col md:flex-row md:justify-between gap-20">
      <div class="md:flex-1">
        <a href={footerData.logo_url}
          ><div class="w-12"><CoinjoinLogo /></div></a
        >
      </div>
      <div
        class="flex flex-col md:flex-auto sm:flex-row justify-start md:justify-end gap-8"
      >
        <div class="flex flex-col gap-5 w-1/2 sm:w-auto">
          <div
            class="text-green-cj font-bold text-lg font-inconsolata text-left"
          >
            {footerData.intro.title}
          </div>

          <div class="flex flex-col gap-2">
            {#each footerData.intro.menu as item}
              <div>
                <button
                  class="no-underline hover:cursor-pointer hover:text-green-cj"
                  on:click={() => goto(item.link)}>{item.text}</button
                >
              </div>
            {/each}
          </div>
        </div>
        <div class="flex flex-col gap-5 w-1/2 sm:w-auto">
          <div class="text-green-cj font-bold text-lg font-inconsolata">
            {footerData.wallet_overview.title}
          </div>

          <div class="flex flex-col gap-2">
            {#each footerData.wallet_overview.menu as item}
              <div class="flex gap-2 items-center">
                <button
                  disabled={item.link === "#"}
                  class="no-underline {item.link.includes('#')
                    ? 'text-inactive-grey hover:cursor-default'
                    : 'hover:cursor-pointer hover:text-green-cj'}"
                  on:click={item.link === "wallet-overview"
                    ? () => goto("/" + item.link)
                    : () => goto("/wallets/" + item.link)}>{item.text}</button
                >{#if item.link.includes("#")}
                  <span
                    class="text-green-cj text-[9px] px-1 rounded border border-green-cj"
                    >SOON</span
                  >
                {/if}
              </div>
            {/each}
          </div>
        </div>
        <div class="flex flex-col gap-5 w-1/2 sm:w-auto">
          <div class="text-green-cj font-bold text-lg font-inconsolata">
            {footerData.history.title}
          </div>

          <div class="flex flex-col gap-2">
            {#each footerData.history.menu as item}
              <div>
                <button
                  class="no-underline hover:cursor-pointer hover:text-green-cj"
                  on:click={() => goto(`/history/#${item.link}`)}
                  >{item.text}</button
                >
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] bg-green-cj w-full" />
    <div class="flex flex-col md:flex-row md:justify-between gap-16">
      <div class="flex flex-col items-center md:items-start gap-5">
        <div class="font-bold">{footerData.contributors_title}</div>
        <div
          class="flex flex-col sm:flex-row sm:justify-between gap-6 md:gap-12"
        >
          {#each footerData.contributors as contributor}
            <div class="flex flex-col items-center gap-2 flex-1 flex-shrink-0">
              <div>
                <img
                  src={"/contributors/" + contributor.photo}
                  alt={contributor.name}
                />
              </div>
              <div class="text-center">
                <a href={contributor.link} class="text-green-cj no-underline"
                  >{contributor.name}</a
                >
              </div>
            </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-col items-center gap-2 md:items-end">
        <div>{footerData.wrap.site}</div>
        <div>
          <a
            class="no-underline text-green-cj font-inconsolata"
            href={footerData.wrap.hashtag_url}>{footerData.wrap.hashtag}</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
