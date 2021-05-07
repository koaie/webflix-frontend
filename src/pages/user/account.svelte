<script>
  import { API_URL, user } from "../../logic/stores";
  import { goto } from "@roxi/routify";
  import axios from "axios";

  import TopMenu from "../../components/layout/TopMenu.svelte";
  import ActionCard from "../../components/card/action.svelte";
  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";

  let password = null;
  let key = null;
  let body = null;
  let error;

  let errorText;

  $: {
    if ($user.error) {
      errorText = $user.error;
      error.open();
      console.log($user.error);
    }
  }

  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/user/security-edit.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const edit = async () => {
    body = JSON.stringify({
      id: $user.id,
      password: password,
      securityKey: key,
    });
    await call().then((res) => {
      if (res.status == "Updated details successfully") {
        $goto("/auth/logout");
      }
    });
  };
</script>

{#if $user.id}
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
  <TopMenu>
    <div class="container" id="form">
      <LayoutGrid>
        <Cell span={6}>
          <Textfield
            type="password"
            bind:value={password}
            label="Password"
            input$autocomplete="password"
            required
          >
            <Icon class="material-icons" slot="leadingIcon">password</Icon>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            updateInvalid
            bind:value={key}
            label="Security Key"
            required
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
          </Textfield>
        </Cell>
        <Cell span={12}>
          <div class="right">
            <Button
              width={120}
              variant="outlined"
              on:click={() => {
                edit();
              }}
            >
              <Label>Save</Label>
            </Button>
          </div>
        </Cell>
      </LayoutGrid>
    </div>
  </TopMenu>
{:else}
  <div class="card-container">
    <ActionCard
      on:click={$goto("/auth/login")}
      text="Whoops, you are not logged in!"
      icon="login"
      action="Login"
    />
  </div>{/if}

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
    border-radius: 0rem 0rem 0.4rem 0.4rem;
  }
  .right {
    float: right;
  }
</style>
