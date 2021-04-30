<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";

  export let open = false;
  export let title = "title";
  export let text = "text";
  export let buttonText = "Done";
</script>

<Dialog
  bind:open
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
>
  <Header>
    <Title id="fullscreen-title">{title}</Title>
  </Header>
  <Content id="fullscreen-content">
    {#each Array(10) as _item}
      {text}
    {/each}
  </Content>
  <Actions>
    <Button action="accept">
      <Label>{buttonText}</Label>
    </Button>
  </Actions>
</Dialog>
