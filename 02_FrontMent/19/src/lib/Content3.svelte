<script>
  import pattern from "$lib/images/bg-pattern-how-we-work-desktop.svg";
</script>

<section class="content3">
  <div class="card">
    <img src={pattern} alt="Pattern" />
    <h2>Find out more<br />about how we work</h2>
    <button>How we work</button>
  </div>
</section>

<style lang="scss">
  @use "styles/_vars.scss" as v;

  .content3 {
    padding: 0 7vw;
    margin-bottom: 8rem;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 3rem 4rem;
    background-color: v.$blue-dark;
    color: v.$white;
    position: relative;
    overflow: hidden;
  }

  img {
    position: absolute;
    right: -10%;
    top: 0;
    scale: 1.3;
  }

  h2 {
    z-index: 2;
    @include v.title-big(v.$white);
    max-width: 450px;
  }

  button {
    z-index: 2;
    @include v.button(v.$white, v.$black);
    padding: 12px 28px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .content3 {
      padding-left: 0;
      padding-right: 0;
    }
    .card {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
      padding: 3rem;
    }
    img {
      position: absolute;
      right: -35%;
      top: 0;
    }
  }
</style>
