<script>
    // Component imports:
    import Sidebar from "../components/layout/Sidebar.svelte";
    import MobileSidebar from "../components/layout/MobileSidebar.svelte";
    import Header from "../components/layout/Header.svelte";

    import { mobileNav } from "../logic/stores";

    let open = false;
    const unsubscribe = mobileNav.subscribe((value) => {
        open = value;
    });

    function closeMobileNav() { 
        if (open) {mobileNav.update(val => val = false); }
    }
    function toggleMobileNav()
    {
        open = !open;
    }
</script>

<div class="layout">
    <div id="header" class="flexCentered bgPrimary">
        <Header />
    </div>

    <!-- Desktop Sidebar: -->
    <div class="desktopOnly">
        <Sidebar on:/>
    </div>

    <div id="pageContent">
        <!-- Mobile Nav: -->
        <MobileSidebar on:click={toggleMobileNav} {open} />
        <div style="height: 100%; width: 100%"
        on:click={() => mobileNav.update(val => val = false)}>
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
