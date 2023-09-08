<script>
    import data from "@lib/data/history.json";

    import H1 from "@lib/components/H1.svelte";
    import FlatCoinjoinSvg from "@lib/components/FlatCoinjoinSvg.svelte";
    import ArrowDown from "@lib/img/ArrowDown.svelte";

    const historyData = data;

    let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="px-4 flex flex-col gap-10 w-full mx-auto pt-32">
    <div class=" flex flex-col gap-10 max-w-3xl mx-auto">
        <H1>{historyData.hero.title}</H1>
        <div class="text-lg">
            {historyData.hero.body}
        </div>
        <div class="flex justify-center">
            <div class="w-6 animate-bounce">
                <a href="#hashcoin">
                    <ArrowDown />
                </a>
            </div>
        </div>
    </div>
    <div>
        <FlatCoinjoinSvg />
    </div>
</div>

<div class="p-4 flex flex-col gap-6 max-w-3xl mx-auto">
    {#each historyData.timeline as item}
        <div
            id={item.id}
            class="flex flex-col gap-6 relative border-l-[6px] border-green-cj pl-6 md:pl-20"
        >
            <div
                class="absolute border-[6px] rounded-full border-green-cj -left-[19px] -top-7 w-8 h-8"
            />

            <div class="w-20 md:w-32">
                <img src={`/history/${item.id}.svg`} alt={item.title} />
            </div>
            <div class="font-inconsolata text-xl">{item.date}</div>
            <div class="font-inconsolata text-green-cj text-2xl">
                {item.title}
            </div>
            <div class="pb-32">{@html item.body}</div>
        </div>
    {/each}
</div>
