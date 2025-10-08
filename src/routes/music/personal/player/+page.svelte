<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
	import { PUBLIC_DROPBOX_API_URL } from "$env/static/public"

	const path = page.url.searchParams.get("path");

	let video: HTMLVideoElement;
	onMount(async () => {
		const response = await fetch(`${PUBLIC_DROPBOX_API_URL}/videos?path=${encodeURIComponent(path ?? "")}`);
		const blob = await response.blob();
		video.src = URL.createObjectURL(blob);
	});
</script>

<h1>{path?.replace("/mymusic/video/", "").replace(".mp4", "")}</h1>

<div id="videoContainer">
<video controls bind:this={video}>
	<track kind="captions">
</video>
</div>

<style>
	h1 {
		text-align: center;
	}

	#videoContainer {
		text-align: center
	}
</style>
