<script lang="ts">
	import { page } from "$app/state"
	let { children } = $props();
</script>

<nav>
	<ul>
		<li class:active={page.route.id?.includes("vinyl")} ><a href="/music/vinyl"> My Vinyl Collection </a></li>
		<li class:active={page.route.id?.includes("spotify")} ><a href="/music/spotify"> My Spotify Data </a></li>
		<li class:active={page.route.id?.includes("personal")} ><a href="/music/personal"> My Music </a></li>
	</ul>
</nav>

{@render children?.()}

<style>
	nav {
		margin: 0 auto;
		margin: 2em;
		text-align: center;
		font-weight: bold;
		color: var(--accent);
		
		ul {
			display: flex;
			justify-content: center;
			padding: 0;
			gap: 1em;
			li {
				border: solid 1px var(--accent);
				border-radius: 1em;
				width: max-content;
				padding: 0.5em;
			}
			.active {
				background: var(--accent);
				color: var(--black);
			}

			.active :hover {
				color: var(--black);
			}
		}
	}
</style>
