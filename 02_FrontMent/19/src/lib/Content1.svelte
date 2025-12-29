<script>
  import { base } from '$app/paths';


  const texts = $state({
    title: "Humanizing your insurance.",
    paragraph:
      "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
    button: "View plans",
  });
</script>

<section class="content1">
  <div class="bg-img">
    <img src="{base}/images/bg-pattern-intro-left-desktop.svg" alt="Pattern" />
    <img src="{base}/images/bg-pattern-intro-right-desktop.svg" alt="Pattern" />
  </div>
  <div class="texts">
    <span class="line"></span>
    <h1>{@html texts.title}</h1>
    <p>{@html texts.paragraph}</p>
    <button>{@html texts.button}</button>
  </div>
  <div class="hero-img">
    <span>
      <img src="{base}/images/gemini-insurance2.jpeg" alt="Hero Img" />
    </span>
  </div>
</section>

<style lang="scss">
  @use "styles/_vars.scss" as v;

  .content1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - 5rem);
    margin-bottom: 5rem;
    background-color: v.$white;
    color: v.$white;
  }

  .bg-img {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    width: 100%;
    height: 100%;
    background-color: v.$blue-dark;
    position: relative;
    display: grid;
    overflow: hidden;
    img {
      position: absolute;
    }
    img:nth-child(1) {
      bottom: -30%;
      left: -5%;
    }
    img:nth-child(2) {
      top: -15%;
      right: -10%;
    }
  }

  .hero-img {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding: 0 7vw 0 2rem;
    height: calc(100vh - 5rem);
    display: grid;
    translate: 0 5rem;
    span {
      width: 100%;
      height: inherit;
      overflow: hidden;
      display: grid;
      place-items: center;
      place-content: center;
    }
    img {
      width: 100%;
      min-height: inherit;
      object-fit: cover;
    }
  }

  .texts {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    gap: 2rem;
    align-content: center;
    padding: 5rem 2rem 5rem 7vw;
    position: relative;
    z-index: 1;

    .line {
      width: 25%;
      height: 2px;
      margin-bottom: 2rem;
      background-color: v.$gray;
    }
    h1 {
      @include v.title-big(v.$white);
    }
    p {
      @include v.text;
      color: v.$white;
    }
    button {
      @include v.button(v.$white, v.$black);
      justify-self: start;
      padding: 12px 28px;
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    .content1 {
      grid-template-columns: 1.25fr 1fr;
      margin-bottom: 0;
    }
    .hero-img {
      grid-row: 1 / 2;
      padding: 0 0 0 1rem;
      translate: 0 0;
      span {
        height: calc(100vh - 5rem);
        width: 100%;
      }
      img {
        width: auto;
        height: 100%;
      }
    }
    .texts {
      padding: 0 1rem 0 7vw;
    }
  }

  @media (max-width: 768px) {
    .content1 {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .bg-img {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      min-height: 300px;
      overflow: hidden;
      img:nth-child(1) {
        bottom: -30%;
        left: -15%;
      }
      img:nth-child(2) {
        bottom: 0;
        right: -45%;
      }
    }

    .hero-img {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      min-height: 300px;
      padding: 0;

      img {
        width: 100%;
      }
    }

    .texts {
      z-index: 10;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      text-align: center;
      justify-items: center;
      padding: 5rem 1.5rem;

      .line {
        margin-bottom: 1rem;
      }

      button {
        justify-self: center;
      }
    }
  }
</style>
