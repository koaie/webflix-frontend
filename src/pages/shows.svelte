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
  import { LoggedIn, Paid, UserId, apiUrl } from "../logic/stores";

  let loggedIn = null;
  let paid = null;
  let userId = null;
  let api = null;
  $: data = null;

  LoggedIn.subscribe((value) => {
    loggedIn = value;
  });
  Paid.subscribe((value) => {
    paid = value;
  });
  apiUrl.subscribe((value) => {
    api = value;
  });
  UserId.subscribe((value) => {
    userId = value;
  });

  const body = JSON.stringify({
    id: userId,
  });

  const call = async () => {
    let result;
    await axios
      .post(`${api}/content/view.php`, body, {
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
  const res = call();
</script>

{#if loggedIn}
  <LayoutGrid>
    {#if data}
      {#each data as { title, desc, genres, language }}
        <Cell span={4}>
          <Card>
            <PrimaryAction
              on:click={() => {
                console.log(title, desc, genres);
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
                    >{#if paid}
                      Play
                    {:else}
                      Trailer
                    {/if}
                  </Label>
                </Button>
                <Button color="secondary" on:click={() => {}}>
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
    position: absolute;
    top: 70%;
    left: 50%;
    margin-right: -50%;
    width: 50%;
    height: 80%;
    transform: translate(-50%, -70%);
  }
</style>
