<script>
  import { goto } from "@roxi/routify";
  import Dialog, { Title, Content } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, PrimaryText, SecondaryText } from "@smui/list";
  import { content, episodes } from "../../logic/stores";
  export let open = false;
</script>

<Dialog
  bind:open
  selection
  aria-labelledby="list-title"
  aria-describedby="list-content"
>
  <Title id="list-title">{$content.title}</Title>
  <Content id="list-content">
    <List>
      {#each $episodes as { episode, season, episodeId, duration }}
        <Item
          on:SMUI:action={() => {
            open = false;
            $goto(`./watch?id=${episodeId}`);
          }}
        >
          <Text>
            <PrimaryText>Episode: {episode}</PrimaryText>
            <SecondaryText>season: {season}</SecondaryText>
          </Text>
        </Item>
      {/each}
    </List>
  </Content>
</Dialog>
