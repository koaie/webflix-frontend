<script>
  import { goto } from "@roxi/routify";
  // Components:
  import TopAppBar from "@smui/top-app-bar";

  // Logic imports:
  import { mobileNav, sideNav } from "../../logic/stores";

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
        <!-- <div class="flexCentered">
            <button
              style="background-color: transparent; border: none; color: white;"
              on:click={toggleSideNav}
            >
              <i class="material-icons" style="font-size: 48px;">menu</i>
            </button>
          </div> -->
    </div>

    <!-- Desktop text -->
    <!-- <div class="flexCentered flexColumn bgPrimary desktopOnly">
            <h3 class="noMargin whiteText">Student Central</h3>
            <p class="noMargin" style="color: lightgrey">John Smith - Coach</p>
        </div> -->

    <!-- Search bar -->
    <!-- <div class="searchBar small desktopOnly">
            <div class="flexCentered">
                <input type="text" placeholder="Class ID, Coach, Location, Etc..." />
                <i class="material-icons">search</i>
            </div>
        </div>
        <div class="searchBar large mobileOnly">
            <div class="flexCentered">
                <input type="text" placeholder="Class ID, Coach, Location, Etc..." />
                <i class="material-icons">search</i>
            </div>
        </div> -->
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

  /* .searchBar {
        height: 48px;
        background-color: var(--darkGreen);
        border-radius: 2em;
        padding: .5em .75em;
        box-sizing: border-box;
        color: white;
    }

    .searchBar.small {
        width: 50%;
    }
    .searchBar.large {
        width: 80%;
    }

    .searchBar input {
        border: 0;
        background-color: transparent;
        color: white;
        box-sizing: border-box;
        height: 100%;
        width: 90%;
        font-size: medium;
    }

    .searchBar input:focus {
        outline: none;
    } */
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
