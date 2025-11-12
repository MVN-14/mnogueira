<script lang="ts">
	let videoPlayer: HTMLVideoElement
</script>

<video bind:this={videoPlayer} controls>
	<track kind="captions">
</video>
