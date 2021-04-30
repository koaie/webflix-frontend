<script>
  import { goto } from "@roxi/routify";
  // Components:
  import TopAppBar from "@smui/top-app-bar";

  // Logic imports:
  import { sideNav } from "../../logic/stores";

  // Funcs:
  function toggleSideNav() {
    sideNav.update((val) => !val);
  }
</script>

<TopAppBar variant="static">
  <div class="headerContainer">
    <div class="clickable mobileOnly">
      <div class="flexCentered">
        <button class="icoBot" on:click={toggleSideNav}>
          <i class="material-icons">menu</i>
        </button>
      </div>
    </div>

    <div class="desktopOnly=" />

    <div class="logo">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <h1><label on:click={() => $goto("./")}>webflix</label></h1>
    </div>
  </div></TopAppBar
>

<style>
  .icoBot {
    background-color: transparent;
    border: none;
    color: white;
  }
  .material-icons {
    font-size: 48px;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
    background-color: var(--mdc-theme--background);
  }

  .logo {
    position: absolute;
    right: 1.5rem;
    top: -1%;
    font-size: 20;
    color: #7f91ec;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .logo label {
    color: #7f91ec;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 850px) {
    .headerContainer {
      display: inline-flex;
      justify-content: space-between;
      position: fixed;
      top: 0;
      width: 100%;
      padding: 0.5em;
      background-color: var(--mdc-theme--background);
    }

    .logo {
      position: absolute;
      right: 1.5rem;
      top: -10%;
      font-size: 20;
      color: #7f91ec;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
</style>
