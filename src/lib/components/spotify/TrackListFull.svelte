<script lang="ts">
	export let tracks: SpotifyApi.TrackObjectFull[];
</script>

<table class="mx-auto border-collapse">
	<thead>
		<tr class="border border-white">
			<th></th>
			<th class="px-8 py-4 text-start">Title</th>
			<th class="px-8 text-start">Artist</th>
		</tr>
	</thead>
	<tbody>
		{#each tracks as track, i}
			<tr class="border border-white">
				<td><img src={track.album.images[0].url} width="75px" alt="album cover" /></td>

				<td class="px-8"
					><a href={track.external_urls.spotify} class="text-spotifyGreen">
						{`${i + 1}. ${track.name}`}
					</a>
				</td>

				<td class="px-8">
					{#each track.artists as artist, i}
						<a href={artist.external_urls.spotify} class="text-spotifyGreen">
							{#if i > 0}
								{', '}
							{/if}
							{artist.name}
						</a>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
