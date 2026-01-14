<!-- SCRIPT ===== ===== ===== -->
<script>
  let contentList = [
    {
      title: "Home Page",
      paragraph: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea itaque aperiam
        quae alias illum cum sequi corrupti enim earum quasi omnis.</p>
          <p>Adipisci reiciendis, quas quidem nobis, veniam inventore. Tenetur,
        dignissimos? Assumenda expedita quod iure saepe sit ipsam. Ea molestiae
        veritatis quibusdam dolores mollitia obcaecati eaque inventore autem dolor
        nobis atque, suscipit provident placeat.</p>
          <p> Deleniti molestias consectetur accusantium quis voluptas ad minus maiores.
        Excepturi laborum reprehenderit inventore, illum, qui exercitationem
        perspiciatis quia dignissimos deserunt dolor expedita molestias tempore
        voluptates quaerat distinctio blanditiis nemo ipsa ex similique saepe magni.</p>
          <p>Quidem voluptates aspernatur explicabo mollitia, numquam repellendus.
        Eveniet obcaecati delectus, sapiente provident eius est assumenda magni
        veritatis repellendus sunt numquam.</p>
          <p>Accusamus eligendi nemo? Dolorem expedita autem earum officiis odio maiores
        magni accusantium dolor.</p>`,
    },
    {
      title: "Article Page",
      paragraph: `<p> Deleniti molestias consectetur accusantium quis voluptas ad minus maiores.
        Excepturi laborum reprehenderit inventore, illum, qui exercitationem
        perspiciatis quia dignissimos deserunt dolor expedita molestias tempore
        voluptates quaerat distinctio blanditiis nemo ipsa ex similique saepe magni.</p>
          <p>Adipisci reiciendis, quas quidem nobis, veniam inventore. Tenetur,
        dignissimos? Assumenda expedita quod iure saepe sit ipsam. Ea molestiae
        veritatis quibusdam dolores mollitia obcaecati eaque inventore autem dolor
        nobis atque, suscipit provident placeat.</p>
          <p>Quidem voluptates aspernatur explicabo mollitia, numquam repellendus.
        Eveniet obcaecati delectus, sapiente provident eius est assumenda magni
        veritatis repellendus sunt numquam.</p>
          <p>Accusamus eligendi nemo? Dolorem expedita autem earum officiis odio maiores
        magni accusantium dolor.</p>`,
    },
    {
      title: "About Page",
      paragraph: `<p>Quidem voluptates aspernatur explicabo mollitia, numquam repellendus.
        Eveniet obcaecati delectus, sapiente provident eius est assumenda magni
        veritatis repellendus sunt numquam.</p>
          <p>Accusamus eligendi nemo? Dolorem expedita autem earum officiis odio maiores
        magni accusantium dolor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea itaque aperiam
        quae alias illum cum sequi corrupti enim earum quasi omnis.</p>
          <p>Adipisci reiciendis, quas quidem nobis, veniam inventore. Tenetur,
        dignissimos? Assumenda expedita quod iure saepe sit ipsam. Ea molestiae
        veritatis quibusdam dolores mollitia obcaecati eaque inventore autem dolor
        nobis atque, suscipit provident placeat.</p>
          <p> Deleniti molestias consectetur accusantium quis voluptas ad minus maiores.
        Excepturi laborum reprehenderit inventore, illum, qui exercitationem
        perspiciatis quia dignissimos deserunt dolor expedita molestias tempore
        voluptates quaerat distinctio blanditiis nemo ipsa ex similique saepe magni.</p>`,
    },
  ];
  let navList = ["Home", "Article", "About"];
  let navIcon = ["fa fa-home", "fa fa-newspaper", "fa fa-circle-info"];
  let idxActive = $state(0);

  function setContent(idx) {
    idxActive = idx;
  }
</script>

<!-- HTML - NAVBAR WITH ICON ===== ===== ===== -->
<section class="comp">
  <!-- Navbar === === -->
  <div class="navbar">
    <span class="links">
      <!--  -->
      {#each navList as nav, idx}
        <button
          class="link {idxActive == idx ? 'show' : ''}"
          onclick={() => setContent(idx)}
          ><i class={navIcon[idx]}></i> <span>{nav}</span></button
        >
      {/each}
      <!--  -->
    </span>
    <b class="title">Navbar Title</b>
  </div>

  <!-- Content === === -->
  {#each contentList as content, idx}
    <div class="content {idxActive == idx ? 'show' : ''}">
      <b class="title">{content["title"]}</b>
      <div class="paragraph">{@html content["paragraph"]}</div>
    </div>
  {/each}
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();
    max-height: 400px;

    gap: 0;
  }

  // Navbar === ===
  .navbar {
    background-color: white;
    color: $color-dark1;
    border-top: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar .links {
    display: flex;
    height: 100%;

    .link {
      @include btn(white, $color-dark3);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .link.show {
      background-color: $color-dark3;
      color: white;
    }
  }
  .navbar .title {
    @include title();
    padding: 0.75rem 1.5rem;
    color: $color-dark3;
  }

  // Content === ===
  .content {
    grid-column: 1/2;
    grid-row: 2/3;
    height: 100%;
    padding: 1.5rem;
    overflow: auto;
    background-color: $color-dark3;
    display: grid;
    gap: 1.25rem;
    opacity: 0;
    transition: all 0.6s;

    &.show {
      opacity: 1;
      z-index: 2;
    }
  }
  .content .title {
    @include title2();
  }
  .content .paragraph {
    display: grid;
    gap: 0.75rem;
    color: rgba(white, 0.75);
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      .navbar .title {
        display: none;
      }
      .content {
        padding: 1rem;
      }
      .content .title {
        @include title();
      }
      .content .paragraph {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    .comp .navbar .links {
      width: 100%;
      .link {
        width: 100%;
      }
      .link span {
        display: none;
      }
    }
  }
</style>
