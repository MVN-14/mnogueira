<script lang="ts">
	let { children } = $props();
</script>

<h1><icon class="nf-fa-spotify nf"></icon> My Spotify Stats</h1>

{@render children?.()}

<style>
	h1 {
		text-align: center;
	}
</style>
