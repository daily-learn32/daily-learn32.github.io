<!-- SCRIPT ===== ===== ===== -->
<script>
  import Comp01 from "$lib/Comp01.svelte";
  import Comp02 from "$lib/Comp02.svelte";
  import Comp03 from "$lib/Comp03.svelte";

  // Slideshow === ===
  let slideIdx = $state(0);
  let slideNumber = $state("1 / 4");
  let slideText = $state("Text One");

  function showSlide(idx) {
    let text = ["One", "Two", "Three", "Four"];
    slideIdx = idx;
    slideNumber = String(idx + 1) + " / 4";
    slideText = "Text " + text[idx];
    console.log(slideIdx + " " + slideNumber + " " + slideText);
  }
</script>

<!-- HTML ===== ===== ===== -->
<div class="root">
  <!-- Slideshow === === -->
  <Comp01 />
  <!-- Just Button === === -->
  <Comp02 />
  <!-- Fixed Sidebar === === -->
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
    :global(body) {padding: 1rem;}
  }
</style>
