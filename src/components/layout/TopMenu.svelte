<script>
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import { goto } from "@roxi/routify";

  let tabs = ["Profile", "Edit", "Settings"];
</script>

<!--
        Note: tabs must be unique. (They cannot === each other.)
      -->

<div class="card-container">
  <TabBar {tabs} let:tab>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab} on:click={() => $goto(`/user/${tab.toLowerCase()}`)}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
</div>
<div class="container"><slot /></div>

<style>
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #333333;
    border-radius: 0.4rem 0.4rem 0rem 0rem;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #232324;
    border-radius: 0rem 0rem 0.4rem 0.4rem;
  }
</style>
