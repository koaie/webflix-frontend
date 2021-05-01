<script>
    import { Plyr } from "svelte-plyr";
    export let url;
  
    function logEvent(event) {
      console.log(event)
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

    <Plyr on:timeupdate={logEvent} bind:player={player}>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
          crossorigin
          playsinline
          src="{url}"></video>
      </Plyr>
  </div>
  
  <style>
  @media only screen and (min-width: 910px) {
    .plyr {
    width:650px;
    border-radius: 1rem;
  }
  }

  /* Mobile screens */
  @media only screen and (max-width: 910px) {
    .plyr {
    width: 450px;
    border-radius: 1rem;
  }
  }
  </style>