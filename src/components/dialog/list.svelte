<script>
  import { goto } from "@roxi/routify";
  import { content, episodes } from "../../logic/stores";

  import Dialog, { Title, Content } from "@smui/dialog";
  import List, { Item, Text, PrimaryText, SecondaryText } from "@smui/list";

  export let open = false;
</script>

{#if $episodes}
  <Dialog
    bind:open
    selection
    aria-labelledby="list-title"
    aria-describedby="list-content"
  >
    <Title id="list-title">{$content.title}</Title>
    <Content id="list-content">
      <div id="list">
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
      </div>
    </Content>
  </Dialog>
{/if}
