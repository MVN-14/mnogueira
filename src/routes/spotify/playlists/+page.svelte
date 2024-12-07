<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
	let filteredPlaylists: SpotifyApi.PlaylistObjectSimplified[] = data.playlists.items.filter(
		(p) => p && p.owner.display_name === 'Michael Nogueira'
	);
</script>

<section>
	<h1 class="pb-8 text-center text-6xl">My Playlists</h1>
</section>

<table class="mx-auto min-w-[40vw]">
	<thead>
		<tr class="border border-white">
			<th></th>
			<th>Links</th>
			<th class="px-8 text-start">Name</th>
			<th class="text-start"># Tracks</th>
		</tr>
	</thead>
	<tbody>
		{#each filteredPlaylists as playlist}
			{#if playlist}
				<tr class="border border-white">
					<td><img src={playlist.images[0].url} width="100px" alt="playlist art" /></td>

					<td class="px-8 text-spotifyGreen">
						<a href={playlist.external_urls.spotify} aria-label="spotify">
							<i class="fa-brands fa-spotify"></i>
						</a>

						<a href={`/spotify/playlists/${playlist.id}`} aria-label="list">
							<i class="fa fa-list"></i>
						</a>
					</td>

					<td class="px-8">
						<a class="text-spotifyGreen" href={playlist.external_urls.spotify} target="_blank">
							{playlist.name}
						</a>
					</td>

					<td class="ps-8">{playlist.tracks.total}</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
