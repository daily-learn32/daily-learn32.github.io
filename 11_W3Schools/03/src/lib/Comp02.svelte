<!-- SCRIPT ===== ===== ===== -->
<script>
  let gridView = $state(4); // 1 2 4

  function setGridView(val) {
    gridView = val;
    console.log(val);
  }
</script>

<!-- HTML - GRID VIEW ===== ===== ===== -->
<section class="comp" id="section1">
  <div class="content-box">
    <!-- header === === -->
    <header class="header">
      <b class="title">Modal Images</b>
      <p class="description">Click on the button to change the grid view</p>
      <div class="btns">
        <button
          class="btn {gridView === 1 ?? ''}"
          onclick={() => setGridView(1)}>1</button
        >
        <button
          class="btn {gridView === 2 ?? ''}"
          onclick={() => setGridView(2)}>2</button
        >
        <button
          class="btn {gridView === 4 ?? ''}"
          onclick={() => setGridView(4)}>4</button
        >
      </div>
    </header>

    <!-- img-container === === -->
    <div class="img-container col-{gridView}">
      <!-- Col 1 -->
      <div class="img-column">
        {#each Array(7) as _, i}
          <span>
            <img src="./images/sample-0{i + 1}.jpeg" alt="IMG" />
          </span>
        {/each}
      </div>
      <!-- Col 2 -->
      <div class="img-column">
        {#each Array(7) as _, i}
          <span>
            <img src="./images/sample-0{i + 1}.jpeg" alt="IMG" />
          </span>
        {/each}
      </div>
      <!-- Col 3 -->
      <div class="img-column">
        {#each Array(7) as _, i}
          <span>
            <img src="./images/sample-0{i + 1}.jpeg" alt="IMG" />
          </span>
        {/each}
      </div>
      <!-- Col 4 -->
      <div class="img-column">
        {#each Array(7) as _, i}
          <span>
            <img src="./images/sample-0{i + 1}.jpeg" alt="IMG" />
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();

    .content-box {
      min-height: 400px;
      max-height: 80vh;
      padding: 0 0.5rem;
      overflow: auto;
      display: grid;
    }
  }

  // header === ===
  .header {
    padding: 4rem 2rem;
    text-align: center;
    display: grid;
    justify-items: center;
    gap: 1rem;
    .title {
      @include title2();
      font-size: 2.5rem;
    }
    .description {
      @include text2();
    }
    .btns {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .btns .btn {
      @include btn();
      @include shadow();
      border-radius: 2px;
      font-weight: bold;
    }
  }

  // img-container === ===
  .img-container {
    display: grid;
    border: 2px solid white;
    //
    &.col-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    &.col-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    &.col-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  // img-column ===
  .img-container .img-column {
    display: grid;

    & span {
      width: 100%;
      overflow: hidden;
      display: grid;
      place-items: center;
      border: 2px solid white;
      //
      img {
        width: 100%;
        height: auto;
        scale: 1.02;
      }
    }
  }

  // @Set Img (Size) ===
  .img-container .img-column {
    & span:nth-child(1),
    & span:nth-child(5) {
      aspect-ratio: 10/15;
      img {
        scale: 1.52;
      }
    }
    & span:nth-child(2),
    & span:nth-child(7) {
      aspect-ratio: 1/1;
    }
    & span:nth-child(3),
    & span:nth-child(6) {
      aspect-ratio: 10/12;
      img {
        scale: 1.22;
      }
    }
    & span:nth-child(4) {
      aspect-ratio: 10/7;
      place-content: end;
    }
  }

  // @Set Img (Order) ===
  .img-container {
    .img-column:nth-child(2),
    .img-column:nth-child(4) {
      & span:nth-child(1) {
        order: 4;
      }
      & span:nth-child(2) {
        order: 6;
      }
      & span:nth-child(3) {
        order: 1;
      }
      & span:nth-child(4) {
        order: 2;
      }
      & span:nth-child(5) {
        order: 7;
      }
      & span:nth-child(6) {
        order: 3;
      }
      & span:nth-child(7) {
        order: 5;
      }
    }
  }
  //

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      .content-box {
        padding: 0 0.25rem;
      }
    }
    .header {
      padding: 2.5rem 1rem;
      & .title {
        @include title();
      }
      & .description {
        @include text();
      }
      & .btns {
        margin-top: 1rem;
      }
      & .btns .btn {
        padding: 0.5rem 1.25rem;
      }
    }
    .img-container,
    .img-container .img-column span {
      border: 1px solid white;
    }
  }
</style>
