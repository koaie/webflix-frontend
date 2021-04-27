<script>
  import { goto } from "@roxi/routify";
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim,
  } from "@smui/drawer";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";

  export let open = false;
  export let active = "TV Shows";

  function setActive(value) {
    active = value;
    open = false;
  }
</script>


  <!-- Don't include fixed={false} if this is a page wide drawer.
          It adds a style for absolute positioning. -->
  <Drawer variant="modal" bind:open>
    <Header>
      <Title>Super Mail</Title>
      <Subtitle>It's the best fake mail app drawer.</Subtitle>
    </Header>
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("TV Shows") && $goto("./shows")}
          activated={active === "TV Shows"}
        >
          <Graphic class="material-icons" aria-hidden="true">live_tv</Graphic>
          <Text>TV Shows</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Movies")}
          activated={active === "Movies"}
        >
          <Graphic class="material-icons" aria-hidden="true">movie</Graphic>
          <Text>Movies</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Sent Mail")}
          activated={active === "Sent Mail"}
        >
          <Graphic class="material-icons" aria-hidden="true">send</Graphic>
          <Text>Sent Mail</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Drafts")}
          activated={active === "Drafts"}
        >
          <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
          <Text>Drafts</Text>
        </Item>

        <Separator />
        <Subheader component={H6}>Labels</Subheader>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Family")}
          activated={active === "Family"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Family</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Friends")}
          activated={active === "Friends"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Friends</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Work")}
          activated={active === "Work"}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Work</Text>
        </Item>
        <Separator />
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Login")}
          activated={active === "Login"}
        >
          <Graphic class="material-icons" aria-hidden="true">login</Graphic>
          <Text>Login</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Logout")}
          activated={active === "Logout"}
        >
          <Graphic class="material-icons" aria-hidden="true">logout</Graphic>
          <Text>Logout</Text>
        </Item>
        <Item
        href="javascript:void(0)"
        on:click={() => setActive("Profile")}
        activated={active === "Profile"}
      >
        <Graphic class="material-icons" aria-hidden="true">manage_accounts</Graphic>
        <Text>Profile</Text>
      </Item>
      <Item
      href="javascript:void(0)"
      on:click={() => setActive("Settings")}
      activated={active === "Settings"}
    >
      <Graphic class="material-icons" aria-hidden="true">settings</Graphic>
      <Text>Settings</Text>
    </Item>
      </List>
    </Content>
  </Drawer>

