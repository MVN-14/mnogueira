<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { ViewType } from '$lib/types/view';
	import ArtistListFull from './ArtistListFull.svelte';

	let { artists, view }: { artists: SpotifyApi.ArtistObjectFull[]; view: ViewType } = $props();

	let timeRange = $state($page.url.searchParams.get('artists_time_range') ?? 'medium_term');
	$effect(() => {
		$page.url.searchParams.set('artists_time_range', timeRange);
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
	{#if view === 'large'}
		<ul class="flex w-full flex-col text-center align-middle">
			{#each artists as artist, i}
				<li>
					<div class="flex flex-col items-center py-8">
						{#if artist.images[0]}
							<img src={artist.images[0].url} alt="artist" />
						{/if}
						<h2 class="pt-4 text-xl lg:text-4xl">
							{`${i}. ${artist.name}`}
						</h2>
						<h3 class="text-md lg:text-2xl">{artist.genres.join(', ')}</h3>
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<ArtistListFull {artists} />
	{/if}
</section>
