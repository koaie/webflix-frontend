<script>
  import { user } from "../logic/stores";
  import { goto } from "@roxi/routify";

  user.set(null);
  console.log($user);
  $goto("./");
</script>
