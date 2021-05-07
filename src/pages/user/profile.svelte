<script>
  import { user } from "../../logic/stores";
  import { goto } from "@roxi/routify";

  import TopMenu from "../../components/layout/TopMenu.svelte";
  import ActionCard from "../../components/card/action.svelte";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

</script>

{#if $user.id}
  <TopMenu>
    <div class="container" id="profile">
      <DataTable>
        <Head>
          <Row>
            <Cell>Email</Cell>
            <Cell>{$user.email}</Cell>
          </Row>
          <Row>
            <Cell>Name</Cell>
            <Cell>{$user.name}</Cell>
          </Row>
          <Row>
            <Cell>Surname</Cell>
            <Cell>{$user.surname}</Cell>
          </Row>
          <Row>
            <Cell>Date of Birth</Cell>
            <Cell>{$user.dob}</Cell>
          </Row>
          <Row>
            <Cell>Country</Cell>
            <Cell>{$user.country}</Cell>
          </Row>
          <Row>
            <Cell>Paid</Cell>
            <Cell>{$user.paid}</Cell>
          </Row>
        </Head>
      </DataTable>
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
    padding: 1.5rem;
    border-radius: 0rem 0rem 0.4rem 0.4rem;
  }
</style>
