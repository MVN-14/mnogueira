<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import TopArtists from '$lib/components/spotify/TopArtists.svelte';
	import TopTracks from '$lib/components/spotify/TopTracks.svelte';
	import type { PageServerData } from './$types';
	import type { ViewType } from '$lib/types/view';

	let { data }: { data: PageServerData } = $props();

	let itemType = $state($page.url.searchParams.get('type') ?? 'Tracks');
	let view: ViewType = $state('list');

	$effect(() => {
		$page.url.searchParams.set('type', itemType);
		goto(`?${$page.url.searchParams.toString()}`);
	});
</script>

<div class="flex flex-col gap-4 pb-8">
	<button
		class="button text-md mx-auto w-fit lg:text-xl"
		onclick={() => (itemType = itemType === 'Artists' ? 'Tracks' : 'Artists')}
		>View Top {itemType === 'Artists' ? 'Tracks' : 'Artists'}</button
	>

	<h1 class="pt-6 text-center text-3xl lg:text-6xl">Top {itemType}</h1>

	<select
		class="mx-auto w-fit rounded-xl bg-grey text-xl font-semibold text-black"
		bind:value={view}
	>
		<option value="list" selected>List View</option>
		<option value="large">Tile View</option>
	</select>
</div>

<div class="w-full">
	{#if itemType === 'Tracks'}
		<TopTracks tracks={data.topTracks.items} {view} />
	{:else}
		<TopArtists artists={data.topArtists.items} {view} />
	{/if}
</div>
