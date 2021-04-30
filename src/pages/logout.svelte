<script>
  import { user } from "../logic/stores";
  import { redirect } from "@roxi/routify";

  console.log($user);
  user.set(0);
  console.log($user);
  $redirect("/");
</script>
