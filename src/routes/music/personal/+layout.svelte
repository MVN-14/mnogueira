<script lang="ts">
	const { data, children } = $props();
</script>

{@render children()}

<section>
	{#await data.videoList}
		<p id="loading">Loading Videos...</p>
	{:then videoList}
		{#if videoList.error}
			<p>{videoList.error}</p>
		{:else}
			<ul id="videoList">
				<li>
					<h1>More Videos</h1>
				</li>
				{#each videoList.entries as video}
					<li>
						<a
							href={`/music/personal/player?path=${encodeURIComponent(video.path_lower)}`}
						>
							<img
								src={`data:image/jpeg;base64,${video.thumbnail}`}
								alt="thumbnail"
							/>
							{video.name.replace(".mp4", "")}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</section>

<style>
	section {
		#loading {
			font-size: 32px;
		}

		text-align: center;

		#videoList {
			width: max-content;
			margin: 0 auto;
			text-align: left;

			li {
				border: solid 1px var(--accent);
				color: var(--accent);

				h1 {
					margin: 0;
					text-align: center;
					padding: 0.3em;
					font-size: 2em;
				}

				a {
					color: var(--white);
					font-weight: bold;
					display: flex;
					align-items: center;
					gap: 1em;

					img {
						width: 75px;
						height: 75px;
						object-fit: cover;
					}
				}

				a:hover {
					background: var(--accent);
					color: black;
				}
			}
		}
	}
</style>
