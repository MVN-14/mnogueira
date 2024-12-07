<script lang="ts">
	export let artists: SpotifyApi.ArtistObjectFull[];
</script>

<table class="mx-auto border-collapse">
	<thead>
		<tr class="border border-white">
			<th></th>
			<th class="px-8 py-4 text-start">Artist</th>
			<th class="px-8 text-start">Genres</th>
		</tr>
	</thead>
	<tbody>
		{#each artists as artist, i}
			<tr class="border border-white">
				<td>
					{#if artist.images[0]}
						<img src={artist.images[0].url} width="75px" alt="album cover" />
					{/if}
				</td>

				<td class="px-8">
					<a href={artist.external_urls.spotify} class="text-spotifyGreen">
						{`${i + 1}. ${artist.name}`}
					</a>
				</td>
				<td class="max-w-[500px]">
					{artist.genres.join(', ')}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
