<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { apiUrl } from "./logic/stores";

  let url = "https://koala.stream";

  apiUrl.update((val) => (val = url));
</script>

<style  global>
  @import "../assets/global.css";
</style>

<Router {routes} />