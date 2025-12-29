<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Content from "$lib/Content.svelte";

  let darkMode = $state(true);

  function changeMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("darkMode", darkMode);
  }

  onMount(() => {
    document.body.classList.toggle("darkMode", darkMode);
  });
</script>

<div class="root">
  <!-- HEADER ===== ===== ===== -->
  <header class:darkMode>
    <div class="logo">
      <div class="icon">
        <img src="{base}/images/logo-icon.svg" alt="Logo" />
      </div>
      <div class="title">Extensions</div>
    </div>
    <button
      onclick={() => {
        changeMode();
      }}
      class="toggle-mode"
    >
      {#if darkMode}
        <img src="{base}/images/icon-sun.svg" alt="Sun Icon" />
      {:else}
        <img src="{base}/images/icon-moon.svg" alt="Moon Icon" />
      {/if}
    </button>
  </header>
  <!-- HEADER ===== ===== ===== -->

  <Content {darkMode} />
</div>

<style lang="scss">
  @use "sass:color";
  @use "../lib/styles/_vars.scss" as v;

  // ROOT ===== ===== =====
  .root {
    max-width: 1260px;
    padding: 2rem 1.5rem;
    margin: 0 auto;
    display: grid;
    gap: 4rem;
  }

  :global(body) {
    min-height: 100vh;
    font-family: v.$font, sans-serif;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  :global(body.darkMode) {
    background: v.$gradient-dark;
  }

  :global(body:not(.darkMode)) {
    background: v.$gradient-light;
  }
  // ROOT ===== ===== =====

  // HEADER ===== ===== =====
  header {
    @include v.extension;
    border: 2px solid v.$black2;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .icon {
        display: grid;
        img {
          width: 2.25rem;
          height: 2.25rem;
        }
      }

      .title {
        @include v.title2;
        line-height: 2.25rem;
      }
    }

    .toggle-mode {
      background: v.$black2;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: grid;
      place-content: center;
      width: 2.5rem;
      height: 2.5rem;

      &:hover {
        background: color.adjust(v.$black2, $lightness: 6%);
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    &:not(.darkMode) {
      background: v.$white1;
      border: 2px solid v.$white2;
      .title {
        @include v.title2-light;
      }
      .toggle-mode {
        background: color.adjust(v.$white1, $lightness: -6%);

        &:hover {
          background: color.adjust(v.$white2, $lightness: 6%);
        }
      }
    }
  }
  // HEADER ===== ===== =====
</style>
