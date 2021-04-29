<script>
  import axios from "axios";

  import Player from "../components/player/player.svelte";
  import YoutubePlayer from "../components/player/youtubePlayer.svelte";
  import ActionCard from "../components/card/action.svelte";
  import { apiUrl, UserId } from "../logic/stores";
  import { params } from "@roxi/routify";

  export let api;
  export let userId
  export let url;
  export let cover =
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Big_Buck_Bunny_loves_Creative_Commons.png";
  export let id = "";

  apiUrl.subscribe((value) => {
    api = value;
  });
  UserId.subscribe((value) => {
    userId = value;
  });

  const body = JSON.stringify({
    id: userId,
    episodeId: $params.id,
  });

  const call = async () => {
    let result;
    await axios
      .post(`${api}/content/play.php`, body, {
        "Content-type": "application/json",
      })
      .then((res) => {
          result = res;
        if (res.data[0].path) {
          url = `${res.data[0].path}`;
        } else if (res.data[0].trailer) {
          id = `${res.data[0].trailer}`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  const res = call();
  console.log($params);
</script>

{#if $params.id}
  {#if id}
    <YoutubePlayer {id} />
  {:else if url}
    <Player {url} {cover} />
  {:else}
    <div class="container">
      <ActionCard />
    </div>
  {/if}
{:else}
  <div class="container">
    <ActionCard />
  </div>
{/if}

<style>
  .container {
    margin: 0;
    position: absolute;
    top: 70%;
    left: 50%;
    margin-right: -50%;
    width: 50%;
    height: 80%;
    transform: translate(-50%, -70%);
  }
</style>
