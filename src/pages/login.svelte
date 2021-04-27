<script>
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
  let rememberMe = false;
  let invalid = false;
</script>

<div class="container">
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
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="password"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Password"
        input$autocomplete="password"
      >
        <Icon class="material-icons" slot="leadingIcon">email</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Wrapper>
        <FormField>
          <Checkbox bind:rememberMe />
          <span type="Label">
            Remember me
          </span>
        </FormField>
        <Tooltip>Remember me</Tooltip>
      </Wrapper>
    </Cell>

    <Cell span={4}>
      <div class="right">
        <Button color="secondary" variant="outlined">
          <Label>Login</Label>
        </Button>
      </div>
    </Cell>
  </LayoutGrid>
</div>

<style>
  .container {
    margin: 0;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-right: -50%;
    background-color: #232324;
    border-radius: 1rem;
    transform: translate(-50%, -15%);
  }
  .right {
    position: absolute;
    right: 1.5rem;
    bottom: 2rem;
  }
</style>
