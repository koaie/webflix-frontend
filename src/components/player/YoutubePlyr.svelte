<script>
  import { Plyr } from "svelte-plyr-fixed";

  export let id;
  let player;
</script>

<Plyr bind:player>
  <div class="plyr__video-embed">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe
      src="https://www.youtube.com/embed/{id}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    />
  </div>
</Plyr>
