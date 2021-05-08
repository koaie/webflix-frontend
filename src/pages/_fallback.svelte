<script>
  import { goto } from "@roxi/routify";

  import ActionCard from "../components/card/action.svelte";
</script>

<ActionCard on:click={$goto(history.back)} />
