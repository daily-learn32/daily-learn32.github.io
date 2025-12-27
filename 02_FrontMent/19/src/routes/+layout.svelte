<script>
  import favicon from "$lib/images/favicon-32x32.png";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Insurance Landing Page</title>
  <link rel="icon" href={favicon} />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Karla:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
