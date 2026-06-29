<script>
  // FontAwesome
  import "@fortawesome/fontawesome-free/css/all.min.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>01 W3Schools HowTo</title>
  <link rel="icon" href="./images/w3schools_logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}

<style lang="scss">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu Sans", sans-serif;
  }
</style>
