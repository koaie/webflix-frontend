<script>
  import { user } from "../logic/stores";
  import { goto } from "@roxi/routify";

  import Card, { Content, Media, MediaContent } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Paper, { Title } from "@smui/paper";
  import Fab, { Icon } from "@smui/fab";

  if ($user.paid) {
    $goto("/feed/shows");
  } else if ($user.id) {
    $goto("/premium/index");
  }
</script>

<div id="index">
  <LayoutGrid>
    <Cell span={12}>
      <Paper>
        <div class="flexCentered">
          <div class="title">Webflix</div>
          <Title>Basic</Title>
        </div>
        <div class="text flexXCentered">
          Improve your content consumption experince and join us today.
        </div>
      </Paper>
    </Cell>
    <Cell span={12}>
      <div class="flexCentered">
        <Button on:click={() => $goto("/auth/login")} variant="raised">
          <Label>Join Webflix</Label>
        </Button>
      </div>
    </Cell>
    <Cell span={4}>
      <Card>
        <Media aspectRatio="16x9">
          <MediaContent>
            <div class="flexCentered">
              <Fab color="primary" ripple={false}>
                <Icon class="material-icons">devices</Icon>
              </Fab>
            </div>
          </MediaContent>
        </Media>
        <Content>Watch all of your favorite content, on any device.</Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Card>
        <Media aspectRatio="16x9">
          <MediaContent>
            <div class="flexCentered">
              <Fab color="primary" ripple={false}>
                <Icon class="material-icons">timer</Icon>
              </Fab>
            </div>
          </MediaContent>
        </Media>
        <Content>Enjoy unlimited, 24/7 buffer-less streaming.</Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Card>
        <Media aspectRatio="16x9">
          <MediaContent>
            <div class="flexCentered">
              <Fab color="primary" ripple={false}>
                <Icon class="material-icons">favorite_border</Icon>
              </Fab>
            </div>
          </MediaContent>
        </Media>
        <Content>Support us for more content.</Content>
      </Card>
    </Cell>
  </LayoutGrid>
</div>
