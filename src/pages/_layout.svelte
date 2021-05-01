<script>
  // Component imports:
  import Sidebar from "../components/layout/Sidebar.svelte";
  import Header from "../components/layout/Header.svelte";
  import LargeDialog from "../components/dialog/large.svelte";
  import { sideNav, largeDialog } from "../logic/stores";

  const closeSideNav = () => {
    if ($sideNav) {
      sideNav.update((val) => false);
    }
  };
  function toggleSideNav() {
    sideNav.update((val) => !val);
  }
</script>

<div class="layout">
  <div id="header" class="flexCentered bgPrimary">
    <Header />
  </div>

  <LargeDialog bind:open={$largeDialog} />

  <div class="desktopOnly sidebar">
    <Sidebar desktop={true} open={true} />
  </div>

  <div id="pageContent">
    <Sidebar on:click={toggleSideNav} open={$sideNav} />
    <div class="page">
      <div on:click={() => closeSideNav()}>
        <slot />
      </div>
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
    z-index: 1;
  }

  .sidebar {
    position: absolute;
    top: 0px;
    height: 100%;
    background: transparent;
    z-index: 4;
  }

  #pageContent {
    width: 100%;
    z-index: 3;
    grid-column-start: 2;
  }

  #pageContent .page {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1100px) {
    .layout {
      display: grid;
      grid-template-rows: 72px 1fr;
      grid-template-columns: none;
      height: 100%;
      width: 100%;
    }
    #pageContent {
      width: 100%;
      z-index: 3;
      grid-column-start: 1;
    }

    #header {
      grid-column: 1;
      z-index: 5;
    }

    #pageContent .page {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }
</style>
