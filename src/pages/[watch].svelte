<script>
  import axios from "axios";

  import Player from "../components/player/player.svelte";
  import YoutubePlayer from "../components/player/youtubePlayer.svelte";
  import ActionCard from "../components/card/action.svelte";
  import { API_URL, user } from "../logic/stores";
  import { params } from "@roxi/routify";

  export let url;
  export let cover =
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Big_Buck_Bunny_loves_Creative_Commons.png";
  export let id = "";

  if ($user.id && $params.id) {
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
    const res = call();
  }
</script>

{#if $params.id}
  {#if id}
    <YoutubePlayer {id} />
  {:else if url}
    <Player {url} {cover} />
  {:else}
    <div class="flexCentered">
      <ActionCard />
    </div>
  {/if}
{:else}
  <div class="flexCentered">
    <ActionCard />
  </div>
{/if}
