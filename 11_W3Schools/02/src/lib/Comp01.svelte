<!-- SCRIPT ===== ===== ===== -->
<script>
  let accordions = $state([
    {
      status: true,
      title: "Section 01",
      text: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aut aliquid
        excepturi placeat tenetur dolores, velit, voluptatibus ea molestias repellat
        at minima, officia iusto quo. </p>
        <p>Sapiente rerum numquam illum eveniet laudantium, commodi molestias voluptatem! 
        Consequatur officiis inventore dolorum iure rem, velit, ipsum soluta veritatis 
        pariatur quo reiciendis.</p>`,
    },
    {
      status: false,
      title: "Section 02",
      text: `<p>Sapiente rerum numquam illum eveniet laudantium,
        commodi molestias voluptatem! </p>
        <p>Consequatur officiis inventore dolorum iure rem, velit, ipsum soluta veritatis 
        pariatur quo reiciendis, praesentium dicta odio ex molestias itaque tempora 
        vel nam architecto. Vero excepturi quos numquam, animi aliquid sunt cum atque 
        in porro.</p>
        <p>Dolores maxime laboriosam sequi ratione pariatur rem exercitationem explicabo 
        veritatis deserunt debitis blanditiis dignissimos dolore!</p>`,
    },
    {
      status: false,
      title: "Section 03",
      text: `<p>Recusandae nulla quis et esse voluptatum vitae
        tempore aspernatur illo earum aliquid mollitia eaque, cumque non hic quam
        beatae temporibus porro odit aperiam voluptas soluta!</p>`,
    },
    {
      status: false,
      title: "Section 04",
      text: `<p>Dolores maxime laboriosam
        sequi ratione pariatur rem exercitationem explicabo veritatis deserunt debitis
        blanditiis dignissimos dolore! Recusandae nulla quis et esse voluptatum vitae
        tempore aspernatur illo earum aliquid mollitia eaque. </p>
        <p>Cumque non hic quam beatae temporibus porro odit aperiam voluptas soluta! Earum 
        magnam ratione corrupti ab ex soluta labore repellat odio nesciunt exercitationem?</p>`,
    },
  ]);

  function showAccordion(idx) {
    if (accordions[idx]["status"] == true) {
      accordions = accordions.map((acc, i) =>
        idx == i ? { ...acc, status: false } : acc
      );
    } else {
      accordions = accordions.map((acc, i) =>
        idx == i ? { ...acc, status: true } : acc
      );
    }
  }
</script>

<!-- HTML - ACCORDION ===== ===== ===== -->
<section class="comp">
  <b class="title">Accordion</b>

  <!-- List Accordion === === -->
  <div class="list-accordion">
    <!-- === -->
    {#each accordions as acc, idx}
      <section class="accordion {acc.status ? 'show' : ''}">
        <!--  -->
        <button
          class="btn-title {acc.status ? 'show' : ''}"
          onclick={() => showAccordion(idx)}
          >{acc.title}
          <i class="{!acc.status ? 'show' : ''} fa fa-plus"></i>
          <i class="{acc.status ? 'show' : ''} fa fa-minus"></i>
        </button>
        <!--  -->
        <div class="panel {acc.status ? 'show' : ''}">{@html acc.text}</div>
      </section>
    {/each}
    <!-- === -->
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

  // List Accordion === ===
  .list-accordion {
    display: grid;
    border: 2px solid white;
  }
  .list-accordion .accordion {
    display: grid;
    grid-template-rows: max-content 0fr;
    background-color: white;
    overflow: hidden;
    &.show {
      grid-template-rows: max-content 1fr;
    }

    &,
    & > * {
      transition: all 0.8s;
    }

    // btn-title
    .btn-title {
      @include btn(#e0e0e0, $color-dark1);
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //
      i {
        display: none;
      }
      i.show {
        display: block;
      }
    }
    .btn-title:not(:last-child) {
      border-bottom: 1px solid white;
    }
    .btn-title.show {
      background-color: $color-dark1;
      color: white;
    }

    // panel
    .panel {
      background-color: white;
      color: rgba($color-dark1, 0.75);
      min-height: 0;
      padding: 0 1rem;
      display: grid;
      gap: 0.75rem;
    }
    .panel.show {
      padding: 1rem;
    }
  }

  // @Responsive === ===
  @media (max-width: 768px) {
    .comp {
      padding: 1rem;
      .title {
        @include title();
      }
    }
    .list-accordion .accordion {
      // btn-title
      .btn-title {
        padding: 0.5rem 0.75rem;
        font-size: 14px;
      }
      .panel {
        font-size: 14px;
      }
    }
  }
</style>
