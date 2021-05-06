<script>
  import { Plyr } from "svelte-plyr-fixed";
  export let url;
  let player;
</script>

  <Plyr bind:player>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video crossorigin playsinline src={url} />
  </Plyr>