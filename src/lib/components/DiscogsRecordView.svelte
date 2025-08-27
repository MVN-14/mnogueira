<script lang="ts">
	import type { DiscogsCollectionItem } from "$lib/discogs";

	let { record }: { record: DiscogsCollectionItem } = $props();
</script>

<div id="container">
	<img src={record.basic_information.thumb} alt="Cover" />
	<div id="info-container">
		<p>
			<strong>Title:</strong>
			{record.basic_information.title}
		</p>
		<p>
			<strong>Artist:</strong>
			{record.basic_information.artists.map((a) => a.name).join()}
		</p>
		<p><strong>Year:</strong> {record.basic_information.year}</p>
	</div>
</div>

<style>
	#container {
		border: solid 1px var(--text);
		border-radius: 10px;
		display: flex;
		gap: 1em;
		background: var(--card-background);
		color: var(--black);
		font-weight: 600;

		img {
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
		}

		#info-container {
			width: 250px;
		}
	}
</style>
