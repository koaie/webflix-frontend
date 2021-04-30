<script>
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
  import IconButton, { Icon } from "@smui/icon-button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import ActionCard from "../components/card/action.svelte";
  import { user, API_URL } from "../logic/stores";
  import LargeDialog from "../components/dialog/large.svelte";

  let showLargeDialog = false;
  let data = null;

  const body = JSON.stringify({
    id: $user.id,
  });

  const call = async () => {
    let result;
    await axios
      .post(`${$API_URL}/content/view.php`, body, {
        "Content-type": "application/json",
      })
      .then((res) => {
        result = res;
        data = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  if ($user.id) {
    const res = call();
  }
</script>

<LargeDialog bind:open={showLargeDialog} />
{#if $user.id}
  <LayoutGrid>
    {#if data}
      {#each data as { title, desc, genres, language }}
        <Cell span={4}>
          <Card>
            <PrimaryAction
              on:click={() => {
                console.log(title, desc, genres);
                showLargeDialog = true;
              }}
            >
              <Media
                style="background-image: url({`https://place-hold.it/320x180?text=16x9&fontsize=23`});"
                aspectRatio="16x9"
              >
                <MediaContent>
                  <div
                    style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
                  >
                    <h2 class="mdc-typography--headline6" style="margin: 0;">
                      {title}
                    </h2>
                  </div>
                </MediaContent>
              </Media>
            </PrimaryAction>
            <Actions>
              <ActionButtons>
                <Button on:click={() => {}}>
                  <Label
                    >{#if $user.paid}
                      Play
                    {:else}
                      Trailer
                    {/if}
                  </Label>
                </Button>
                <Button
                  color="secondary"
                  on:click={() => {
                    showLargeDialog = true;
                  }}
                >
                  <Label>Details</Label>
                </Button>
              </ActionButtons>
              <ActionIcons>
                <IconButton
                  class="material-icons"
                  on:click={() => {}}
                  title="Share">share</IconButton
                >
              </ActionIcons>
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

<style>
  .container {
    margin: 0;
    margin-right: -50%;
  }
</style>
