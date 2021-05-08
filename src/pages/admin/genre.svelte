<script>
  import { API_URL, user } from "../../logic/stores";
  import { goto } from "@roxi/routify";
  import axios from "axios";

  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import LayoutGrid, { Cell as GridCell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";

  import ActionCard from "../../components/card/action.svelte";
  import Dialog from "../../components/dialog/form.svelte";

  let name = null;
  let editMenu = false;
  let addMenu = false;
  let invalid = false;
  let data;
  let _genre;

  let error;
  let errorText;

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

  const view = async () => {
    let result = await axios
      .post(
        `${$API_URL}/genre/view.php`,
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

  const del = async (genreId) => {
    let res = await axios.post(
      `${$API_URL}/admin/genre/remove.php`,
      JSON.stringify({
        id: $user.id,
        genreId: genreId,
      }),
      {
        "Content-type": "application/json",
      }
    );
    view();
    console.log(res);
    return res.data;
  };

  const add = async (name) => {
    let res = await axios.post(
      `${$API_URL}/admin/genre/add.php`,
      JSON.stringify({
        id: $user.id,
        name: name,
      }),
      {
        "Content-type": "application/json",
      }
    );
    view();
    return res.data;
  };

  const edit = async (genre) => {
    let res = await axios
      .post(
        `${$API_URL}/admin/genre/edit.php`,
        JSON.stringify({
          id: $user.id,
          genreId: genre.genreId,
          name: name,
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

<Dialog
  title="Edit"
  open={editMenu}
  on:click={() => {
    if (name && _genre) {
      edit(_genre);
    }
    editMenu = false;
  }}
  buttonText="Save"
>
  {#if _genre}
    <div id="form">
      <!-- <LayoutGrid>
        <GridCell span={6}> -->
      <Textfield type="text" bind:invalid bind:value={name} label="name">
        <Icon class="material-icons" slot="leadingIcon">badge</Icon>
      </Textfield>
      <!-- </GridCell>
      </LayoutGrid> -->
    </div>
  {/if}
</Dialog>

<Dialog
  title="Add"
  open={addMenu}
  on:click={() => {
    if (name) {
      add(name);
    }
    addMenu = false;
  }}
  buttonText="Add"
>
  <div id="form">
    <Textfield type="text" bind:invalid bind:value={name} label="name">
      <Icon class="material-icons" slot="leadingIcon">badge</Icon>
    </Textfield>
  </div>
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
{#await view() then genres}
  {#if $user.id}
    <div class="container" id="profile">
      <DataTable style="max-width: 100%;">
        <Head>
          <Row>
            <Cell>Name</Cell>
            <Cell>Edit</Cell>
            <Cell>Remove</Cell>
          </Row>
        </Head>
        <Body>
          {#each data as genre}
            <Row>
              <Cell>{genre.name}</Cell>
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _genre = genre;
                    editMenu = false;
                    editMenu = true;
                  }}>edit</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={async () => await del(genre.genreId)}
                  >delete</IconButton
                ></Cell
              >
            </Row>
          {/each}
        </Body>
      </DataTable>
    </div>
    <div class="right">
      <IconButton
        class="material-icons"
        on:click={() => {
          name = null;
          addMenu = false;
          addMenu = true;
        }}>add</IconButton
      >
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
  .right {
    float: right;
  }
</style>
