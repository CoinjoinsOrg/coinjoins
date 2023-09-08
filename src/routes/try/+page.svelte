<script>
    import basicsData from "@data/basics.json";
    import overviewData from "@lib/data/wallet-overview.json";

    const data = basicsData;
    const overview = overviewData.overview;
    const wallets = overviewData.wallets;

    import H1 from "@lib/components/H1.svelte";
    import H2 from "@lib/components/H2.svelte";
    import H3 from "@lib/components/H3.svelte";
    import ArrowDown from "@lib/img/ArrowDown.svelte";
    import WasabiLogo from "@lib/img/WasabiLogo.svelte";
    import CompareWalletsBox from "@lib/components/CompareWalletsBox.svelte";
</script>

<div class="px-4 flex flex-col gap-10 w-full mx-auto pt-32">
    <div class=" flex flex-col gap-10 max-w-3xl mx-auto">
        <H1>{@html data.try.title}</H1>
        <div class="text-lg">
            {@html data.try.body}
        </div>
        <div class="flex justify-center">
            <div class="w-6 animate-bounce">
                <a href="#features">
                    <ArrowDown />
                </a>
            </div>
        </div>
    </div>
</div>

<div
    id="features"
    class="flex flex-col max-w-5xl mx-auto gap-16 items-center px-4"
>
    {#each data.try.features as feature}
        <div class="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
            <div class="text-green-cj">
                <H3 color="green">{@html feature.title}</H3>
            </div>
            <p class="max-w-lg md:max-w-md text-xl">
                {feature.body}
            </p>
        </div>
    {/each}
</div>

<div class="gap-12 flex flex-col items-center px-4">
    <div
        class="flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-center gap-28"
    >
        <div class="w-52">
            <WasabiLogo />
        </div>
        <p class="block text-center md:text-left text-xl max-w-lg">
            {data.try.wasabi.description}
        </p>
    </div>
    <div>
        <a
            href={data.try.wasabi.link}
            class="block border border-green-cj bg-green-cj px-6 py-2 rounded-md text-base text-dark-blue no-underline hover:text-green-cj hover:bg-dark-blue hover:border-green-cj"
            >{data.try.wasabi.cta}</a
        >
    </div>
</div>

<CompareWalletsBox
    header={overview.compare_header}
    subheader={overview.compare_subheader}
    walletsList={wallets}
/>
