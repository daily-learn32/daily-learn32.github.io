<!-- SCRIPT ===== ===== ===== -->
<script>
  import { base } from "$app/paths";
  import { preventDefault } from "svelte/legacy";
  let showModal = $state(false);

  function closeModal(val = true) {
    showModal = !val;
  }
</script>

<!-- Modal Form ===== ===== ===== -->
<div class="comp modal-form" style=" {showModal ? 'z-index: ' + 6 : ''};">
  <b class="title">Just Button</b>
  <button class="btn" onclick={() => closeModal(false)}>Login</button>

  <!-- Modal === === -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal {showModal ? 'show' : ''}"
    onclick={(event) => {
      if (event.target === event.currentTarget) closeModal();
    }}
  >
    <form class="form animate">
      <!-- Btn X -->
      <button
        class="btn-close"
        onclick={() => closeModal()}
        aria-label="close-form"><i class="fa fa-close"></i></button
      >
      <!-- Foto -->
      <div class="head"><i class="fa fa-user"></i></div>
      <!-- Input -->
      <div class="inputs">
        <label for="usrname">Username:</label>
        <input type="text" id="usrname" placeholder="Your Username" />
        <label for="usrmail">Email:</label>
        <input type="email" id="usrmail" placeholder="Your Email" />
        <label for="usrpass">Password:</label>
        <input type="password" id="usrpass" placeholder="Stong Password" />

        <button
          class="btn-submit"
          type="submit"
          onclick={(e) => {
            e.preventDefault();
            closeModal();
          }}>Submit</button
        >
        <label class="remember" for="remember">
          <input type="checkbox" id="remember" /> Remember me
        </label>
      </div>
      <!-- Foot -->
      <div class="foot">
        <button class="btn-cencel" onclick={() => closeModal()}>Cencel</button>
        <button class="btn-forget" onclick={() => closeModal()}
          >Forgot Password?</button
        >
      </div>
    </form>
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
    }
    & > .btn {
      @include btn();
    }
  }

  // Modal Form > Modal === ===
  .modal-form > .modal {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    overflow: auto;
    background-color: rgba(black, 0.5);
    display: none;
    place-content: center;

    // Form
    .form {
      position: relative;
      display: grid;
      background-color: $color-dark2;
      @include shadow();
    }
    //
    .form .btn-close {
      @include btnX(white);
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.75rem;
      font-size: 1.25rem;
    }
    //
    .form .head {
      margin: 3rem auto 1rem auto;
      width: 10rem;
      height: 10rem;
      border: 2px solid white;
      border-radius: 50%;
      background-color: white;
      display: grid;
      place-content: center;
      overflow: hidden;
      i {
        font-size: 9rem;
        color: $color-dark4;
        translate: 0 1.25rem;
      }
    }
    //
    .form .inputs {
      display: grid;
      gap: 0.25rem;
      padding: 1rem;
      & > label {
        color: rgba(white, 0.75);
      }
      & > input {
        margin-bottom: 0.5rem;
        width: 80vw;
        max-width: 480px;
        padding: 0.5rem 0.5rem;
        font-size: 1rem;
      }
      .btn-submit {
        @include btn($color-dark4, white);
        margin: 0.5rem 0 1rem 0;
      }
      .remember {
        // margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
    //
    .form .foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: white;
      color: $color-dark2;
      padding: 0.75rem 1rem;
      .btn-cencel {
        @include btn(#f22, white);
        padding: 0.5rem 1rem;
      }
      .btn-forget {
        @include btn();
        text-decoration: underline;
        padding: 0;
        &:hover {
          background-color: unset;
        }
        &:active {
          background-color: unset;
          color: #f22;
        }
      }
    }
  }
  // Modal Form > Modal (SHOW) === ===
  .modal-form > .modal.show {
    display: grid;
  }
  // Modal Form > Modal (ANIMATE) === ===
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }
  @-webkit-keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  // @Responsive ===== ===== =====
  @media (max-width: 768px) {
    .modal-form {
      @include part(1rem);
    }
    .modal-form > .title {
      @include title();
    }
  }
</style>
