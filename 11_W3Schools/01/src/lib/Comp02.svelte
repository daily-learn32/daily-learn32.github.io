<!-- SCRIPT ===== ===== ===== -->
<script>
  import Comp02_1 from "$lib/Comp02_1.svelte";
  import Comp02_2 from "$lib/Comp02_2.svelte";
  import Comp02_3 from "$lib/Comp02_3.svelte";
</script>

<!-- JUST BUTTON ===== ===== ===== -->
<section class="part-2">
  <!-- Modal Form -->
  <div class="grid">
    <Comp02_1 />
  </div>

  <!-- Dropdown Menu -->
  <div class="grid">
    <Comp02_2 />
  </div>

  <!-- Style Buttons -->
  <div class="grid">
    <Comp02_3 />
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  // part === === ===
  .part-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .grid {
      display: grid;
    }

    & > *:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    & > *:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    & > *:nth-child(3) {
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }

  // @Responsive === === ===
  @media (max-width: 768px) {
    .part-2 {
      display: grid;
      grid-template-columns: unset;

      & > .grid {
        grid-column: unset;
        grid-row: unset;
      }
    }
  }
</style>
