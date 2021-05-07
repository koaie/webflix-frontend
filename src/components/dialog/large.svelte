<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import Chip, { Set, Text } from "@smui/chips";
  import YoutubePlyr from "../player/YoutubePlyr.svelte"
  import Paper, {
    Title as PaperTitle,
    Subtitle,
    Content as PaperContent,
  } from "@smui/paper";
  import { content } from "../../logic/stores";
  import Button, { Label } from "@smui/button";
  import { Plyr } from "svelte-plyr-fixed";
  let player;
  export let open = false;
  export let buttonText = "Done";
  
  let genres;
  let id;
  $: {
    if ($content.genres) {
      genres = $content.genres.split(",");
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
          player = null;
        }}
      >
        <Label>{buttonText}</Label>
      </Button>
    </Actions>
  </Dialog>
{/if}