<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import TrackListFull from './TrackListFull.svelte';

	let { tracks, view }: { tracks: SpotifyApi.TrackObjectFull[]; view: 'list' | 'large' } = $props();

	let timeRange = $state($page.url.searchParams.get('tracks_time_range') ?? 'medium_term');
	$effect(() => {
		$page.url.searchParams.set('tracks_time_range', timeRange);
		goto(`?${$page.url.searchParams.toString()}`);
	});
</script>

<div class="flex items-center justify-center gap-2">
	<label for="time_range">Time Range:</label>
	<select bind:value={timeRange} onchange={() => invalidateAll()} id="time_range" class="select">
		<option class="option" value="medium_term" selected>Medium Term (last 6 months)</option>
		<option class="option" value="short_term">Short Term (last 4 weeks)</option>
		<option class="option" value="long_term">Long Term (last year)</option>
	</select>
</div>

<section class="flex pt-8">
	{#if view == 'large'}
		<ul class="flex w-full flex-col gap-28 text-center align-middle">
			{#each tracks as track, i}
				<li class="flex flex-col items-center text-spotifyGreen">
					<img src={track.album.images[0].url} alt="album-art" />

					<h2 class="pt-4 text-xl lg:text-4xl">
						<a href={track.external_urls.spotify}>
							{`${i + 1}. ${track.name}`}
						</a>
					</h2>

					<h3 class="text-lg lg:text-2xl">
						{#each track.artists as artist, j}
							{#if j > 0}
								{', '}
							{/if}
							<a href={artist.external_urls.spotify}>{artist.name}</a>
						{/each}
					</h3>
				</li>
			{/each}
		</ul>
	{:else}
		<TrackListFull {tracks} />
	{/if}
</section>
