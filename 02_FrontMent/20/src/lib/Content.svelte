<script>
  import { base } from "$app/paths";
  import JsonData from "$lib/scripts/data.json";

  let extensions = $state(JsonData);
  let { darkMode } = $props();
  let actFilter = $state("All");
  let btnFilter = $state([
    { id: 1, name: "All", isActive: true },
    { id: 2, name: "Active", isActive: false },
    { id: 3, name: "Inactive", isActive: false },
  ]);

  function setActFilter(id, name) {
    actFilter = name;
    btnFilter = btnFilter.map((btn) => ({ ...btn, isActive: btn.id === id }));
  }

  function toggleExtension(id) {
    extensions = extensions.map((ext) =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    );
  }

  function removeExtension(id) {
    extensions = extensions.filter((data) => data.id !== id);
  }

  const filteredExtensions = $derived.by(() => {
    if (actFilter === "All") {
      return extensions;
    }
    const isActive = actFilter === "Active";
    return extensions.filter((ext) => ext.isActive === isActive);
  });
</script>

<main class:darkMode>
  <div class="top">
    <div class="title">Installed Extensions</div>
    <div class="buttons">
      {#each btnFilter as btn}
        <button
          class="filter-btn {btn.isActive ? 'true' : ''}"
          onclick={() => {
            setActFilter(btn.id, btn.name);
          }}
        >
          {btn.name}
        </button>
      {/each}
    </div>
  </div>

  <div class="extensions">
    {#each filteredExtensions as ext (ext.id)}
      <div class="extension">
        <div class="head">
          <div class="icon">
            <img src="{base}/images/{ext.logo}" alt="{ext.name} logo" />
          </div>
          <div class="texts">
            <div class="title">{ext.name}</div>
            <div class="text">{ext.description}</div>
          </div>
        </div>
        <div class="foot">
          <button
            class="button-remove"
            onclick={() => {
              removeExtension(ext.id);
            }}
          >
            Remove
          </button>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button
            class="button-toggle {ext.isActive ? 'true' : ''}"
            onclick={() => {
              toggleExtension(ext.id);
            }}
          >
            <span class="cir"></span>
          </button>
        </div>
      </div>
    {/each}
  </div>
</main>

<style lang="scss">
  @use "./styles/_vars.scss" as v;

  main {
    display: grid;
    gap: 2rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    .title {
      @include v.title3;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;

      .filter-btn {
        @include v.button;
      }
    }
  }

  .extensions {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .extension {
    @include v.extension;

    .head .texts {
      display: grid;
      gap: 0.5rem;
      .title {
        @include v.title1;
      }
      .text {
        @include v.text;
      }
    }

    .foot {
      .button-remove {
        @include v.button;
      }
      .button-toggle {
        @include v.toggle;
      }
    }
  }

  // Light mode styles
  main:not(.darkMode) {
    .top {
      .title {
        @include v.title3-light;
      }
      .buttons .filter-btn {
        @include v.button-light;
      }
    }

    .extension {
      @include v.extension-light;
      .head .texts .title {
        @include v.title1-light;
      }
      .head .texts .text {
        @include v.text-light;
      }
      .foot .button-remove {
        @include v.button-light;
      }
      .foot .button-toggle {
        @include v.toggle-light;
      }
    }
  }

  @media (max-width: 768px) {
    .top {
      width: 100%;
      gap: 1rem;
      display: grid;
      justify-content: center;
      justify-items: center;
    }
  }
</style>
