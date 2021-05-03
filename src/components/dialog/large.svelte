<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import Chip, { Set, Text } from "@smui/chips";
  import Paper, { Subtitle, Content as PaperContent } from "@smui/paper";
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
          {#if $content.trailer}
            <Content>
              <Plyr bind:player>
                <div class="plyr__video-embed">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <iframe
                    src="https://www.youtube.com/embed/{$content.trailer}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                  />
                </div>
              </Plyr>
            </Content>
          {/if}
          <Subtitle>{$content.desc}</Subtitle>
          <Content
            >Genres
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
          content.update((val) => 0);
          player = null;
        }}
      >
        <Label>{buttonText}</Label>
      </Button>
    </Actions>
  </Dialog>
{/if}
