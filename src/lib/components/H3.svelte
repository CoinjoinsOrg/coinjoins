<script>
  export let color = "white";
</script>

<h3
  class="text-2xl md:text-3xl {color === 'white'
    ? 'text-white'
    : color === 'green'
    ? 'text-green-cj'
    : 'text-black'} font-inconsolata"
>
  <slot />
</h3>
