<script>
  import axios from "axios";

  import Plyr from "../components/player/Plyr.svelte";
  import YoutubePlyr from "../components/player/YoutubePlyr.svelte";
  import ActionCard from "../components/card/action.svelte";
  import { API_URL, user } from "../logic/stores";
  import { params } from "@roxi/routify";

  export let url ;
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
    <YoutubePlyr {id} />
  {:else if url}
    <Plyr {url} />
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
