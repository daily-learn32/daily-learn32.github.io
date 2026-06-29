<script>
  import { base } from "$app/paths";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>20 Extension Manager</title>
  <link rel="icon" href="{base}/images/favicon-32x32.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
  }
</style>
