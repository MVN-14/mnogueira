<script lang="ts">
	const { data } = $props();
</script>

<h1>My Music</h1>

<ul>
	{#each data.videoList.entries as video}
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

<style>
	h1 {
		text-align: center;
	}

	li {
		text-align: center;
	}
</style>
