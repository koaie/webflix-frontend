<script>
  import { Plyr } from "svelte-plyr-fixed";
  export let url;

  function logEvent(event) {
    console.log(event);
  }

  let player;
</script>

<div class="plyr">
  <!-- <Plyr on:timeupdate={logEvent} bind:player={player}>
      <div class="plyr__video-embed">
        <source
          src="{url}"
          type="video/mp4" />
      </div>
    </Plyr> -->

  <Plyr on:timeupdate={logEvent} bind:player>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video crossorigin playsinline src={url} />
  </Plyr>
</div>

<style>
  .plyr {
    max-width: 650px;
    border-radius: 1rem;
    padding: 2rem;
  }
</style>
