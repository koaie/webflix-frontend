<script>
  import { API_URL, user } from "../../logic/stores";
  import axios from "axios";

  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import { goto } from "@roxi/routify";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";
  import FormField from "@smui/form-field";
  import Switch from "@smui/switch";
  import Button, { Label } from "@smui/button";

  let email = null;
  let password = null;
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
      .post(`${$API_URL}/auth/signup.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const register = async () => {
    body = JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
      dob: dob,
      country: country,
      phoneNumber: phone,
      securityKey: key,
    });
    await call().then((res) => {
      user.update((val) => res);
    });
    if ($user.id) {
      $goto("/feed/shows");
    }
    if ($user.error) {
      error.open();
      console.log($user.error);
    }
  };
</script>

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
        required
      >
        <Icon class="material-icons" slot="leadingIcon">email</Icon>
        <HelperText validationMsg slot="helper">Invalid email</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="password"
        bind:invalid
        updateInvalid
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
        bind:invalid
        updateInvalid
        bind:value={name}
        label="First name"
        required
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
        required
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
        required
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
        required
      >
        <Icon class="material-icons" slot="leadingIcon">phone</Icon>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={key}
        label="Security key"
        required
      >
        <Icon class="material-icons" slot="leadingIcon">lock</Icon>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={country}
        label="Country"
        required
      >
        <Icon class="material-icons" slot="leadingIcon">place</Icon>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <FormField>
        <Switch color="primary" bind:checked={agree} required />
        <span slot="label">I agree to the T.O.S</span>
      </FormField>
    </Cell>
    <Cell span={6}>
      <div class="right">
        <Button
          width={120}
          variant="outlined"
          on:click={() => {
            if (agree) {
              if (
                email &&
                password &&
                name &&
                surname &&
                dob &&
                country &&
                phone &&
                key
              ) {
                register();
              } else {
                errorText = "Incorrect or missing arguments!";
                error.open();
              }
            } else {
              errorText = "You have to agree to the Terms of Service!";
              error.open();
            }
          }}
        >
          <Label>Register</Label>
        </Button>
      </div>
    </Cell>
  </LayoutGrid>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #232324;
    border-radius: 1rem;
  }
  .right {
    float: right;
  }
</style>
