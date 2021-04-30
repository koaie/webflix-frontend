<script>
  import { goto, isActive, params } from "@roxi/routify";
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

  import { user } from "../../logic/stores";

  export let open = false;
  export let desktop = false;
  export let active = "";

  function setActive(value) {
    active = value;
    if (!desktop) {
      open = false;
    }
  }
  console.log($user);
</script>

<Drawer variant="modal" bind:open>
  <Header>
    {#if $user}
      <Title>{$user.name} {$user.surname}</Title>
      <Subtitle>{$user.email}</Subtitle>
    {:else}
      <Title>Hello!</Title>
      <Subtitle>please login :)</Subtitle>
    {/if}
  </Header>
  <Content>
    <List>
      {#if $user}
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
      {/if}
      {#if $user.admin}
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
      {/if}
      <Separator />
      {#if $user.id}
        <Item
          href="javascript:void(0)"
          on:click={() => {
            setActive("Logout");
            $goto("./logout");
          }}
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
      {:else}
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
          <Graphic class="material-icons" aria-hidden="true"
            >history_edu</Graphic
          >
          <Text>Register</Text>
        </Item>
      {/if}
    </List>
  </Content>
</Drawer>
