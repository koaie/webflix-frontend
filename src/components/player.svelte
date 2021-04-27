<script>
  import { Player, Video, DefaultUi } from "@vime/svelte";
  export let url;
  export let cover;
</script>
<div class="container">
<Player theme="dark" style="--vm-player-theme: #7F91EC;">
  <Video crossOrigin poster="{cover}">
    <source data-src="{url}" type="video/mp4" />
  </Video>

  <DefaultUi />
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
