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
	<a id="discogsLink" href="https://discogs.com/user/michaelnogueira"
		>view on discogs.com</a
	>

	<div id="collectionInfo">
		{#await data.collectionValue then value}
			<p><strong>Maximum:</strong> {value.maximum}</p>
			<p><strong>Median:</strong> {value.median}</p>
			<p><strong>Minimum:</strong> {value.minimum}</p>
		{/await}
	</div>

	{#await data.collectionData}
		<p id="collectionLoading">Loading Collection...</p>
	{:then collection}
		<ul>
			{#each collection.releases as record}
				<li>
					<DiscogsRecordView {record} />
				</li>
			{/each}
		</ul>
	{/await}
</div>

<style>
	#container {
		max-width: 1000px;
margin: 0 auto;

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

		#collectionLoading {
			font-size: 3em;
			text-align: center;
		}

		#collectionInfo {
			display: flex;
			gap: 2em;
			justify-content: center;
			padding: 1em;
		}

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
