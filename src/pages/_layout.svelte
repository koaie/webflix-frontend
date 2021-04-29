<script>
  // Component imports:
  import Sidebar from "../components/layout/Sidebar.svelte";
  import Header from "../components/layout/Header.svelte";
  import { sideNav, Path } from "../logic/stores";

  let open = false;
  let path = null;

  Path.subscribe((value) => {
    path = value;
  });

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

  <div class="desktopOnly sidebar">
    <Sidebar desktop={true} open={true} />
  </div>

  <div id="pageContent">
    <Sidebar on:click={toggleSideNav} {open} />
    <div class="page">
        <div on:click={() => sideNav.update((val) => (val = false))}>
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
    height: 100%;
    background: transparent;
    z-index: 10;
  }

  #pageContent .page {
    margin: 0;
    position: absolute;
    top: 25%;
    left: 50%;
    margin-left: 8.3rem;
    width: 80%;
    height: 60%;
    transform: translate(-50%, -25%);
  }

  @media only screen and (max-width: 850px) {
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

    #pageContent .page {
      margin: 0;
      position: absolute;
      top: 25%;
      left: 50%;
      margin-right: -50%;
      width: 80%;
      height: 60%;
      transform: translate(-50%, -25%);
    }
  }
</style>
