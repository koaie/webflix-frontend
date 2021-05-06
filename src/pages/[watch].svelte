<script>
  import axios from "axios";

  import Plyr from "../components/player/Plyr.svelte";
  import YoutubePlyr from "../components/player/YoutubePlyr.svelte";
  import ActionCard from "../components/card/action.svelte";
  import { API_URL, user } from "../logic/stores";
  import { params, goto } from "@roxi/routify";

  export let url;
  export let id = "";

  const body = JSON.stringify({
    id: $user.id,
    episodeId: $params.id,
  });

  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/content/play.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data[0];
  };
  const watch = async () => {
    const res = await call();
    if (res.path) {
      url = res.path;
    } else if (res.trailer) {
      id = res.trailer;
    }
  };
  if ($user.id && $params.id) {
    watch();
  }
</script>

{#if $params.id}
  {#if id}
    <div class="youtube-plyr">
      <YoutubePlyr {id} />
    </div>
  {:else if url}
    <div class="plyr">
      <Plyr {url} />
    </div>
  {:else}
    <div class="flexCentered">
      <ActionCard on:click={$goto(history.back())} />
    </div>
  {/if}
{:else}
  <div class="flexCentered">
    <ActionCard on:click={$goto(history.back())} />
  </div>
{/if}

<style>
  @media only screen and (min-width: 910px) {
    .youtube-plyr {
      width: 800px;
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
