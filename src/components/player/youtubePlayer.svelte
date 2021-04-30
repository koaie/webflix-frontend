<script>
  import { Player, Youtube, DefaultUi } from "@vime/svelte";
  export let id;
</script>

<div class="container">
  <Player theme="dark">
    <Youtube videoId={id} />
    <DefaultUi />
  </Player>
</div>

<style>
  .container {
  }
</style>
