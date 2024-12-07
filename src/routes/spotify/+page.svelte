<script lang="ts">
</script>

<section>
	<h1 class="pb-8 pt-4 text-center text-6xl">My Spotify Data</h1>
	<ul class="flex justify-center gap-8">
		{@render card(
			'Top Tracks & Artists',
			'View a list of my top tracks and artists and filter by time range',
			'/spotify/top'
		)}
		{@render card('Playlists', 'Check out all my public spotify playlists', '/spotify/playlists')}
	</ul>
</section>

{#snippet card(header: string, description: string, href: string)}
	<li>
		<a {href} class="button block w-[300px]">
			<h1 class="pb-4 pt-2 text-2xl">{header}</h1>
			<p class="pb-2">{description}</p>
		</a>
	</li>
{/snippet}
