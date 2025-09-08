<script lang="ts">
	import type { Track } from "$lib/spotify";

	let { track }: { track: Track } = $props();
</script>

<div class="container">
	<img src={track.album.images[0].url} alt="album" height="150" />
	<div class="info">
		<p>{track.name}</p>
		<p>{track.album.artists.map(a => a.name).join(",")}</p>
		<p>{track.album.name}</p>
	</div>
</div>

<style>
	.container {
		img {
			border-radius: 1em 0 0 1em;
		}
		display: flex;
		gap: 1em;
		background: var(--card-background);
		color: var(--black);
		border-radius: 1em;
		font-weight: 600;
		max-width: 80vw;

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
