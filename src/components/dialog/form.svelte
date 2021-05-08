<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  export let open = false;
  export let buttonText = "Done";
  export let title = "Title";
</script>

{#if open}
  <Dialog
    bind:open
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
  >
    <Header>
      <Title id="fullscreen-title">{title}</Title>
    </Header>
    <Content id="fullscreen-content">
      <slot />
    </Content>
    <Actions>
      <Button action="accept" on:click>
        <Label>{buttonText}</Label>
      </Button>
    </Actions>
  </Dialog>
{/if}
