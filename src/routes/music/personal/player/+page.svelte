<script lang="ts">
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { PUBLIC_DROPBOX_API_URL } from "$env/static/public";

	let path = $state(page.url.searchParams.get("path"));
	let isLoadingVideo = $state(true);

	let video: HTMLVideoElement | undefined = $state();

	onMount(async () => {
		if (!video) return;
		isLoadingVideo = true;
		const response = await fetch(
			`${PUBLIC_DROPBOX_API_URL}/videos?path=${encodeURIComponent(path ?? "")}`,
		);
		const blob = await response.blob();
		video.src = URL.createObjectURL(blob);
		isLoadingVideo = false;
	});
</script>

<h1>{path?.replace("/mymusic/video/", "").replace(".mp4", "")}</h1>

<div id="videoContainer">
	<video controls bind:this={video}>
		<track kind="captions" />
		{#if isLoadingVideo}
			<h1>Loading Video...</h1>
		{/if}
	</video>
</div>

<style>
	h1 {
		text-align: center;
	}

	#videoContainer {
		background: black;
		display: flex;

		margin-top: 3em;
		margin-bottom: 3em;

		video {
			width: "100%";

			height: auto;
			margin: 0 auto;
		}
	}
</style>
