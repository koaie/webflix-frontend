<script>
  // Component imports:
  import Sidebar from "../components/layout/Sidebar.svelte";
  import Header from "../components/layout/Header.svelte";

  import { sideNav } from "../logic/stores";

  let open = false;

  sideNav.subscribe((value) => {
    open = value;
  });
  function closeSideNav() {
    if (open) {
      sideNav.update((val) => (val = false));
    }
  }
  function toggleSideNav() {
    open = !open;
  }
</script>

<div class="layout">
  <div id="header" class="flexCentered bgPrimary">
    <Header />
  </div>

  <!-- Desktop Sidebar: -->
  <div class="desktopOnly">
    <Sidebar desktop={true} open={true} />
  </div>

  <div id="pageContent">
    <!-- Mobile Nav: -->
    <Sidebar on:click={toggleSideNav} {open} />
    <div
      style="height: 100%; width: 100%"
      on:click={() => sideNav.update((val) => (val = false))}
    >
      <slot />
    </div>
  </div>
</div>

<!-- routify:options preload="proximity" -->
<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(180px, max-content) 1fr;
    grid-template-rows: 72px 1fr;
    height: 100%;
    width: 100%;
  }

  #header {
    grid-column: span 2;
  }

  #pageContent {
    position: relative;
  }

  @media only screen and (max-width: 600px) {
    .layout {
      display: grid;
      grid-template-rows: 72px 1fr;
      grid-template-columns: none;
      height: 100%;
      width: 100%;
    }

    #header {
      grid-column: 1;
    }
  }
</style>
