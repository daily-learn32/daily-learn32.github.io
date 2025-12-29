<script>
  import { base } from '$app/paths';

  const datas = $state([
    {
      id: 1,
      icon: "book",
      title: "Snappy Process",
      paragraph: `Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.`,
    },
    {
      id: 2,
      icon: "pencil",
      title: "Affordable Prices",
      paragraph: `We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.`,
    },
    {
      id: 3,
      icon: "user",
      title: "People First",
      paragraph: `Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.`,
    },
  ]);
</script>

<section class="content2">
  <h2>We're different</h2>
  <div class="features">
    {#each datas as data (data.id)}
      <div class="feature">
        <div class="icon">
          <i class="fa-solid fa-{data.icon}"></i>
        </div>
        <h3>{data.title}</h3>
        <p>{data.paragraph}</p>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "styles/_vars.scss" as v;

  .content2 {
    display: grid;
    gap: 4rem;
    padding: 8rem 7vw;
  }

  h2 {
    @include v.title-big;
    position: relative;
    padding-bottom: 1rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 2px;
      background-color: v.$gray;
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .feature {
    display: grid;
    justify-items: left;
    gap: 1rem;

    .icon {
      @include v.icon-circle;
    }

    h3 {
      @include v.title;
    }

    p {
      @include v.text;
    }
  }

  @media (max-width: 768px) {
    .content2 {
      text-align: center;
    }
    h2 {
      justify-self: center;
      &::before {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .features {
      flex-direction: column;
    }
    .feature {
      justify-items: center;
      text-align: center;
    }
  }
</style>
