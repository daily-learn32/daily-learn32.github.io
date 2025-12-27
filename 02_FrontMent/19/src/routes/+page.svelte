<script>
  import Header from "$lib/Header.svelte";
  import Content1 from "$lib/Content1.svelte";
  import Content2 from "$lib/Content2.svelte";
  import Content3 from "$lib/Content3.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div class="root">
  <Header />
  <Content1 />
  <Content2 />
  <Content3 />
  <Footer />
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    font-family: "Karla", sans-serif;
    background-color: hsl(0, 0%, 98%);
  }

  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
