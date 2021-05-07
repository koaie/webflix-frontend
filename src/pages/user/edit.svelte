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
  import HelperText from "@smui/textfield/helper-text/index";
  import Button, { Label } from "@smui/button";

  let email = null;
  let name = null;
  let surname = null;
  let dob = null;
  let country = null;
  let phone = null;
  let key = null;
  let agree = false;
  let invalid = false;
  let body = null;
  let error;
  let dateRegex = /(201[0-7]|200[0-9]|[0-1][0-9]{3})[-.\/](1[0-2]|0[1-9])[-.\/](3[01]|[0-2][1-9]|[12]0)/;
  let invalidDate = false;

  let errorText;

  $: {
    if ($user.error) {
      errorText = $user.error;
      error.open();
      console.log($user.error);
    }
  }

  $: {
    if (dob) {
      if (dob.match(dateRegex)) {
        invalidDate = false;
      } else {
        invalidDate = true;
      }
    }
  }

  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/user/edit.php`, body, {
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
      email: email ? email : $user.email,
      name: name ? name : $user.name,
      surname: surname ? surname : $user.surname,
      dob: dob ? dob : $user.dob,
      country: country ? country : $user.country,
      phoneNumber: phone ? phone : $user.phoneNumber,
    });
    await call().then(() => {
      $goto("/auth/logout");
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
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={name}
            label="First name"
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={surname}
            label="Last name"
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            bind:invalid={invalidDate}
            bind:value={dob}
            label="Date of birth"
          >
            <Icon class="material-icons" slot="leadingIcon">today</Icon>
            <HelperText slot="helper">yyyy-mm-dd</HelperText>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={phone}
            label="Phone number"
          >
            <Icon class="material-icons" slot="leadingIcon">phone</Icon>
          </Textfield>
        </Cell>
        <Cell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={country}
            label="Country"
          >
            <Icon class="material-icons" slot="leadingIcon">place</Icon>
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
