<script>
  // Component imports:
  import Sidebar from "../components/layout/Sidebar.svelte";
  import Header from "../components/layout/Header.svelte";
  import { sideNav } from "../logic/stores";

  let open = false;

  sideNav.subscribe((value) => {
    open = value;
  });
  const closeSideNav = () => {
    if (open) {
      sideNav.update((val) => false);
    }
  };
  function toggleSideNav() {
    open = !open;
  }
</script>

<div class="layout">
  <div id="header" class="flexCentered bgPrimary">
    <Header />
  </div>

  <div class="desktopOnly sidebar">
    <Sidebar desktop={true} open={true} />
  </div>

  <div id="pageContent">
    <Sidebar on:click={toggleSideNav} {open} />
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
  }

  .sidebar {
    position: absolute;
    top: 0px;
    height: 100%;
    background: transparent;
    z-index: 5;
  }

  #pageContent {
    width: 100%;
    z-index: 4;
  }

  #pageContent .page {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-top: 5%;
  }

  @media only screen and (max-width: 910px) {
    .layout {
      display: grid;
      grid-template-rows: 72px 1fr;
      grid-template-columns: none;
      height: 100%;
      width: 100%;
    }
    #pageContent {
      width: 100%;
      z-index: 6;
    }

    #header {
      grid-column: 1;
    }

    #pageContent .page {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0rem;
      margin-top: 5rem;
    }
  }
</style>
