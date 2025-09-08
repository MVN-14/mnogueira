<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import SpotifyArtistView from "$lib/components/SpotifyArtistView.svelte";
	import SpotifyTrackView from "$lib/components/SpotifyTrackView.svelte";

	let { data } = $props();
	let view: "tracks" | "artists" | "recent" = $state("tracks");
</script>

<div id="container">
	<div id="viewSelection">
		<button
			onclick={() => (view = "tracks")}
			class:active={view === "tracks"}>Top Tracks</button
		>
		<button
			onclick={() => (view = "artists")}
			class:active={view === "artists"}>Top Artists</button
		>
		<button
			onclick={() => (view = "recent")}
			class:active={view === "recent"}
		>
			Recently Played
		</button>
	</div>

	<div id="durationSelection">
		<button
			onclick={() => goto("?duration=short_term")}
			class:active={page.url.searchParams.get("duration") ===
				"short_term"}>Short Term</button
		>
		<button
			onclick={() => goto("?duration=medium_term")}
			class:active={page.url.searchParams.get("duration") ===
				"medium_term"}>Medium Term</button
		>
		<button
			onclick={() => goto("?duration=long_term")}
			class:active={page.url.searchParams.get("duration") === "long_term"}
			>Long Term</button
		>
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
</div>

<style>
	#container {
		max-width: 1000px;
		margin: 0 auto;
	}

	#durationSelection,
	#viewSelection {
		display: flex;
		justify-content: center;
		margin-bottom: 1em;

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
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2em;
		justify-content: center;
		padding: 0;
	}
</style>
