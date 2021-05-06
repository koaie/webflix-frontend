<script>
  import { loadScript } from "@paypal/paypal-js";
  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import ActionCard from "../../components/card/action.svelte";
  import IconButton from "@smui/icon-button";
  import { API_URL, user } from "../../logic/stores";
  import axios from "axios";
  import { goto } from "@roxi/routify";

  let errorText;
  let error;
  let body;
  if ($user.id) {
    if ($user.paid) {
      errorText = "You are already subscribed";
      error = true;
    } else {
      const call = async () => {
        let result = await axios
          .post(`${$API_URL}/auth/payment.php`, body, {
            "Content-type": "application/json",
          })
          .catch((err) => {
            console.log(err);
          });
        return result.data;
      };

      const paid = async () => {
        body = JSON.stringify({
          id: $user.id,
        });
        await call().then((res) => {
          if (res.id) {
            user.update((val) => {
              val.paid = true;
              return val;
            });
            $goto("./shows");
          }
          if (res.error) {
            errorText = res.error;
            error = true;
          }
        });
      };

      const CLIENT_ID =
        "ASo51rJYa2auckprmMGuI5693w5NgojJ8LzV7A2-8m_sSBYO8tY9DBbqJbJZ3PJqu0ewvcsBh6qsowTv";
      loadScript({ "client-id": CLIENT_ID, currency: "GBP" }).then((paypal) => {
        paypal
          .Buttons({
            style: {
              color: "blue",
              shape: "pill",
            },
            createOrder: function (data, actions) {
              // Set up the transaction
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "GBP",
                      value: "99",
                    },
                    description: "Webflix Premium",
                    custom_id: "64735",
                  },
                ],
              });
            },
            onApprove: function (data, actions) {
              // Capture order after payment approved
              return actions.order.capture().then(function (details) {
                paid();
              });
            },
            onError: function (err) {
              errorText = err;
              error = true;
            },
          })
          .render("#paypal-button-container");
      });
    }
  }
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

{#if $user.id}
  <div id="paypal-button-container" />
{:else}
  <div class="container">
    <ActionCard
      text="Whoops, you are not logged in!"
      icon="login"
      direct="./login"
      action="Login"
    />
  </div>
{/if}

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  #paypal-button-container {
    margin: 30px 0;
  }
</style>
