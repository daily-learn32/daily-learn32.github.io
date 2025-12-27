<script>
  import { base } from '$app/paths';

  const socials = $state(["facebook", "twitter", "instagram", "youtube"]);
  const groups = $state([
    {
      title: "Our company",
      links: ["How we work", "Why Insure?", "View plans", "Reviews"],
    },
    {
      title: "Help me",
      links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"],
    },
    {
      title: "Contact",
      links: ["Sales", "Support", "Live chat"],
    },
    {
      title: "Others",
      links: ["Careers", "Press", "Licenses"],
    },
  ]);
</script>

<footer>
  <div class="head">
    <div class="logo">INSURE.</div>
    <div class="socials">
      {#each socials as social}
        <a href={base} aria-label={social}
          ><i class="fab fa-{social}"></i></a
        >
      {/each}
    </div>
  </div>
  <hr />
  <div class="groups">
    {#each groups as group (group.title)}
      <div class="group">
        <h4>{group.title}</h4>
        <div class="links">
          {#each group.links as link}
            <a href={base}>{link}</a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</footer>

<style lang="scss">
  @use "styles/_vars.scss" as v;
  @use "sass:color";

  footer {
    display: grid;
    gap: 2rem;
    padding: 4rem 7vw;
    background-color: color.adjust(v.$white, $lightness: -3%);
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    @include v.title;
  }

  .socials {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    a {
      @include v.icon;
      color: v.$gray;
      transition: color 0.3s ease;
      &:hover {
        color: v.$black;
      }
    }
  }

  hr {
    border: none;
    height: 1px;
    background-color: v.$gray;
    opacity: 0.3;
  }

  .groups {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
  }

  .group {
    width: 18vw;
    display: grid;
    gap: 1.5rem;
    justify-items: left;

    h4 {
      @include v.text;
      text-transform: uppercase;
      font-weight: 700;
    }

    .links {
      display: grid;
      gap: 0.5rem;

      a {
        @include v.link-footer;
      }
    }
  }

  @media (max-width: 768px) {
    footer {
      text-align: center;
    }
    .head {
      flex-direction: column;
      gap: 1.5rem;
    }
    .groups {
      flex-direction: column;
      justify-items: center;
      gap: 2.5rem;
    }
    .group {
      width: 100%;
      justify-items: center;
    }
  }
</style>
