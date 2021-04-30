<script>
  import { Player, Youtube, DefaultUi } from "@vime/svelte";
  export let id;
</script>

<div class="container">
  <Player theme="dark" style="--vm-player-theme: #7F91EC;">
    <Youtube videoId={id} />
    <DefaultUi />
  </Player>
</div>

<style>
  .container {
  }
</style>
