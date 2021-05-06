<script>
  import { API_URL, user, rememberMe } from "../../logic/stores";
  import axios from "axios";
  import { goto } from "@roxi/routify";

  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";
  import FormField from "@smui/form-field";
  import Checkbox from "@smui/checkbox";
  import Button, { Label } from "@smui/button";
  import Tooltip, { Wrapper } from "@smui/tooltip";

  let email = null;
  let password = null;
  let invalid = false;
  let body = null;
  let checkbox = false;

  $: {
    rememberMe.update((val) => checkbox);
  }
  const call = async () => {
    let result = await axios
      .post(`${$API_URL}/auth/login.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const login = async () => {
    body = JSON.stringify({
      email: email,
      password: password,
    });
    await call().then((res) => {
      user.update((val) => res);
    });
    if ($user.id) {
      $goto("/shows");
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
        bind:invalid
        bind:value={password}
        label="Password"
        input$autocomplete="password"
      >
        <Icon class="material-icons" slot="leadingIcon">password</Icon>
        <HelperText validationMsg slot="helper">Invalid password</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Wrapper>
        <FormField>
          <Checkbox bind:checked={checkbox} />
          <span type="Label"> Remember me </span>
        </FormField>
        <Tooltip>Remember me</Tooltip>
      </Wrapper>
    </Cell>

    <Cell span={6}>
      <div class="right">
        <Button
          on:click={() => {
            login();
          }}
          variant="outlined"
        >
          <Label>Login</Label>
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
