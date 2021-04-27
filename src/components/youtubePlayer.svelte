<script>
  import { Player, Youtube} from "@vime/svelte";
  export let id;
</script>
<div class="container">
<Player theme="dark" style="--vm-player-theme: #7F91EC;">
  <Youtube videoId="{id}" />
</Player>
</div>

<style>
      .container {
    margin: 0;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-right: -50%;
    width: 80%;
    height: 60%;
    transform: translate(-50%, -15%);
  }
</style>
