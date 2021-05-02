<script>
  import { Plyr } from "svelte-plyr-fixed";
  export let id;

  function logEvent(event) {
    console.log(event);
  }

  let player;
</script>

<div class="youtube-plyr">
  <Plyr on:timeupdate={logEvent} bind:player>
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
</div>

<style>
  @media only screen and (min-width: 910px) {
    .youtube-plyr {
      width: 650px;
      border-radius: 1rem;
      padding: 0;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }
  }
  /* Mobile screens */
  @media only screen and (max-width: 910px) {
    .youtube-plyr {
      width: 450px;
      border-radius: 1rem;
      padding: 0;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }
  }
</style>
