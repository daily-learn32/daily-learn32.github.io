<!-- SCRIPT ===== ===== ===== -->
<script>
  // Slideshow === ===
  let slideIdx = $state(0);
  let slideText = ["One", "Two", "Three", "Four"];

  $effect(() => {
    const interval = setInterval(() => {
      if (slideIdx >= 3) {
        slideIdx = 0;
      } else {
        slideIdx += 1;
      }
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  });

  function showSlide(idx) {
    slideIdx = idx;
  }
</script>

<!-- Slideshow ===== ===== ===== -->
<section class="part-1">
  <b class="title">Slideshow</b>
  <!-- slideshow -->
  <div class="slideshow">
    {#each { length: 4 } as _, idx}
      <div class="slide" style="translate: -{slideIdx * 100}%">
        <img src="./images/slideShow-0{idx + 1}.jpeg" alt="img" />
        <p class="number">{idx + 1} / 4</p>
        <p class="text">Text {slideText[idx]}</p>
      </div>
    {/each}
    <div class="btn-arrows">
      <button
        class="arrow"
        onclick={() => showSlide(slideIdx == 0 ? 3 : slideIdx - 1)}
        aria-label="button-arrow"><i class="fas fa-angle-left"></i></button
      >
      <button
        class="arrow"
        onclick={() => showSlide(slideIdx == 3 ? 0 : slideIdx + 1)}
        aria-label="button-arrow"><i class="fas fa-angle-right"></i></button
      >
    </div>
  </div>
  <!-- btn-dots -->
  <div class="btn-dots">
    {#each { length: 4 } as _, idx}
      <button
        class="dot {idx == slideIdx ? 'active' : ''}"
        onclick={() => showSlide(idx)}
        aria-label="button-dot"
      ></button>
    {/each}
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  // part === ===
  .part-1 {
    @include part();
  }
  .title {
    @include title2();
  }

  // slideshow ===
  .slideshow {
    position: relative;
    overflow: hidden;
    border: 2px solid white;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    transition: $transition;

    // slide ===
    .slide {
      transition: all 2s;
      grid-row: 1/2;
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
    }
    .slide img {
      width: 100%;
      height: auto;
    }
    .slide .number {
      @include text2();
      position: absolute;
      padding: 1rem;
      top: 0;
      left: 0;
    }
    .slide .text {
      @include text2();
      @include text-shadow();
      position: absolute;
      justify-self: center;
      padding: 1rem;
      bottom: 0;
      left: 50%;
      translate: -50% 0;
    }

    // btn-arrows ===
    .btn-arrows {
      align-self: center;
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
    }
    .btn-arrows .arrow {
      @include arrow(40px);
    }
  }
  // btn-dots ===
  .btn-dots {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    .dot {
      @include dot(16px);
    }
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .part-1 {
      @include part(1rem);
    }
    .title {
      @include title();
    }
    .slideshow {
      .slide .number,
      .slide .text {
        @include textSmall();
        padding: 0.5rem 0.75rem;
      }
      .btn-arrows {
        padding: 0.5rem;
      }
      .btn-arrows .arrow {
        @include arrow();
      }
    }
    .btn-dots {
      gap: 0.5rem;
      .dot {
        @include dot(8px);
      }
    }
  }
</style>
