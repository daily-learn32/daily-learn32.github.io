<!-- SCRIPT ===== ===== ===== -->
<script>
  import { base } from "$app/paths";

  let links = ["Home", "Article", "Products", "Contact"];
  let idx_left = $state(0);
  let idx_right = $state(0);

  function linkActive(nav, idx) {
    if (nav == "left") {
      idx_left = idx;
    } else if (nav == "right") {
      idx_right = idx;
    }
  }
</script>

<!-- FIXED SIDEBAR ===== ===== ===== -->
<section class="part-3">
  <!-- Fixed Sidebar === === -->
  <div class="fixed-sidebar">
    <!--  -->
    <div class="sidebar">
      {#each links as link, idx}
        <button class={idx_left == idx} onclick={() => linkActive("left", idx)}
          >{link}</button
        >
      {/each}
    </div>
    <!--  -->
    <div class="content">
      <b class="title">Fixed Sidebar</b>
      <p class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p class="paragraph">
        Veniam, laboriosam officia et assumenda nisi dolor rerum delectus atque
        maiores repudiandae quis accusamus ipsam, pariatur culpa vero.
      </p>
      <p class="paragraph">
        Quos modi laboriosam facilis earum voluptate dolorum quisquam et culpa
        accusamus? Nihil doloremque voluptatem, molestias saepe incidunt
        aspernatur ut, deserunt, fugiat nam voluptas quas in reiciendis?
        Deserunt, blanditiis illo! Earum possimus blanditiis a ipsa itaque nulla
        aspernatur eius, ducimus animi iste.
      </p>
      <p class="paragraph">
        Molestiae aspernatur tempore saepe vero magnam quos quae esse similique
        sint laudantium, repudiandae delectus ipsum ea eum omnis, eveniet itaque
        iure culpa est. Corrupti cumque harum perferendis totam architecto.
      </p>
    </div>
  </div>

  <!-- Sticky Navbar === === -->
  <div class="sticky-navbar">
    <!--  -->
    <div class="top">
      <b class="title">Sticky Navbar</b>
      <p class="paragraph top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <!--  -->
    <div class="navbar">
      {#each links as link, idx}
        <button
          class={idx_right == idx}
          onclick={() => linkActive("right", idx)}>{link}</button
        >
      {/each}
    </div>
    <!--  -->
    <div class="bottom">
      <p class="paragraph">
        Veniam laboriosam officia et assumenda nisi dolor rerum delectus atque
        maiores.
      </p>
      <p class="paragraph">
        Repudiandae quis accusamus ipsam, pariatur culpa vero. Lorem ipsum dolor
        sit amet consectetur adipisicing elit veniam, laboriosam officia et
        assumenda nisi dolor rerum. Delectus atque maiores repudiandae quis
        accusamus ipsam, pariatur culpa vero quos modi laboriosam facilis earum
        voluptate dolorum.
      </p>
      <p class="paragraph">
        Quisquam et culpa accusamus? Nihil doloremque voluptatem.
      </p>
      <p class="paragraph">
        Molestias saepe incidunt aspernatur ut, deserunt, fugiat nam voluptas
        quas in reiciendis? Deserunt, blanditiis illo! Earum possimus blanditiis
        a ipsa itaque nulla aspernatur eius, ducimus animi iste. Molestiae
        aspernatur tempore saepe vero magnam.
      </p>
      <p class="paragraph">
        Quos quae esse similique sint laudantium, repudiandae delectus ipsum ea
        eum omnis, eveniet itaque iure culpa est. Corrupti cumque harum
        perferendis totam architecto.
      </p>
    </div>
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  // part === ===
  .part-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    & > * {
      @include part();
      overflow: hidden;
      max-height: 360px;
      border: 8px solid $color-dark2;
    }
  }

  // Fixed Sidebar === ===
  .fixed-sidebar {
    padding: 0;
    grid-template-columns: 25% 75%;
    gap: 0;
    // sidebar
    .sidebar {
      top: 0;
      left: 0;
      height: 100%;
      padding: 1.25rem 0;
      background-color: white;
      display: grid;
      align-content: start;
    }
    .sidebar button {
      @include btn(white, $color-dark3);
      justify-content: left;
      padding: 0.75rem 1rem;
    }
    .sidebar button.true {
      background-color: $color-dark3;
      color: white;
    }
    // content
    .content {
      overflow: auto;
      padding: 1.5rem 1rem;
      background-color: $color-dark3;
      display: grid;
      align-content: start;
      gap: 1rem;
    }
    .content .title {
      @include title2();
    }
    .content .paragraph {
      @include text();
    }
  }

  // Sticky Sidebar === ===
  .sticky-navbar {
    overflow: auto;
    padding: 0;
    grid-template-rows: calc(100% - 2.75rem) max-content auto;
    gap: 0;
    // top
    .top {
      padding: 1.5rem 3.5rem;
      display: grid;
      align-content: center;
      gap: 1rem;
      .title {
        @include title2();
        text-align: center;
      }
      .paragraph.top {
        text-align: center;
        padding: 0;
      }
    }
    // navbar
    .navbar {
      position: sticky;
      top: 0;
      height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        @include btn(white, $color-dark3);
        width: 100%;
        height: 100%;
      }
      button.true {
        background-color: $color-dark3;
        color: white;
      }
    }
    // bottom
    .bottom {
      background-color: $color-dark3;
      padding: 1.5rem 1rem;
      display: grid;
      gap: 1rem;
      .paragraph {
        @include text();
      }
    }
  }

  // @Responsive === ===
  @media (max-width: 1024px) {
    .part-3 {
      display: grid;
      grid-template-columns: unset;
      gap: 1rem;
    }
    // fixed-sidebar
    .fixed-sidebar {
      grid-template-columns: 18% 82%;
    }
  }
  @media (max-width: 768px) {
    .part-3 {
      display: grid;
      grid-template-columns: unset;
      gap: 1rem;
    }
    // fixed-sidebar
    .fixed-sidebar {
      grid-template-columns: 30% 70%;
      //
      .sidebar {
        padding: 1.125rem 0;
      }
      .sidebar button {
        font-size: 14px;
        padding: 0.5rem 0.75rem;
      }
      //
      .content {
        padding: 1.25rem 1rem;
      }
      .content .title {
        @include title();
      }
      .content .paragraph {
        @include textSmall();
      }
    }
    // sticky-navbar
    .sticky-navbar {
      .top {
        padding: 1.5rem 2.5rem;
        .title {
          @include title();
        }
      }
      .navbar {
        button {
          padding: 0.75rem 0.5rem;
        }
      }
      .bottom {
        padding: 1.25rem 1rem;
        .paragraph {
          @include textSmall();
        }
      }
    }
  }
</style>
