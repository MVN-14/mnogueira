<script lang="ts">
	import DiscogsRecordView from "$lib/components/DiscogsRecordView.svelte";

	let { data } = $props();
</script>

<div id="container">

	<h1 id="title">
		<a href="https://discogs.com/user/michaelnogueira" target="_blank">
			<icon class="nf nf-fa-record_vinyl"></icon> My Vinyl Collection
		</a>
	</h1>
	<a id="discogsLink" href="https://discogs.com/user/michaelnogueira">view on discogs.com</a>

	<div id="collectionInfo">
		<p><strong>Maximum:</strong> {data.collectionValue.maximum}</p>
		<p><strong>Median:</strong> {data.collectionValue.median}</p>
		<p><strong>Minimum:</strong> {data.collectionValue.minimum}</p>
	</div>

	<ul>
		{#each data.collectionData.releases as record}
			<DiscogsRecordView {record} />
		{/each}
	</ul>
</div>

<style>
	#container {
		#discogsLink {
			text-decoration: underline;
			text-align: center;
			display: block;
			margin: 0 auto;
			width: max-content;
			padding: 0;
		}

		#title {
			text-align: center;
			margin-top: 0.4em;
			margin-bottom: 0;
			icon {
				color: grey;
			}
		}

		#collectionInfo {
			display: flex;
			gap: 2em;
			justify-content: center;
			padding: 1em;
		}

		max-width: 1000px;
		margin: 0 auto;
		ul {
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2em;
			justify-content: center;
		}
	}
</style>
