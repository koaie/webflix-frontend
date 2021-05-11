<script>
  import { content } from "../../logic/stores";

  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import Chip, { Set, Text } from "@smui/chips";
  import Paper, { Subtitle, Content as PaperContent } from "@smui/paper";
  import Button, { Label } from "@smui/button";

  import YoutubePlyr from "../player/YoutubePlyr.svelte";

  export let open = false;
  export let buttonText = "Done";

  let genres;
  $: {
    if ($content.genres) {
      genres = $content.genres.split(",").map((el) => {
        const res = el.match(/(.+):(.+)/);
        return res[2];
      });
    }
  }
</script>

{#if open}
  <Dialog
    bind:open
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
  >
    <Header>
      <Title id="fullscreen-title">{$content.title}</Title>
    </Header>
    <Content id="fullscreen-content">
      <div class="paper">
        <Paper>
          <PaperContent>
            {#if $content.trailer}
              <YoutubePlyr id={$content.trailer} />
            {/if}
          </PaperContent>

          <Content>
            <Subtitle>{$content.desc}</Subtitle></Content
          >
          <Content>
            Genres
            <Set chips={genres} let:chip nonInteractive>
              <Chip {chip}>
                <Text>{chip}</Text>
              </Chip>
            </Set>
          </Content>
          <PaperContent>
            <Content
              >Released
              <PaperContent><Text>{$content.release}</Text></PaperContent>
            </Content>
          </PaperContent>
        </Paper>
      </div>
    </Content>
    <Actions>
      <Button
        action="accept"
        on:click={() => {
          open = false;
        }}
      >
        <Label>{buttonText}</Label>
      </Button>
    </Actions>
  </Dialog>
{/if}
