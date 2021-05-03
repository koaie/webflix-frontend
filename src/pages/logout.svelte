<script>
  import { user, logout } from "../logic/stores";
  import { redirect } from "@roxi/routify";

  logout.update((val) => true);
  user.set(0);
  $redirect("/");
</script>
