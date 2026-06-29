<!-- SCRIPT ===== ===== ===== -->
<script>
</script>

<!-- Style Buttons -->
<div class="comp style-buttons">
  <b class="title">Style Button</b>
  <!--  -->
  <div class="btns">
    <button class="btn type1">Pressed</button>
    <button class="btn type2">Button 3D</button>
    <button class="btn type3">Ripple</button>
    <button class="btn type4"
      ><span>Arrow</span>
      <i class="fa fa-angle-double-right"></i>
    </button>
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
      margin-bottom: 8px;
    }
  }

  // Style Buttons === ===
  .style-buttons .btns {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    gap: 1rem;

    .btn.type1 {
      @include btnPressed(#ff8822, white);
    }
    .btn.type2 {
      @include btn3D(#aa22ff, white);
    }
    .btn.type3 {
      @include btnRipple(#ff1111, white);
    }
    .btn.type4 {
      @include btnArrow(#2288ff, white);
    }
  }

  // @Responsive === === ===
  @media (max-width: 768px) {
    .style-buttons {
      @include part(1rem);
    }
    .style-buttons > .title {
      @include title();
    }
    .style-buttons .btns {
    }
  }
</style>
