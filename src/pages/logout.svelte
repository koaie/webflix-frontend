<script>
  import {
    UserId,
    Surname,
    Name,
    Email,
    LoggedIn,
    Admin,
    Paid,
    CreatedAt,
  } from "../logic/stores";
  import { goto } from "@roxi/routify";

  UserId.update((val) => (val = null));
  Email.update((val) => (val = null));
  Name.update((val) => (val = null));
  Surname.update((val) => (val = null));
  Paid.update((val) => (val = null));
  Admin.update((val) => (val = null));
  CreatedAt.update((val) => (val = null));
  LoggedIn.update((val) => (val = false));
  $goto("./");
</script>
