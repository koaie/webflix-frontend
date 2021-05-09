<script>
  import { url } from "@roxi/routify";
  import { user } from "../../logic/stores";

  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";
  import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";

  export let open = false;
  export let desktop = false;
  export let active = "";

  function setActive(value) {
    active = value;
    if (!desktop) {
      open = false;
    }
  }
</script>

<Drawer variant="modal" bind:open>
  <Header>
    {#if $user.name}
      <Title>{$user.name} {$user.surname}</Title>
      <Subtitle>{$user.email}</Subtitle>
    {:else}
      <Title>Hello!</Title>
      <Subtitle>please login :)</Subtitle>
    {/if}
  </Header>
  <Content>
    <List>
      {#if $user.id}
        <Item
          href={$url("/feed/shows")}
          on:click={() => setActive("TV Shows")}
          activated={active === "TV Shows"}
        >
          <Graphic class="material-icons" aria-hidden="true">live_tv</Graphic>
          <Text>TV Shows</Text>
        </Item>
        <Item
          href={$url("/feed/movies")}
          on:click={() => setActive("Movies")}
          activated={active === "Movies"}
        >
          <Graphic class="material-icons" aria-hidden="true">movie</Graphic>
          <Text>Movies</Text>
        </Item>
        {#if !$user.paid}
          <Separator />
          <Item
            href={$url("/premium/index")}
            on:click={() => setActive("Premium")}
            activated={active === "Premium"}
          >
            <Graphic class="material-icons" aria-hidden="true"
              >local_activity</Graphic
            >
            <Text>Premium</Text>
          </Item>
        {/if}
      {/if}
      {#if $user.admin}
        <Separator />
        <Subheader component={H6}>Admin</Subheader>
        <Item
          href={$url("/admin/users")}
          on:click={() => setActive("users")}
          activated={active === "users"}
        >
          <Graphic class="material-icons" aria-hidden="true">people</Graphic>
          <Text>Users</Text>
        </Item>
        <Item
          href={$url("/admin/genre")}
          on:click={() => setActive("genre")}
          activated={active === "genre"}
        >
          <Graphic class="material-icons" aria-hidden="true">receipt</Graphic>
          <Text>Genres</Text>
        </Item>
        <Item
          href={$url("/admin/content")}
          on:click={() => setActive("Content")}
          activated={active === "Content"}
        >
          <Graphic class="material-icons" aria-hidden="true"
            >subscriptions</Graphic
          >
          <Text>Content</Text>
        </Item>
      {/if}
      <Separator />
      {#if $user.id}
        <Item
          href={$url("/auth/logout")}
          on:click={() => {
            setActive("Logout");
          }}
          activated={active === "Logout"}
          align="bottom"
        >
          <Graphic class="material-icons" aria-hidden="true">logout</Graphic>
          <Text>Logout</Text>
        </Item>
        <Item
          href={$url("/user/profile")}
          on:click={() => setActive("Profile")}
          activated={active === "Profile"}
        >
          <Graphic class="material-icons" aria-hidden="true">person</Graphic>
          <Text>Profile</Text>
        </Item>
      {:else}
        <Item
          href={$url("/auth/login")}
          on:click={() => setActive("Login")}
          activated={active === "Login"}
        >
          <Graphic class="material-icons" aria-hidden="true">login</Graphic>
          <Text>Login</Text>
        </Item>
        <Item
          href={$url("/auth/forgot-password")}
          on:click={() => setActive("Forgot Password")}
          activated={active === "Forgot Password"}
        >
          <Graphic class="material-icons" aria-hidden="true">vpn_key</Graphic>
          <Text>Forgot Password</Text>
        </Item>
        <Item
          href={$url("/auth/register")}
          on:click={() => {
            setActive("Register");
          }}
          activated={active === "Register"}
        >
          <Graphic class="material-icons" aria-hidden="true"
            >history_edu</Graphic
          >
          <Text>Register</Text>
        </Item>
      {/if}
      <div class="footer" />
    </List>
  </Content>
</Drawer>

<style>
  .footer {
    height: 4rem;
    background-color: transparent;
  }
</style>
