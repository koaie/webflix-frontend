<script>
    import axios from "axios";
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import ActionCard from "../components/card/action.svelte";
    import { LoggedIn, Paid, UserId , apiUrl} from "../logic/stores";

    let loggedIn = null;
    let paid = null;
    let userId = null;
    let api = null;

    LoggedIn.subscribe((value) => {
        loggedIn = value;
    });
    Paid.subscribe((value) => {
        paid = value;
    });
    apiUrl.subscribe((value) => {
        api = value;
    });
    UserId.subscribe((value) => {
        userId = value;
    });

    const body = JSON.stringify({
        id: userId,
    });

    const call = async () => {
        let result;
        await axios
            .post(`${api}/content/view.php`, body, {
                "Content-type": "application/json",
            })
            .then((res) => {
                result = res;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return result;
    };
    const res = call();
</script>

{#if loggedIn}
    <LayoutGrid>
        {#each Array(9) as _unused, i}
            <Cell span={4}>
                <Card>
                    <PrimaryAction on:click={() => {}}>
                        <Media class="card-media-16x9" aspectRatio="16x9">
                            <MediaContent>
                                <div
                                    style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
                                >
                                    <h2
                                        class="mdc-typography--headline6"
                                        style="margin: 0;"
                                    >
                                        A card with media.
                                    </h2>
                                    <h3
                                        class="mdc-typography--subtitle2"
                                        style="margin: 0;"
                                    >
                                        And a subtitle.
                                    </h3>
                                </div>
                            </MediaContent>
                        </Media>
                        <Content class="mdc-typography--body2">
                            It's all in this card. It's a veritable smorgasbord
                            of card features.
                        </Content>
                    </PrimaryAction>
                    <Actions>
                        <ActionButtons>
                            <Button on:click={() => {}}>
                                <Label
                                    >{#if paid}
                                        Play
                                    {:else}
                                        Trailer
                                    {/if}
                                </Label>
                            </Button>
                            <Button color="secondary" on:click={() => {}}>
                                <Label>Details</Label>
                            </Button>
                        </ActionButtons>
                        <ActionIcons>
                            <IconButton
                                class="material-icons"
                                on:click={() => {}}
                                title="Share">share</IconButton
                            >
                        </ActionIcons>
                    </Actions>
                </Card>
            </Cell>
        {/each}
    </LayoutGrid>
{:else}
    <div class="container">
        <ActionCard
            text="Whoops, you are not logged in!"
            icon="login"
            direct="./login"
            action="Login"
        />
    </div>
{/if}

<style>
    * :global(.card-media-16x9) {
        background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);
    }
    .container {
        margin: 0;
        position: absolute;
        top: 70%;
        left: 50%;
        margin-right: -50%;
        width: 50%;
        height: 80%;
        transform: translate(-50%, -70%);
    }
</style>
