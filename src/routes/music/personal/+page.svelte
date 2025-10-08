<script lang="ts">
	const { data } = $props();
</script>

<section>
<h1>My Music</h1>

{#await data.videoList}
	<p id="loading">Loading...</p>
{:then videoList} 
<ul>	
	{#each videoList.entries as video}
		<li>
			<p>
				<a
					href={`/music/personal/player?path=${encodeURIComponent(video.path_lower)}`}
					>{video.name.replace(".mp4", "")}</a
				>
			</p>
		</li>
	{/each}
</ul>
{:catch error}
	<p>{error}</p>
{/await}
</section>

<style>
	section {
		#loading {
			font-size: 32px;
		}
		text-align: center;
		h1 {
			font-size: 32px;
		}
		ul {
			padding: 0;
		}
	}
</style>
