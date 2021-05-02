<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text/index";
  import FormField from "@smui/form-field";
  import Checkbox from "@smui/checkbox";
  import Switch from "@smui/switch";
  import Button, { Label } from "@smui/button";

  let email = null;
  let value = null;
  let agree = false;
  let invalid = false;
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
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="First name"
      >
        <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Last name"
      >
        <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Date of birth"
      >
        <Icon class="material-icons" slot="leadingIcon">today</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Phone number"
      >
        <Icon class="material-icons" slot="leadingIcon">phone</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Security key"
      >
        <Icon class="material-icons" slot="leadingIcon">lock</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <Textfield
        type="text"
        bind:invalid
        updateInvalid
        bind:value={email}
        label="Country"
      >
        <Icon class="material-icons" slot="leadingIcon">place</Icon>
        <HelperText validationMsg slot="helper">Helper Text</HelperText>
      </Textfield>
    </Cell>
    <Cell span={6}>
      <FormField>
        <Switch color="primary" bind:checked={agree} />
        <span slot="label">I agree to the T.O.S</span>
      </FormField>
    </Cell>
    <Cell span={6}>
      <div class="right">
        <Button width={120} variant="outlined">
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
