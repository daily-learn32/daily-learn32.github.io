<!-- SCRIPT ===== ===== ===== -->
<script>
  let imgCaption = ["One", "Two", "Three"];
  let isShowModal = $state(false);
  let idxModal = $state(0);

  function showModal(idx) {
    idxModal = idx;
    isShowModal = true;
  }
</script>

<!-- HTML - MODAL IMAGES ===== ===== ===== -->
<section class="comp">
  <b class="title">Modal Images</b>

  <!-- modal === === -->
  <div class="modal {isShowModal ? 'show' : ''}">
    <button
      class="btn-x"
      onclick={() => {
        isShowModal = false;
      }}
      aria-label="btn-x"><i class="fa fa-x"></i></button
    >
    <!--  -->
    <span class="content-image">
      <img src="./images/slideShow-0{idxModal + 1}.jpeg" alt="Img" />
    </span>
    <p class="caption">Caption {imgCaption[idxModal]}</p>
  </div>

  <!-- list-image === === -->
  <div class="list-image">
    {#each Array(3) as _, idx}
      <button class="btn-image" onclick={() => showModal(idx)}>
        <img src="./images/slideShow-0{idx + 1}.jpeg" alt="Img" />
      </button>
    {/each}
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();
    .title {
      @include title2();
    }
  }

  // modal === ===
  .modal {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 1rem 1.5rem 3rem 1.5rem;
    background-color: rgba($color-dark1, 1);
    display: grid;
    grid-template-rows: max-content auto max-content;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    z-index: -10;
    opacity: 0;
  }
  .modal .btn-x {
    @include btnX();
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    height: 2rem;
    justify-self: right;
  }
  .modal .content-image {
    overflow: auto;
    width: 100%;
    max-width: 1000px;
    max-height: 100%;
    border: 2px solid white;
    display: grid;
    scale: 0.1;
    img {
      width: 100%;
    }
  }
  .modal .caption {
    @include title();
  }
  .modal.show {
    z-index: 10;
    opacity: 1;
    & .content-image {
      transition: all 0.6s;
      scale: 1;
    }
  }

  // list-image === ===
  .list-image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .list-image .btn-image {
    @include btn($color-dark1);
    padding: 0;
    border: 2px solid white;
    place-content: center;
    img {
      width: 100%;
    }
    &:hover {
      box-shadow: 0 4px 12px 0 rgba(black, 0.5);
    }
    img:hover {
      opacity: 75%;
    }
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      .title {
        @include title();
      }
      .modal .btn-x {
        font-size: 16px;
      }
      .modal .caption {
        font-size: 18px;
      }
      .list-image {
        display: grid;
        justify-content: unset;
        gap: 1rem;
      }
    }
  }
</style>
