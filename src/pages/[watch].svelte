<script>
  import { API_URL, user } from "../logic/stores";
  import { params, goto } from "@roxi/routify";
  import axios from "axios";

  import ActionCard from "../components/card/action.svelte";

  import Plyr from "../components/player/Plyr.svelte";
  import YoutubePlyr from "../components/player/YoutubePlyr.svelte";

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
</script>
{#if user}
{#await call() then data}
  {#if $params.id && !(data.error)}
    {#if data.trailer}
      <div class="youtube-plyr">
        <YoutubePlyr id={data.trailer} />
      </div>
    {:else if data.path}
      <div class="plyr">
        <Plyr url={data.path} />
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
{/await}
{/if}

{#if !$user}
<div class="flexCentered">
  <ActionCard text="Whoops, you are not logged in!" icon="login" action="login" on:click={$goto("/auth/login")} />
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
