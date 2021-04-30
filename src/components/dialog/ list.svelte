<script>
  import Dialog, { Title, Content } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text } from "@smui/list";

  export let open = false;
  export let title = "title";
  export let data = ["test", "test"];
  let clicked = null;
</script>

<Dialog
  bind:open
  selection
  aria-labelledby="list-title"
  aria-describedby="list-content"
>
  <Title id="list-title">{title}</Title>
  <Content id="list-content">
    <List>
      {#each [...data].map((v, i) => i) as text}
        <Item
          on:click={() => {
            clicked = text;
            open = false;
          }}
        >
          <Text>{text}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Dialog>
