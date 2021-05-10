<script>
  import { API_URL, user } from "../../logic/stores";
  import { goto } from "@roxi/routify";
  import axios from "axios";

  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import Paper, { Subtitle, Content as PaperContent } from "@smui/paper";
  import Chip, { Set, Text } from "@smui/chips";
  import { Content } from "@smui/dialog";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import LayoutGrid, { Cell as GridCell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";

  import ActionCard from "../../components/card/action.svelte";
  import Dialog from "../../components/dialog/form.svelte";

  let date;
  let email = null;
  let invalid = false;
  const dateRegex = /(201[0-7]|200[0-9]|[0-1][0-9]{3})[-.\/](1[0-2]|0[1-9])[-.\/](3[01]|[0-2][1-9]|[12]0)/;
  const contentRegex = /([\w-]{36}):(\d+)@([\w-]{36}):(\d+)/;
  let invalidDate = false;

  let data;
  let _seasons;
  let _episodes;
  let _content;
  let _genres;
  let genres;

  let viewMenu;
  let editMenu;

  let error;
  let errorText;

  $: {
    if (_content) {
      if (_content.genres) {
        _genres = _content.genres.split(",").map((el) => {
          const res = el.match(/(.+):(.+)/);
          return {
            id: res[1],
            name: res[2],
          };
        });
        genres = _content.genres.split(",").map((el) => {
          const res = el.match(/(.+):(.+)/);
          return res[2];
        });
      }
      if (_content.data) {
        _episodes = _content.data.split(",").map((el) => {
          const res = el.match(contentRegex);
          return {
            episodeId: res[1],
            episode: res[3],
            season: res[4],
            duration: res[2],
          };
        });
        console.log(_episodes);
      }
    }
  }

  function setData(x) {
    data = x;
    return data;
  }

  $: {
    if ($user.error) {
      errorText = $user.error;
      error.open();
      console.log($user.error);
    }
  }

  $: {
    if (date) {
      if (date.match(dateRegex)) {
        invalidDate = false;
      } else {
        invalidDate = true;
      }
    }
  }

  const link = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const unlink = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const addContent = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const addSeason = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const editSeason = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const removeSeason = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const addEpisode = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const editEpisode = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const removeEpisode = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const view = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const del = async (contentId) => {
    let res = await axios.post(
      `${$API_URL}/admin/content/remove.php`,
      JSON.stringify({
        id: $user.id,
        contentId: contentId,
      }),
      {
        "Content-type": "application/json",
      }
    );
    view();
    return res.data;
  };

  const edit = async (obj) => {
    let res = await axios
      .post(
        `${$API_URL}/admin/users/edit.php`,
        JSON.stringify({
          id: $user.id,
          userId: obj.id,
          email: email ? email : obj.email,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    view();
    return res.data;
  };
</script>

{#if _content}
  <Dialog
    title="View"
    open={viewMenu}
    on:click={() => {
      viewMenu = false;
    }}
    buttonText="Done"
  >
    <div class="paper">
      <Paper>
        Title
        <Content>
          <Subtitle>{_content.title}</Subtitle></Content
        >
        Fescription
        <Content>
          <Subtitle>{_content.desc}</Subtitle></Content
        >
        Type
        <Content>
          <Subtitle>{_content.type}</Subtitle></Content
        >
        Genres
        <Content>
          {#if genres}
            <Set chips={genres} let:chip nonInteractive>
              <Chip {chip}>
                <Text>{chip}</Text>
              </Chip>
            </Set>
          {/if}
        </Content>
        <PaperContent>
          Released
          <Content>
            <PaperContent><Text>{_content.release}</Text></PaperContent>
          </Content>
        </PaperContent>
      </Paper>
    </div>
  </Dialog>
{/if}

<Dialog
  title="Edit"
  open={editMenu}
  on:click={() => {
    if (_content) {
      edit(_content);
    }
    editMenu = false;
  }}
  buttonText="Save"
>
  {#if _content}
    <div id="form">
      <LayoutGrid>
        <GridCell span={6}>
          <Textfield
            type="email"
            bind:invalid
            updateInvalid
            bind:value={email}
            label="Email"
            input$autocomplete="email"
          >
            <Icon class="material-icons" slot="leadingIcon">email</Icon>
            <HelperText validationMsg slot="helper">Invalid email</HelperText>
          </Textfield>
        </GridCell>
      </LayoutGrid>
    </div>
  {/if}
</Dialog>

{#if errorText}
  <Snackbar bind:this={error}>
    <LabelSnack>
      {errorText}</LabelSnack
    >
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
  </Snackbar>
{/if}
{#await view() then result}
  {#if $user.id}
    <div class="container" id="profile">
      <DataTable style="max-width: 100%;">
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell>View</Cell>
            <Cell>Edit</Cell>
            <Cell>Remove</Cell>
          </Row>
        </Head>
        <Body>
          {#each data as content}
            <Row>
              <Cell>{content.title}</Cell>
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _content = content;
                    viewMenu = false;
                    viewMenu = true;
                  }}>person</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _content = content;
                    editMenu = false;
                    editMenu = true;
                  }}>edit</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={async () => await del(_content.contentId)}
                  >delete</IconButton
                ></Cell
              >
            </Row>
          {/each}
        </Body>
      </DataTable>
    </div>
  {:else}
    <div class="card-container">
      <ActionCard
        on:click={$goto("/auth/login")}
        text="Whoops, you are not logged in!"
        icon="login"
        action="Login"
      />
    </div>{/if}
{/await}

<style>
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #232324;
    border-radius: 0.4rem;
  }
</style>
