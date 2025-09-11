<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import SpotifyArtistView from "$lib/components/SpotifyArtistView.svelte";
	import SpotifyTrackView from "$lib/components/SpotifyTrackView.svelte";

	let { data } = $props();

	function getSearchParam(key: string) {
		return page.url.searchParams.get(key) ?? "";
	}
	function setSearchParam(key: string, value: string) {
		let params = new URLSearchParams(page.url.searchParams)
		params.set(key, value);
		goto("?" + params.toString());
	}

	if (!page.url.searchParams.get("view")) {
		page.url.searchParams.set("view", "tracks");
	}

	if (!page.url.searchParams.get("duration")) {
		page.url.searchParams.set("duration", "medium_term");
	}
</script>

<div id="container">
	<div id="viewSelection">
		<button
			onclick={() => setSearchParam("view", "tracks")}
			class:active={getSearchParam("view") === "tracks"}
			>Top Tracks</button
		>
		<button
			onclick={() => setSearchParam("view", "artists")}
			class:active={getSearchParam("view") === "artists"}
			>Top Artists</button
		>
		<button
			onclick={() => setSearchParam("view", "recent")}
			class:active={getSearchParam("view") === "recent"}
		>
			Recently Played
		</button>
	</div>

	<div id="durationSelection">
		<button
			onclick={() => setSearchParam("duration", "short_term")}
			class:active={getSearchParam("duration") === "short_term"}
			>Short Term</button
		>
		<button
			onclick={() => setSearchParam("duration", "medium_term")}
			class:active={getSearchParam("duration") === "medium_term"}
			>Medium Term</button
		>
		<button
			onclick={() => setSearchParam("duration", "long_term")}
			class:active={getSearchParam("duration") === "long_term"}
			>Long Term</button
		>
	</div>

	{#if getSearchParam("view") === "tracks"}
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
	{:else if getSearchParam("view") === "artists"}
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
	{:else if getSearchParam("view") === "recent"}
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
