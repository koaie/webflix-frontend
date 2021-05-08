<!--
!TODO

ui
view users
edit users
delete users

api
view users
edit users
delete users
-->
<script>
  import { API_URL, user, users } from "../../logic/stores";
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

  let email = null;
  let name = null;
  let surname = null;
  let dob = null;
  let country = null;
  let phone = null;
  let password = null;
  let key = null;
  let invalid = false;
  let dateRegex = /(201[0-7]|200[0-9]|[0-1][0-9]{3})[-.\/](1[0-2]|0[1-9])[-.\/](3[01]|[0-2][1-9]|[12]0)/;
  let invalidDate = false;
  let open = false;
  let data;
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
      .post(`${$API_URL}/admin/users/view.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const view = async () => {
    body = JSON.stringify({
      id: $user.id,
    });
    let res = await call();
    users.update((val) => res);
  };
  if ($user.admin) {
    view();
  }

  const del = async (userId) => {
    let res = await axios.post(
      `${$API_URL}/admin/users/remove.php`,
      JSON.stringify({
        id: $user.id,
        userId: userId,
      }),
      {
        "Content-type": "application/json",
      }
    );
    view();
  };

  const editCall = async () => {
    let result = await axios
      .post(`${$API_URL}/admin/users/edit.php`, body, {
        "Content-type": "application/json",
      })
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const edit = async (obj) => {
    body = JSON.stringify({
      id: $user.id,
      userId: obj.id,
      email: email ? email : obj.email,
      name: name ? name : obj.name,
      surname: surname ? surname : obj.surname,
      dob: dob ? dob : obj.dob,
      country: country ? country : obj.country,
      phoneNumber: phone ? phone : obj.phoneNumber,
      password: password ? password : obj.password,
      securityKey: key ? key : obj.securityKey,
      status: obj.status,
    });
    await editCall();
    view();
  };
</script>

<Dialog
  title="Edit"
  {open}
  on:click={() => {
    if (password && data) {
      edit(data);
    }
    open = false;
  }}
  buttonText="Save"
>
  {#if data}
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
        <GridCell span={6}>
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
          </Textfield></GridCell
        >
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={name}
            label="First name"
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
          </Textfield>
        </GridCell>
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={surname}
            label="Last name"
          >
            <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
          </Textfield>
        </GridCell>
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid={invalidDate}
            bind:value={dob}
            label="Date of birth"
          >
            <Icon class="material-icons" slot="leadingIcon">today</Icon>
            <HelperText slot="helper">yyyy-mm-dd</HelperText>
          </Textfield>
        </GridCell>
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={phone}
            label="Phone number"
          >
            <Icon class="material-icons" slot="leadingIcon">phone</Icon>
          </Textfield>
        </GridCell>
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={key}
            label="Security key"
          >
            <Icon class="material-icons" slot="leadingIcon">lock</Icon>
          </Textfield>
        </GridCell>
        <GridCell span={6}>
          <Textfield
            type="text"
            bind:invalid
            updateInvalid
            bind:value={country}
            label="Country"
          >
            <Icon class="material-icons" slot="leadingIcon">place</Icon>
          </Textfield>
        </GridCell>
      </LayoutGrid>
    </div>
  {/if}
</Dialog>

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
  {#if $users}
    <div class="container" id="profile">
      <DataTable style="max-width: 100%;">
        <Head>
          <Row>
            <Cell>Name</Cell>
            <Cell>Surname</Cell>
            <Cell>Email</Cell>
            <Cell>Birth Date</Cell>
            <Cell>Country</Cell>
            <Cell>Phone numbers</Cell>
            <Cell>Created At</Cell>
            <Cell>Paid At</Cell>
            <Cell>Admin</Cell>
            <Cell>Edit</Cell>
            <Cell>Remove</Cell>
          </Row>
        </Head>
        <Body>
          {#each $users as user}
            <Row>
              <Cell>{user.name}</Cell>
              <Cell>{user.surname}</Cell>
              <Cell>{user.email}</Cell>
              <Cell>{user.dob}</Cell>
              <Cell>{user.country}</Cell>
              <Cell>{user.phoneNumber}</Cell>
              <Cell>{user.createdAt}</Cell>
              <Cell>{user.paidAt}</Cell>
              <Cell>{user.admin}</Cell>
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    data = user;
                    open = false;
                    open = true;
                  }}>edit</IconButton
                ></Cell
              >
              <Cell>
                <IconButton class="material-icons" on:click={() => del(user.id)}
                  >delete</IconButton
                ></Cell
              >
            </Row>
          {/each}
        </Body>
      </DataTable>
    </div>
  {/if}
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
    border-radius: 0.4rem;
  }
</style>
