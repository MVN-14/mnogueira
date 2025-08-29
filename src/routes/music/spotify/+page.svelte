<script lang="ts">
	import SpotifyArtistView from "$lib/components/SpotifyArtistView.svelte";
	import SpotifyTrackView from "$lib/components/SpotifyTrackView.svelte";

	let { data } = $props();

	let view: "tracks" | "artists" | "recent" = $state("tracks");

	function onTracksClicked() {
		view = "tracks";
	}

	function onArtistsClicked() {
		view = "artists";
	}

	function onRecentClicked() {
		view = "recent";
	}
</script>

<div id="viewSelection">
	<button onclick={onTracksClicked} class:active={view === "tracks"}
		>Top Tracks</button
	>
	<button onclick={onArtistsClicked} class:active={view === "artists"}
		>Top Artists</button
	>
	<button onclick={onRecentClicked} class:active={view === "recent"}>
		Recently Played
	</button>
</div>

{#if view === "tracks"}
	<ul>
		{#await data.topTracks}
			<p class="loading">Loading Tracks...</p>
		{:then tracks}
			{#each tracks.items as track}
				<li>
					<SpotifyTrackView {track} />
				</li>
			{/each}
		{/await}
	</ul>
{:else if view === "artists"}
	{#await data.topArtists}
		<p class="loading">Loading Artists...</p>
	{:then artists}
		<ul>
			{#each artists.items as artist}
				<li>
					<SpotifyArtistView {artist} />
				</li>
			{/each}
		</ul>
	{/await}
{:else if view === "recent"}
	{#await data.recentlyPlayed}
		<p>Loading Recently Played...</p>
	{:then recentlyPlayed}
		<ul>
			{#each recentlyPlayed.items.map((i) => i.track) as recent}
				<li><SpotifyTrackView track={recent} /></li>
			{/each}
		</ul>
	{/await}
{/if}

<style>
	#viewSelection {
		display: flex;
		justify-content: center;
		margin-bottom: 4em;

		button {
			border-radius: 0;
		}

		button:nth-child(1) {
			border-radius: 1em 0 0 1em;
		}
		button:last-child {
			border-radius: 0 1em 1em 0;
		}
	}

	.loading {
		font-size: 3em;
		text-align: center;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		li {
			margin: 0 auto;
			width: 500px;
			max-width: 80vw;
		}
		max-width: 100vw;
	}
</style>
