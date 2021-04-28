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
  export let desktop = false;
  export let active = "";

  function setActive(value) {
    active = value;
    if(!desktop)
    {
      open = false;
    }
  }
</script>

<Drawer variant="modal" bind:open>
  <Header>
    <Title>User user</Title>
    <Subtitle>email@email.com</Subtitle>
  </Header>
  <Content>
    <List>
      <Item
        href="javascript:void(0)"
        on:click={() => {
          setActive("TV Shows");
          $goto("./shows");
        }}
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

      <Separator />
      <Subheader component={H6}>Labels</Subheader>
      <Item
        href="javascript:void(0)"
        on:click={() => {
          setActive("Player");
          $goto("./watch");
        }}
        activated={active === "Player"}
      >
        <Graphic class="material-icons" aria-hidden="true">tv</Graphic>
        <Text>Player</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => {
          setActive("Youtube Player");
          $goto("./watch");
        }}
        activated={active === "Youtube Player"}
      >
        <Graphic class="material-icons" aria-hidden="true">tv</Graphic>
        <Text>Youtube Player</Text>
      </Item>
      <Separator />
      <Item
        href="javascript:void(0)"
        on:click={() => {
          setActive("Login");
          $goto("./login");
        }}
        activated={active === "Login"}
      >
        <Graphic class="material-icons" aria-hidden="true">login</Graphic>
        <Text>Login</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => {
          setActive("Register");
          $goto("./register");
        }}
        activated={active === "Register"}
      >
        <Graphic class="material-icons" aria-hidden="true">history_edu</Graphic>
        <Text>Register</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive("Logout")}
        activated={active === "Logout"}
        align="bottom"
      >
        <Graphic class="material-icons" aria-hidden="true">logout</Graphic>
        <Text>Logout</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive("Profile")}
        activated={active === "Profile"}
      >
        <Graphic class="material-icons" aria-hidden="true"
          >manage_accounts</Graphic
        >
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

