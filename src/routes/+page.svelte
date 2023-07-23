<script>
  import CoinjoinLogo from "$lib/img/CoinjoinLogo.svelte";
</script>

<div class="flex justify-between max-w-5xl mx-auto py-6 items-center">
  <div class="flex-auto">
    <div class="w-6">
      <CoinjoinLogo color="black" />
    </div>
  </div>
  <div class="flex flex-1 justify-between font-inconsolata font-normal">
    <div class="hover:text-green-cj hover:cursor-pointer">Intro</div>
    <div class="hover:text-green-cj hover:cursor-pointer">Advanced</div>
    <div class="hover:text-green-cj hover:cursor-pointer">History</div>
  </div>
  <div class="flex-auto flex justify-end">
    <a
      href="/"
      class="block border border-green-cj bg-green-cj px-6 py-1 rounded text-lg"
      >Try coinjoins</a
    >
  </div>
</div>
