<script>
  import { goto } from "@roxi/routify";
  import Button, { Label } from "@smui/button";

  import Card, {
    Content,
    Actions,
  } from "@smui/card";

  export let text = "Whoops something went wrong!";
  export let icon = "arrow_forward";
  export let direct = "./";
  export let action = "Go back";
</script>

<Card>
  <Content>{text}</Content>
  <Actions fullBleed>
    <Button
    on:click={() => {
      $goto(direct);
    }}
  >
    <Label>{action}</Label>
    <i class="material-icons" aria-hidden="true">{icon}</i>
  </Button>
  </Actions>
</Card>
