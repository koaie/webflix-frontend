<script>
    import Snackbar, { Actions, Label } from '@smui/snackbar';
    import IconButton from '@smui/icon-button';

    export let label = "change me!";
    export let icon = "close";
    export let open = false;
</script>

<Snackbar bind:open={open}>
    <Label>{label}</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">{icon}</IconButton>
    </Actions>
  </Snackbar>