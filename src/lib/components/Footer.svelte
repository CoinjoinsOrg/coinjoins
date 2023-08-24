<script>
  import data from "@lib/data/footer.json";

  import CoinjoinLogo from "@lib/img/CoinjoinLogo.svelte";

  const footerData = data;
</script>

<div class="px-4 max-w-5xl mx-auto pt-32 pb-8 flex flex-col gap-20">
  <div class="flex flex-col md:flex-row md:justify-between gap-20">
    <div class="md:flex-1">
      <a href={footerData.logo_url}><div class="w-12"><CoinjoinLogo /></div></a>
    </div>
    <div class="flex flex-wrap md:flex-auto justify-between">
      <div class="flex flex-col gap-5 w-1/2 sm:w-[30%]">
        <div class="text-green-cj font-bold text-lg font-inconsolata">
          {footerData.intro.title}
        </div>

        <div class="flex flex-col gap-2">
          {#each footerData.intro.menu as item}
            <div>
              <a class="no-underline hover:cursor-pointer" href={item.link}
                >{item.text}</a
              >
            </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-1/2 sm:w-[30%]">
        <div class="text-green-cj font-bold text-lg font-inconsolata">
          {footerData.advanced.title}
        </div>

        <div class="flex flex-col gap-2">
          {#each footerData.advanced.menu as item}
            <div>
              <a class="no-underline hover:cursor-pointer" href={item.link}
                >{item.text}</a
              >
            </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-1/2 sm:w-[30%]">
        <div class="text-green-cj font-bold text-lg font-inconsolata">
          {footerData.history.title}
        </div>

        <div class="flex flex-col gap-2">
          {#each footerData.history.menu as item}
            <div>
              <a class="no-underline hover:cursor-pointer" href={item.link}
                >{item.text}</a
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
      <div class="flex flex-col md:flex-row md:justify-between gap-6 md:gap-12">
        {#each footerData.contributors as contributor}
          <div class="flex flex-col items-center gap-2">
            <div>
              <img
                src={"/contributors/" + contributor.photo}
                alt={contributor.name}
              />
            </div>
            <div>
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
