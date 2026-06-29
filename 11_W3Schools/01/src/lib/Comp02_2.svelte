<!-- SCRIPT ===== ===== ===== -->
<script>
  import { base } from "$app/paths";

  let textNum = ["One", "Two", "Three", "Four"];
  let showDropdown = $state(false);

  function toggleDropdown(val = null) {
    if (val == null) {
      showDropdown = !showDropdown;
    } else if (val == true || val == false) {
      showDropdown = val;
    }
  }
</script>

<!-- Dropdown Menu -->
<div class="comp dropdown-menu" style=" {showDropdown ? 'z-index: ' + 5 : ''};">
  <b class="title">Dropdown Menu</b>
  <button class="btn" onclick={() => toggleDropdown()}>Menu</button>
  <!--  -->
  <div class="menu {showDropdown ? 'show' : ''}">
    {#each { length: 4 } as _, idx}
      <a href="{base}/" onclick={() => toggleDropdown(false)}
        >Link {textNum[idx]} <b>{idx + 1}</b></a
      >
    {/each}
  </div>
</div>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();
    align-items: center;
    position: relative;
    & > .title {
      @include title2();
      align-self: self-start;
    }
    & > .btn {
      @include btn();
    }
  }

  // Dropdown Menu === ===
  .dropdown-menu .menu {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    translate: -50% 100%;
    width: calc(100% - 3rem);
    display: none;

    a {
      z-index: 10;
      @include btn();
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-child) {
        border-bottom: 1px solid rgba($color-dark1, 0.25);
      }
    }
  }
  // Dropdown Menu === ===
  .dropdown-menu .menu.show {
    display: grid;
  }

  // @Responsive === === ===
  @media (max-width: 768px) {
    .dropdown-menu {
      @include part(1rem);
    }
    .dropdown-menu > .title {
      @include title();
    }
    .dropdown-menu .menu {
      bottom: 0.75rem;
      width: calc(100% - 2rem);
    }
  }
</style>
