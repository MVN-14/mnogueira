<script lang="ts">
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { PUBLIC_DROPBOX_API_URL } from "$env/static/public";

	let isLoadingVideo = $state(true);

	let video: HTMLVideoElement | undefined = $state();

	$effect(() => {
		page.url.searchParams;
		loadVideoFromPath();
	});

	async function loadVideoFromPath() {
		if (!video) return;
		video.src = "";
		isLoadingVideo = true;
		const response = await fetch(
			`${PUBLIC_DROPBOX_API_URL}/videos?path=${encodeURIComponent(page.url.searchParams.get("path") ?? "")}`,
		);
		const blob = await response.blob();
		video.src = URL.createObjectURL(blob);
		isLoadingVideo = false;
	}

	onMount(async () => {
		loadVideoFromPath();
	});
</script>

<p id="title">
	{page.url.searchParams
		.get("path")
		?.replace("/mymusic/video/", "")
		.replace(".mp4", "")}
</p>

<div id="videoContainer">
	<video controls bind:this={video}>
		<track kind="captions" />
		{#if isLoadingVideo}
			<h1>Loading Video...</h1>
		{/if}
	</video>
</div>

<style>
	#title {
		font-weight: bold;
		font-size: 1.7em;
		text-align: center;
		margin-top: 3em;
		margin-bottom: 0.5em;
	}

	#videoContainer {
		background: black;
		display: flex;

		max-width: 100vw;

		video {
			width: auto;
			height: 70%;
			margin: 0 auto;
		}
	}
</style>
