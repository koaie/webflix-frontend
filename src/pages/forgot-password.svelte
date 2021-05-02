<script>
  import { API_URL, user } from "../logic/stores";
  import axios from "axios";
  import { goto } from "@roxi/routify";

  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";
  import Button, { Label } from "@smui/button";

  let email = null;
  let password = null;
  let rememberMe = false;
  let invalid = false;
  let body = null;
  let lock = null;

  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/auth/forgot-password.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const recover = async () => {
    body = JSON.stringify({
      email: email,
      password: password,
      securityKey: lock,
    });
    await call().then((res) => {
      user.update((val) => res);
    });
    if ($user.result == "password updated sucessfully") {
      $goto("./login");
    }
    if ($user.error) {
      invalid = true;
    }
  };
</script>

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
        type="password"
        bind:value={password}
        label="Password"
        input$autocomplete="password"
      >
        <Icon class="material-icons" slot="leadingIcon">password</Icon>
        <HelperText validationMsg slot="helper">Invalid password</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield type="text" bind:value={lock} label="Security key">
        <Icon class="material-icons" slot="leadingIcon">lock</Icon>
        <HelperText validationMsg slot="helper">Invalid key or email</HelperText
        >
      </Textfield>
    </Cell>
    <Cell span={6}>
      <div class="right">
        <Button
          on:click={() => {
            recover();
          }}
          variant="outlined"
        >
          <Label>Recover</Label>
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
