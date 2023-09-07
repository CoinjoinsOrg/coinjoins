<script>
    export let title;
    export let description;

    let isDescriptionShown = false;

    function showDescription() {
        isDescriptionShown = true;
    }
    function hideDescription() {
        isDescriptionShown = false;
    }
    function toggleDescription() {
        setTimeout(() => (isDescriptionShown = true), 400);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={toggleDescription}
    on:mouseenter={showDescription}
    on:mouseout={hideDescription}
    class="relative"
>
    <div
        class="hover:cursor-default border rounded border-green-cj px-2 py-1 text-green-cj bg-dark-blue text-xs uppercase font-semibold font-inconsolata"
    >
        {title}
    </div>
    <div
        class="text-white absolute top-10 p-4 text-sm w-[280px] rounded-sm bg-black {isDescriptionShown
            ? 'block'
            : 'hidden'}"
    >
        {description}
    </div>
</div>
