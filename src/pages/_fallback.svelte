<script>
  import ActionCard from "../components/card/action.svelte";
  import { goto } from "@roxi/routify";
</script>

<ActionCard on:click={$goto(history.back)} />
