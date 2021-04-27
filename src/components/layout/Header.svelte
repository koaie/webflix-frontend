<script>
  import { goto } from "@roxi/routify";
  // Components:
  import TopAppBar from "@smui/top-app-bar";

  // Logic imports:
  import { sideNav } from "../../logic/stores";

  // Funcs:
  function toggleSideNav() {
    sideNav.update((val) => (val = !val));
  }
</script>

<TopAppBar variant="static">
  <div class="headerContainer">
    <!-- Menu toggle for mobile -->
    <div class="clickable mobileOnly">
      <div class="flexCentered">
        <button
          style="background-color: transparent; border: none; color: white;"
          on:click={toggleSideNav}
        >
          <i class="material-icons" style="font-size: 48px;">menu</i>
        </button>
      </div>
    </div>
    <!-- Empty div for layout -->
    <div class="desktopOnly">
    </div>

    <div class="logo">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <h1><label on:click={() => $goto("./")}>webflix</label></h1>
    </div>

    <!-- Account -->
    <div class="desktopOnly" />
  </div>
</TopAppBar>

<style>
  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
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
</style>
