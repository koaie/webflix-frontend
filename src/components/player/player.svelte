<script>
  import { Player, Video, DefaultUi } from "@vime/svelte";
  export let url;
  export let cover;
</script>

<div class="container">
  <Player theme="dark" style="--vm-player-theme: var(--mdc-theme-primary);">
    <Video crossOrigin poster={cover}>
      <source data-src={url} type="video/mp4" />
    </Video>

    <DefaultUi />
  </Player>
</div>

<style>
  /* Desktops */
  @media only screen and (min-width: 850px) {
    .container {
    }
  }

  /* Mobile screens */
  @media only screen and (max-width: 850px) {
    .container {
    }
  }
</style>
