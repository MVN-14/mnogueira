<script lang="ts">
	let { children } = $props();

	const profileUrl = "https://open.spotify.com/user/mikenogueira";
</script>

<h1>
	<icon class="nf-fa-spotify nf"></icon>
	<a href={profileUrl} target="_blank"> My Spotify Stats </a>
</h1>
<p><a href={profileUrl} target="_blank">view on Spotify</a></p>

{@render children?.()}

<style>
	h1,
	p {
		text-align: center;
		margin-bottom: 0;
	}

	p {
		padding-top: 0;
		padding-bottom: 1.5em;
		margin: 0;
		text-decoration: underline;
	}
</style>
