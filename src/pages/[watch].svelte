<script>
  import axios from "axios";

  import Player from "../components/player.svelte";
  import YoutubePlayer from "../components/youtubePlayer.svelte";
  import { apiUrl } from "../logic/stores";
  import { params, goto } from "@roxi/routify";

  import Button, { Label } from "@smui/button";
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";

  export let api;
  export let url;
  export let cover =
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Big_Buck_Bunny_loves_Creative_Commons.png";
  export let id = "";

  apiUrl.subscribe((value) => {
    api = value;
  });

  let episodeId = $params.id;
  const body = JSON.stringify({
    id: "59A01BBE-171A-4268-A175-C2A0D8E45E07",
    episodeId: episodeId,
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
  console.log(res);
  console.log(url);
  console.log(id)
</script>

{#if $params.id}
  {#if id}
    <YoutubePlayer {id} />
  {:else if url}
    <Player {url} {cover} />
  {:else}
    <div class="container">
      <Card>
        <Content>Whoops something went wrong!</Content>
        <Actions fullBleed>
          <Button
            color="secondary"
            on:click={() => {
              $goto("./");
            }}
          >
            <Label>Go back</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </Button>
        </Actions>
      </Card>
    </div>
  {/if}
{:else}
  <div class="container">
    <Card>
      <Content>Whoops something went wrong!</Content>
      <Actions fullBleed>
        <Button
          color="secondary"
          on:click={() => {
            $goto("./");
          }}
        >
          <Label>Go back</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
      </Actions>
    </Card>
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
