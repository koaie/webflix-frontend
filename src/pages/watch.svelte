<script>
    import Player from '../components/player.svelte';
    let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    let cover = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Big_Buck_Bunny_loves_Creative_Commons.png";
    import youtubePlayer from '../components/youtubePlayer.svelte';
</script>
<Player {url} {cover}/>