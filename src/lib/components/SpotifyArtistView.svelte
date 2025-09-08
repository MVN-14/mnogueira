<script lang="ts">
	import type { Artist } from "$lib/spotify";

	let { artist }: { artist: Artist } = $props();
</script>

<div class="container">
	<img src={artist.images[0].url} alt="album" width="150" />
	<div class="info">
		<p>{artist.name}</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 1.5em;
		background: var(--card-background);
		color: var(--black);
		border-radius: 1em;
		font-weight: 600;
		max-width: 80vw;

		img {
			border-radius: 1em 0 0 1em;
			height: 150px;
		}
		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 250px;
			p {
				margin: 0.2em;
			}
		}
	} 
</style>
