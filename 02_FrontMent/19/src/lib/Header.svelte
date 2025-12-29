<script>
  import { base } from '$app/paths';

  let isMenuOpen = $state(false);
</script>

<header>
  <div class="logo">INSURE.</div>

  <nav class:open={isMenuOpen}>
    <a href={base}>How we work</a>
    <a href={base}>Blog</a>
    <a href={base}>Account</a>
    <button>View plans</button>
  </nav>

  <button class="icon-menu" onclick={() => (isMenuOpen = !isMenuOpen)}>
    {#if !isMenuOpen}
      <i class="fa-solid fa-bars"></i>
    {:else}
      <i class="fa-solid fa-x"></i>
    {/if}
  </button>
</header>

<style lang="scss">
  @use "styles/_vars.scss" as v;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7vw;
    height: 5rem;
    background-color: v.$white;
    position: relative;
    z-index: 10;
  }

  .logo {
    @include v.title;
  }

  nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    a {
      @include v.link;
    }

    button {
      @include v.button;
    }
  }

  .icon-menu {
    outline: none;
    border: none;
    background: transparent;
    display: none;
    cursor: pointer;
    i {
      @include v.icon;
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
      grid-template-columns: 1fr;
      align-content: center;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      min-height: calc(100vh - 5rem);
      background-color: v.$black;
      padding: 2rem;
      gap: 2rem;
      text-align: center;

      &.open {
        display: grid;
      }

      a {
        @include v.title(v.$white);
        &:hover {
          color: rgba(v.$white, 0.6);
        }
      }

      button {
        @include v.button(v.$white, v.$black);
        font-size: 20px;
        padding: 1rem 2rem;
        width: 50%;
        margin: 0 auto;
      }
    }

    .icon-menu {
      display: grid;
    }
  }
</style>
