<script>
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
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
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title">{title}</Title>
  <Content id="large-scroll-content">
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
