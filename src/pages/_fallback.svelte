<script>
  import { url } from "@roxi/routify";
  import Button, { Label } from "@smui/button";
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";
</script>

<div class="container">
  <Card>
    <Content>Whoops something went wrong!</Content>
    <Actions fullBleed>
      <Button
        color="secondary"
        on:click={() => {
          $url("../");
        }}
      >
        <Label>Go back</Label>
        <i class="material-icons" aria-hidden="true">arrow_forward</i>
      </Button>
    </Actions>
  </Card>
</div>

<style>
  .container {
    margin: 0;
    position: absolute;
    top: 70%;
    left: 50%;
    margin-right: -50%;
    width: 50%;
    height: 80%;
    transform: translate(-50%, -70%);
  }
</style>
