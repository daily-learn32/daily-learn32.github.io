<!-- SCRIPT ===== ===== ===== -->
<script>
  import Comp01 from "$lib/Comp01.svelte";
  import Comp02 from "$lib/Comp02.svelte";
  import Comp03 from "$lib/Comp03.svelte";
</script>

<!-- HTML ===== ===== ===== -->
<div class="root">
  <!-- Accordion === === -->
  <Comp01 />
  <!-- Modal Images === === -->
  <Comp02 />
  <!-- Navbar With Icon === === -->
  <Comp03 />
</div>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  // Body
  :global(body) {
    min-height: 100vh;
    height: 100%;
    padding: 2rem;
    background-color: $color-dark1;
    color: white;
    display: grid;

    .root {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      align-content: start;
      gap: 2rem;
    }
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    :global(body) {
      padding: 1rem;
    }
  }
</style>
