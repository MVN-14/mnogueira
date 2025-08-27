<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<ul>
		<li><a href="/music/vinyl"> My Vinyl Collection </a></li>
	</ul>
</nav>

{@render children?.()}

<style>
	nav {
		margin: 0 auto;
		margin: 2em;
		text-align: center;
		font-weight: bold;
		
		ul {
			display: flex;
			justify-content: center;
			padding: 0;
			li {
				border: solid 1px white;
				border-radius: 1em;
				width: max-content;
				padding: 0.5em;
			}
		}
	}
</style>
