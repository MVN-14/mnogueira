<script lang="ts">
	import TrackListFull from '$lib/components/spotify/TrackListFull.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<main class="flex flex-col items-center gap-8 p-8">
	<img src={data.playlist.images[0].url} width="200" alt="playlist cover" />

	<h1 class="text-center text-6xl font-medium">{data.playlist.name}</h1>

	<a class="text-spotifyGreen" href={data.playlist.external_urls.spotify} target="_blank"
		>View in Spotify<i class="fa-brands fa-spotify ps-2"></i></a
	>

	<TrackListFull tracks={data.tracks} />
</main>
