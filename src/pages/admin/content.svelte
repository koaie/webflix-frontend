<script>
  import { API_URL, content, user } from "../../logic/stores";
  import { goto } from "@roxi/routify";
  import axios from "axios";

  import Snackbar, { Actions, Label as LabelSnack } from "@smui/snackbar";
  import IconButton from "@smui/icon-button";
  import Paper, { Subtitle, Content as PaperContent } from "@smui/paper";
  import Chip, { Set as ChipSet, Text } from "@smui/chips";
  import { Content } from "@smui/dialog";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import Select, { Option } from "@smui/select";
  import Button, { Label as ButLabel } from "@smui/button";

  import LayoutGrid, { Cell as GridCell } from "@smui/layout-grid";

  import Textfield from "@smui/textfield";

  import ActionCard from "../../components/card/action.svelte";
  import Dialog from "../../components/dialog/form.svelte";

  import { clickOutside } from "../../components/layout/Outside.js";

  let title = null;
  let desc = null;
  let cover = null;
  let language = null;
  let trailer = null;
  let date = null;
  let email = null;
  let type = null;
  let invalid = false;
  const dateRegex =
    /(201[0-7]|200[0-9]|[0-1][0-9]{3})[-.\/](1[0-2]|0[1-9])[-.\/](3[01]|[0-2][1-9]|[12]0)/;
  const contentRegex = /([\w-]{36}):(\d+)@([\w-]{36}):(\d+)/;
  let invalidDate = false;
  let number = null;
  let dropbox = null;
  let selected = [];
  let mode = true;

  let data;
  const _seasons = new Map();
  let seasons;
  let _season;
  let _episode;
  let _episodes;
  let _content;
  let _genres;
  let genres;
  let path = null;

  let viewMenu;
  let seasonMenu;
  let editMenu;
  let deleteEpisode;
  let deleteSeason;
  let showEpisode = false;
  let showSeason = false;
  let showEditEpisode = false;
  let contentMenu = false;
  let error;
  let errorText;

  $: {
    if (mode) {
      title = null;
      desc = null;
      cover = null;
      language = null;
      trailer = null;
      date = null;
      email = null;
      type = null;
    }
  }

  $: {
    if (_content) {
      if (_content.genres) {
        _genres = _content.genres.split(",").map((el) => {
          const res = el.match(/(.+):(.+)/);
          return {
            id: res[1],
            name: res[2],
          };
        });
        genres = _content.genres.split(",").map((el) => {
          const res = el.match(/(.+):(.+)/);
          return res[2];
        });
      }
    }
  }

  $: {
    if (_content) {
      if (_content.data) {
        _episodes = _content.data.split(",").map((el) => {
          const res = el.match(contentRegex);
          return {
            episodeId: res[1],
            episode: res[2],
            seasonId: res[3],
            season: res[4],
          };
        });
      } else {
        _episodes = [];
      }
    }
  }

  $: {
    if (deleteEpisode) {
      _episodes = _episodes.filter(
        (episode) => episode.episodeId != deleteEpisode.episodeId
      );
      _content.data = _content.data
        .split(",")
        .filter(
          (episode) => episode.match(contentRegex)[1] != deleteEpisode.episodeId
        )
        .join(",");
      deleteEpisode = null;
    }
  }

  $: {
    if (seasons) {
      seasons = seasons.sort((a, b) => (a.number > b.number ? 1 : -1));
    }
  }

  $: {
    if (_episodes) {
      _episodes = _episodes.sort((a, b) => (a.episode > b.episode ? 1 : -1));
    }
  }

  $: {
    if (deleteSeason) {
      seasons = seasons.filter(
        (season) => season.seasonId != deleteSeason.seasonId
      );
      deleteSeason = null;
    }
  }

  function setSeasons(x) {
    seasons = x;
    return seasons;
  }

  function setEpisodes(x) {
    _episodes = x;
    return seasons;
  }

  function setData(x) {
    data = x;
    return data;
  }

  $: {
    if ($user.error) {
      errorText = $user.error;
      error.open();
      console.log($user.error);
    }
  }

  $: {
    if (date) {
      if (date.match(dateRegex)) {
        invalidDate = false;
      } else {
        invalidDate = true;
      }
    }
  }

  const view = async () => {
    let result = await axios
      .post(
        `${$API_URL}/content/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setData(result.data);
    return result.data;
  };

  const link = async (contentId, genreId) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/genre/link.php`,
        JSON.stringify({
          id: $user.id,
          genreId: genreId,
          contentId: contentId,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    view();
    return result.data;
  };

  const addEpisode = async (contentId, seasonId, path, number) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/episodes/add.php`,
        JSON.stringify({
          id: $user.id,
          seasonId: seasonId,
          duration: 1,
          number: number,
          path: path,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    viewEpisodes(contentId);
    return result.data;
  };

  const editSeason = async (season) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/seasons/edit.php`,
        JSON.stringify({
          id: $user.id,
          contentId: season.contentId,
          seasonId: season.seasonId,
          number: number ? number : season.number,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    viewSeason(season.contentId);
    return result.data;
  };

  const viewSeason = async (contentId) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/seasons/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setSeasons(result.data.filter((season) => season.contentId == contentId));
    return result.data;
  };

  const addSeason = async (contentId, number) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/seasons/add.php`,
        JSON.stringify({
          id: $user.id,
          contentId: contentId,
          number: number,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    viewSeason(contentId);
    return result.data;
  };

  const delSeason = async (seasonId) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/seasons/remove.php`,
        JSON.stringify({
          id: $user.id,
          seasonId: seasonId,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const viewEpisodes = async (contentId) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/episodes/view.php`,
        JSON.stringify({
          id: $user.id,
          contentId: contentId,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    setEpisodes(result.data);
    return result.data;
  };

  const addType = async (contentId, type) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/type/add.php`,
        JSON.stringify({
          id: $user.id,
          contentId: contentId,
          type: type,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    return result;
  };

  const viewGenres = async () => {
    let result = await axios
      .post(
        `${$API_URL}/genre/view.php`,
        JSON.stringify({
          id: $user.id,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    return result.data;
  };

  const addContent = async () => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/add.php`,
        JSON.stringify({
          id: $user.id,
          title: title,
          cover: cover,
          desc: desc,
          release: date,
          duration: 1,
          language: language,
          trailer: trailer,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    view();
    return result.data;
  };

  const editContent = async () => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/edit.php`,
        JSON.stringify({
          id: $user.id,
          contentId: _content.contentId,
          title: title ? title : _content.title,
          cover: cover ? cover : _content.cover,
          desc: desc ? desc : _content.desc,
          release: date ? date : _content.release,
          duration: 1,
          language: language ? language : _content.language,
          trailer: trailer ? trailer : _content.trailer,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    view();
    return result.data;
  };

  const editEpisode = async (contentId, episode, number, path) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/episodes/edit.php`,
        JSON.stringify({
          id: $user.id,
          episodeId: episode.episodeId,
          seasonId: episode.seasonId,
          duration: 200,
          number: number ? number : episode.number,
          path: path,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
    viewEpisodes(contentId);
    return result.data;
  };

  const delEpisode = async (episodeId) => {
    let result = await axios
      .post(
        `${$API_URL}/admin/content/episodes/remove.php`,
        JSON.stringify({
          id: $user.id,
          episodeId: episodeId,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });

    return result.data;
  };

  const del = async (contentId) => {
    let res = await axios.post(
      `${$API_URL}/admin/content/remove.php`,
      JSON.stringify({
        id: $user.id,
        contentId: contentId,
      }),
      {
        "Content-type": "application/json",
      }
    );
    view();
    return res.data;
  };

  const edit = async (obj) => {
    let res = await axios
      .post(
        `${$API_URL}/admin/users/edit.php`,
        JSON.stringify({
          id: $user.id,
          userId: obj.id,
          email: email ? email : obj.email,
        }),
        {
          "Content-type": "application/json",
        }
      )
      .catch((err) => {
        console.log(err);
      });
    view();
    return res.data;
  };
</script>

<Dialog
  title="Add"
  open={contentMenu}
  on:click={async () => {
    if (title && desc && trailer && !invalidDate && language && cover && type) {
      let content = await addContent();
      await addType(content.contentId, type);
      selected.forEach(async (el) => {
        await link(content.contentId, el.genreId);
      });
    }
    contentMenu = false;
  }}
  buttonText="Add"
>
  <class id="form">
    <LayoutGrid>
      <GridCell><Textfield bind:value={title} label="Title" /></GridCell>
      <GridCell><Textfield bind:value={desc} label="Description" /></GridCell>
      <GridCell><Textfield bind:value={cover} label="Cover" /></GridCell>
      <GridCell
        ><Textfield
          bind:value={date}
          bind:invalid={invalidDate}
          label="Released"
        /></GridCell
      >
      <GridCell><Textfield bind:value={language} label="Language" /></GridCell>
      <GridCell><Textfield bind:value={trailer} label="Trailer ID" /></GridCell>
      <GridCell>
        <Select bind:value={type} label="Type">
          {#each ["TV show", "Movie"] as type}
            <Option value={type}>{type}</Option>
          {/each}
        </Select></GridCell
      >
    </LayoutGrid>
    {#await viewGenres() then genres}
      <ChipSet chips={genres} let:chip filter bind:selected>
        <Chip {chip} touch>
          <Text>{chip.name}</Text>
        </Chip>
      </ChipSet>
    {/await}
  </class>
</Dialog>

<Dialog
  title="Edit"
  open={seasonMenu}
  on:click={() => {
    if (_season) {
      editSeason(_season);
    }
    seasonMenu = false;
  }}
  buttonText="Save"
>
  <Textfield bind:value={number} label="Season number" />
</Dialog>

{#if _content}
  <Dialog
    title="View"
    open={viewMenu}
    on:click={() => {
      viewMenu = false;
    }}
    buttonText="Done"
  >
    <div class="paper">
      <Paper>
        Title
        <Content>
          <Subtitle>{_content.title}</Subtitle></Content
        >
        Fescription
        <Content>
          <Subtitle>{_content.desc}</Subtitle></Content
        >
        Type
        <Content>
          <Subtitle>{_content.type}</Subtitle></Content
        >
        Genres
        <Content>
          {#if genres}
            <ChipSet chips={genres} let:chip nonInteractive>
              <Chip {chip}>
                <Text>{chip}</Text>
              </Chip>
            </ChipSet>
          {/if}
        </Content>
        <PaperContent>
          Released
          <Content>
            <PaperContent><Text>{_content.release}</Text></PaperContent>
          </Content>
        </PaperContent>
      </Paper>
    </div>
  </Dialog>
{/if}

<Dialog
  title="Edit"
  open={editMenu}
  on:click={() => {
    if (_content && mode) {
      edit(_content);
    } else if (_content && !mode) {
      editContent();
    }
    editMenu = false;
  }}
  buttonText="Save"
>
  {#if _content}
    {#if mode}
      {#each seasons ?? [] as season}
        <div class="con">
          <div class="left">
            Season {season.number}
          </div>
          <div class="item right">
            <IconButton
              class="material-icons"
              on:click={() => {
                showEpisode = !showEpisode;
                path = "";
              }}>add</IconButton
            >
            <IconButton
              class="material-icons"
              on:click={() => {
                showSeason = !showSeason;
              }}>edit</IconButton
            >
            <IconButton
              class="material-icons"
              on:click={() => {
                deleteSeason = season;
                delSeason(season.seasonId);
              }}>delete</IconButton
            >
          </div>
        </div>
        {#if showSeason}
          <div
            class="con"
            use:clickOutside
            on:click_outside={() => (showSeason = false)}
          >
            <div class="left">
              <Textfield bind:value={number} label="Season number" />
            </div>
            <div class="right">
              <div class="botMargin">
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    editSeason(season);
                  }}>save</IconButton
                >
              </div>
            </div>
          </div>
        {/if}
        {#if showEpisode}
          <div use:clickOutside on:click_outside={() => (showEpisode = false)}>
            <div class="top">
              <Textfield bind:value={number} label="Episode number" />
            </div>
            <div class="bot">
              <Textfield bind:value={path} label="Url" />
            </div>
            <div class="right">
              <div class="botMarginRows">
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    addEpisode(season.contentId, season.seasonId, path, number);
                  }}>add</IconButton
                >
              </div>
            </div>
          </div>
        {/if}
        <div class="container" id="contentEdit">
          <DataTable style="max-width: 100%;">
            <Head>
              <Row>
                <Cell>Episode</Cell>
                <Cell>Edit</Cell>
                <Cell>Remove</Cell>
              </Row>
            </Head>
            <Body>
              {#each _episodes as content}
                {#if content.seasonId === season.seasonId}
                  <Row>
                    <Cell>{content.episode}</Cell>
                    <Cell>
                      <IconButton
                        class="material-icons"
                        on:click={() => {
                          _episode = content;
                          path = "";
                          showEditEpisode = !showEditEpisode;
                        }}>edit</IconButton
                      >
                    </Cell>
                    <Cell>
                      <IconButton
                        class="material-icons"
                        on:click={() => {
                          deleteEpisode = content;
                          delEpisode(content.episodeId);
                        }}>delete</IconButton
                      ></Cell
                    >
                  </Row>
                {/if}
              {/each}
            </Body>
            {#if showEditEpisode}
              <div
                use:clickOutside
                on:click_outside={() => {
                  showEditEpisode = false;
                  path = "";
                }}
              >
                <div class="top">
                  <Textfield bind:value={number} label="Episode number" />
                </div>
                <div class="bot">
                  <Textfield bind:value={path} label="Url" />
                </div>
                <div class="right">
                  <div class="botMarginRows">
                    <IconButton
                      class="material-icons"
                      on:click={() => {
                        if (path) {
                          editEpisode(season.contentId, _episode, number, path);
                        }
                      }}>save</IconButton
                    >
                  </div>
                </div>
              </div>
            {/if}
          </DataTable>
        </div>
      {/each}
      <div class="right">
        <div class="width">
          <Textfield bind:value={number} label="Number" />
        </div>
        <IconButton
          class="material-icons"
          on:click={() => {
            if (number > 0) {
              addSeason(_content.contentId, number);
            }
          }}>add</IconButton
        >
      </div>
    {:else}
      <div id="form">
        <LayoutGrid>
          <GridCell><Textfield bind:value={title} label="Title" /></GridCell>
          <GridCell
            ><Textfield bind:value={desc} label="Description" /></GridCell
          >
          <GridCell><Textfield bind:value={cover} label="Cover" /></GridCell>
          <GridCell
            ><Textfield
              bind:value={date}
              bind:invalid={invalidDate}
              label="Released"
            /></GridCell
          >
          <GridCell
            ><Textfield bind:value={language} label="Language" /></GridCell
          >
          <GridCell
            ><Textfield bind:value={trailer} label="Trailer ID" /></GridCell
          >
        </LayoutGrid>
      </div>
    {/if}
    <IconButton
      class="material-icons"
      on:click={() => {
        mode = !mode;
      }}>developer_mode</IconButton
    >
  {:else if !$user}
    <div class="card-container">
      <ActionCard
        on:click={$goto("/auth/login")}
        text="Whoops, you are not logged in!"
        icon="login"
        action="Login"
      />
    </div>
  {/if}
</Dialog>

{#if errorText}
  <Snackbar bind:this={error}>
    <LabelSnack>
      {errorText}</LabelSnack
    >
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
  </Snackbar>
{/if}
{#await view() then result}
  {#if $user.id}
    <div class="container" id="profile">
      <DataTable style="max-width: 100%;">
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell>View</Cell>
            <Cell>Edit</Cell>
            <Cell>Remove</Cell>
          </Row>
        </Head>
        <Body>
          {#each data as content}
            <Row>
              <Cell>{content.title}</Cell>
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _content = content;
                    viewMenu = false;
                    viewMenu = true;
                  }}>person</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={() => {
                    _content = content;
                    viewSeason(content.contentId);
                    editMenu = false;
                    editMenu = true;
                  }}>edit</IconButton
                ></Cell
              >
              <Cell>
                <IconButton
                  class="material-icons"
                  on:click={async () => await del(content.contentId)}
                  >delete</IconButton
                ></Cell
              >
            </Row>
          {/each}
        </Body>
      </DataTable>
    </div>
    <div class="right">
      <IconButton
        class="material-icons"
        on:click={() => {
          contentMenu = false;
          contentMenu = true;
        }}>add</IconButton
      >
    </div>
  {:else if !$user}
    <div class="card-container">
      <ActionCard
        on:click={$goto("/auth/login")}
        text="Whoops, you are not logged in!"
        icon="login"
        action="Login"
      />
    </div>{/if}
{/await}

<style>
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-radius: 0.4rem;
  }
  .con {
    display: flex;
    justify-content: space-between;
  }
  .top {
    display: flex;
    align-items: flex-start;
  }

  .bot {
    display: flex;
    align-items: flex-end;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.7rem;
  }
  .item {
    display: flex;
    align-items: center;
  }

  .botMargin {
    margin-top: 1rem;
  }

  .botMarginRows {
    margin-top: 0rem;
  }
</style>
