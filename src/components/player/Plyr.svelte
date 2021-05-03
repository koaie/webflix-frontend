<script>
  import { Plyr } from "svelte-plyr-fixed";
  export let url;

  function logEvent(event) {
    console.log(event);
  }

  let player;
</script>

<div class="plyr">
  <Plyr on:timeupdate={logEvent} bind:player>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video crossorigin playsinline src={url} />
  </Plyr>
</div>
