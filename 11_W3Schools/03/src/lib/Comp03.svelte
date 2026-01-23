<!-- SCRIPT ===== ===== ===== -->
<script>
  let progressVal = $state(35); // 0 - 100
  let isBarRun = $state(false);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function progressClickChange(e) {
    // Mengambil Lebar Element Progress
    const rect = e.currentTarget.getBoundingClientRect();
    const rectWidth = rect.width;

    // Mengambil First Touch atau Mouse Click dari user (Sumbu X)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    // Menghitung jarak dari lokasi Klik - lokasi sisi kiri Element
    const clickX = clientX - rect.left;

    // Update Progress Value
    let persen = Math.round((clickX / rectWidth) * 100);
    progressVal = Math.max(0, Math.min(persen, 100));
  }
  function progressValChange(val) {
    progressVal += val;
    progressVal = Math.max(0, Math.min(progressVal, 100));
    isBarRun = false;
  }

  async function progressBarRun(bool) {
    // Jalan
    if (bool && !isBarRun) {
      isBarRun = bool;
      while (progressVal < 100 && isBarRun) {
        progressVal += 1;
        progressVal = Math.min(progressVal, 100);

        await sleep(100);
      }

      isBarRun = false;
    }
    // Berhenti
    else if (!bool && isBarRun) {
      isBarRun = bool;
    }
  }
</script>

<!-- HTML - PROGRESS BAR ===== ===== ===== -->
<section class="comp" id="section2">
  <b class="title">Progress Bar</b>

  <!-- Progress === === -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="progress-container"
    onclick={progressClickChange}
    ontouchstart={progressClickChange}
  >
    <span class="progress-fill" style="width: {progressVal}%"></span>
    <!--  -->
    <div class="progress-divider">
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
    </div>
    <!--  -->
    <span class="progress-text">{progressVal}%</span>
  </div>

  <!-- Control === === -->
  <div class="control">
    <!--  -->
    <span class="left">
      <button class="btn-minus" onclick={() => progressValChange(-1)}>-1</button
      >
      <button class="btn-plus" onclick={() => progressValChange(1)}>+1</button>
    </span>
    <!--  -->
    <span class="right">
      {#if !isBarRun}
        <button class="btn-run" onclick={() => progressBarRun(true)}>Run</button
        >
      {:else}
        <button class="btn-stop" onclick={() => progressBarRun(false)}
          >Stop</button
        >
      {/if}
    </span>
  </div>
</section>

<!-- STYLE ===== ===== ===== -->
<style lang="scss">
  @use "sass:color";
  @use "../_vars.scss" as *;

  .comp {
    @include part();
    & .title {
      @include title2();
    }
  }

  // Progress === ===
  .progress-container {
    position: relative;
    width: 100%;
    height: 2.5rem;
    padding: 4px;
    border-radius: 4px;
    border: 2px solid $color-white1;
    display: grid;
    align-items: center;
    cursor: pointer;
    /* Mencegah highlight biru saat klik di beberapa browser HP */
    -webkit-tap-highlight-color: transparent;

    //
    & .progress-fill {
      // width: 50%;
      height: 100%;
      background-color: $color-dark4;
      transition: width 0.3s;
      pointer-events: none; /* Klik tembus ke container utama */
    }
    & .progress-divider {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 4px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      span {
        width: 100%;
        height: 100%;
        border: 1px solid $color-dark2;
      }
    }
    & .progress-text {
      position: absolute;
      left: 50%;
      translate: -50% 0;
    }
  }

  // Control === ===
  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    //
    .left,
    .right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    //
    button {
      @include btn();
      @include shadow();
    }
    .btn-run {
      @include btnLighten(green, white);
    }
    .btn-stop {
      @include btnLighten(red, white);
    }
    button.btn-run,
    button.btn-stop {
      width: 5rem;
    }
    button,
    button.btn-run,
    button.btn-stop {
      padding: 0.5rem 1.25rem;
      border-radius: 4px;
      font-weight: bold;
    }
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      & .title {
        @include title();
      }
      & .control {
        gap: 1rem;
        .left,
        .right {
          gap: 0.75rem;
        }
        button {
          padding: 6px 16px;
          font-weight: normal;
        }
      }
    }
  }
</style>
