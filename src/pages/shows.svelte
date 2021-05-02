<script>
  import { goto } from "@roxi/routify";
  import axios from "axios";
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import Menu from "@smui/menu";
  import List, { Item, Text, PrimaryText, SecondaryText } from "@smui/list";
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import ActionCard from "../components/card/action.svelte";
  import { user, data, largeDialog, API_URL, content } from "../logic/stores";

  let playMenu = false;
  let episodes = null;

  const body = JSON.stringify({
    id: $user.id,
  });

  const contentRegex = /([\w-]{36}).(\d+):(\d+)@(\d+)/;

  const updateEpisodes = async () => {
    episodes = $content.data.split(",").map((el) => {
      const res = el.match(contentRegex);
      return {
        episodeId: res[1],
        episode: res[3],
        season: res[4],
        duration: res[2],
      };
    });
  };

  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/content/view.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };
  const fetch = async () => {
    let res = await call();
    data.update((val) => res);
  };
  if ($user.id) {
    fetch();
  }
</script>

{#if episodes}
  <Menu bind:this={playMenu}>
    <List>
      {#each episodes as { episode, season, episodeId, duration }}
        <Item on:SMUI:action={() => $goto(`./watch?id=${episodeId}`)}>
          <Text>
            <PrimaryText>Episode: {episode}</PrimaryText>
            <SecondaryText>season: {season}</SecondaryText>
          </Text>
        </Item>
      {/each}
    </List>
  </Menu>
{/if}

<div class="container" id="media">
  {#if $user.id}
    <LayoutGrid>
      {#if $data}
        {#each $data as card}
          <Cell span={4}>
            <Card>
              <PrimaryAction
                on:click={async () => {
                  content.update((val) => card);
                  console.log($content);
                  largeDialog.update((val) => true);
                }}
              >
                <Media
                  style="background-image: url({card.cover});"
                  aspectRatio="16x9"
                >
                  <MediaContent>
                    <div class="media">
                      <h2 class="mdc-typography--headline6">
                        {card.title}
                      </h2>
                    </div>
                  </MediaContent>
                </Media>
              </PrimaryAction>
              <Actions>
                <ActionButtons>
                  {#if $user.paid}
                    <Button
                      on:click={async () => {
                        content.update((val) => card);
                        await updateEpisodes();
                        await playMenu.setOpen(true);
                      }}
                    >
                      <Label>Play</Label>
                    </Button>
                  {:else}
                    <Button
                      on:click={async () => {
                        content.update((val) => card);
                        await updateEpisodes();
                        $goto(`./watch?id=${episodes[0].episodeId}`);
                      }}
                    >
                      <Label>trailer</Label>
                    </Button>
                  {/if}
                  <Button
                    color="secondary"
                    on:click={() => {
                      content.update((val) => card);
                      largeDialog.update((val) => true);
                    }}
                  >
                    <Label>Details</Label>
                  </Button>
                </ActionButtons>
              </Actions>
            </Card>
          </Cell>
        {/each}
      {/if}
    </LayoutGrid>
  {:else}
    <div class="container">
      <ActionCard
        text="Whoops, you are not logged in!"
        icon="login"
        direct="./login"
        action="Login"
      />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .media {
    color: #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
</style>
