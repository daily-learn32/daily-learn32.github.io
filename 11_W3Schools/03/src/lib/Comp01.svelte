<!-- SCRIPT ===== ===== ===== -->
<script>
  let isShowNavbar = $state(false);
</script>

<!-- HTML - FULL NAVBAR ===== ===== ===== -->
<section class="comp" id="header">
  <b class="title">Full Navbar</b>

  <!-- Full Navbar === === -->
  <div class="full-navbar">
    <button
      class="btn-navbar"
      onclick={() => (isShowNavbar = !isShowNavbar)}
      aria-label="btn-menu"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!--  -->
    <nav class="navbar {isShowNavbar ? 'show' : ''}">
      <button
        class="btn-x"
        onclick={() => (isShowNavbar = !isShowNavbar)}
        aria-label="btn-x"
      >
        <i class="fas fa-x"></i>
      </button>
      <a href="#header" onclick={() => (isShowNavbar = !isShowNavbar)}
        >Full Navbar</a
      >
      <a href="#section1" onclick={() => (isShowNavbar = !isShowNavbar)}
        >Image Grid</a
      >
      <a href="#section2" onclick={() => (isShowNavbar = !isShowNavbar)}
        >Progress Bar</a
      >
    </nav>
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      @include title2();
    }
  }

  // Full Navbar === ===
  .full-navbar {
    position: relative;
    display: grid;
  }

  // ===
  .full-navbar .btn-navbar {
    background-color: unset;
    border: unset;
    i {
      @include title2();
      @include text-shadow();
      transition: $transition;
      cursor: pointer;
    }
    i:hover {
      color: $color-white2;
    }
  }

  // ===
  .full-navbar .navbar {
    position: fixed;
    z-index: -1;
    top: -120%;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: rgba($color-dark2, 1);
    display: grid;
    place-content: center;
    gap: 1rem;
    transition: all 0.6s;

    .btn-x {
      @include btnX();
      position: absolute;
      font-size: 28px;
      top: 1rem;
      right: 1rem;
    }
    a {
      @include btn(white, $color-dark2);
      @include shadow();
      text-decoration: unset;
      padding: 1rem 2rem;
      font-size: 28px;
      font-weight: bold;
    }
  }
  .full-navbar .navbar.show {
    top: 0%;
    z-index: 20;
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      .title {
        @include title();
      }
    }
    .full-navbar .btn-navbar i {
      @include title();
    }
    .full-navbar .navbar {
      .btn-x {
        font-size: 22px;
        top: 0.25rem;
        right: 0rem;
      }
      a {
        padding: 0.5rem 1rem;
        font-size: 22px;
      }
    }
  }
</style>
