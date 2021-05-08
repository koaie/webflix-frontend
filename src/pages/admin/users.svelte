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

  import ActionCard from "../../compo∫nents/card/action.svelte";
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
  let _user;
  let viewMenu;

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

  $: {
    if (dob) {
      if (dob.match(dateRegex)) {
        invalidDate = false;
      } else {
        invalidDate = true;
      }
    }
  }

  const view = async () => {
    let result = await axios
      .post(
        `${$API_URL}/admin/users/view.php`,
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
          name: name ? name : obj.name,
          surname: surname ? surname : obj.surname,
          dob: dob ? dob : obj.dob,
          country: country ? country : obj.country,
          phoneNumber: phone ? phone : obj.phoneNumber,
          password: password ? password : obj.password,
          securityKey: key ? key : obj.securityKey,
          status: obj.status,
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

{#if _user}
  <Dialog
    title="View"
    open={viewMenu}
    on:click={() => {
      viewMenu = false;
    }}
    buttonText="Done"
  >
    <Head>
      <Row>
        <Cell>Email</Cell>
        <Cell>{_user.email}</Cell>
      </Row>
      <Row>
        <Cell>Name</Cell>
        <Cell>{_user.name}</Cell>
      </Row>
      <Row>
        <Cell>Surname</Cell>
        <Cell>{_user.surname}</Cell>
      </Row>
      <Row>
        <Cell>Date of Birth</Cell>
        <Cell>{_user.dob}</Cell>
      </Row>
      <Row>
        <Cell>Country</Cell>
        <Cell>{_user.country}</Cell>
      </Row>
      <Row>
        <Cell>Paid At</Cell>
        <Cell>{_user.paidAt}</Cell>
      </Row>
      <Row>
        <Cell>Admin</Cell>
        <Cell>{_user.admin}</Cell>
      </Row>
    </Head>
  </Dialog>
{/if}

<Dialog
  title="Edit"
  {open}
  on:click={() => {
    if (password && _user) {
      edit(_user);
    }
    open = false;
  }}
  buttonText="Save"
>
  {#if _user}
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
{#await view() then users}
  {#if $user.id}
    <div class="container" id="profile">
      <DataTable style="max-width: 100%;">
        <Head>
          <Row>
            <Cell>Email</Cell>
            <Cell>View</Cell>
            <Cell>Edit</Cell>
            <Cell>Remove</Cell>
          </Row>
        </Head>
        <Body>
          {#each data as user}
            <Row>
              <Cell>{user.email}</Cell>
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _user = user;
                    viewMenu = false;
                    viewMenu = true;
                  }}>person</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _user = user;
                    open = false;
                    open = true;
                  }}>edit</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={async () => await del(user.id)}>delete</IconButton
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
