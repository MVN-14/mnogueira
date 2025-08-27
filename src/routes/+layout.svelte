<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<nav>
<ul>
	<li>
	<a href="/"> <strong>MNogueira</strong> </a>
	</li>
	<li>
	<a href="/music"> Music </a>
	</li>

</ul>
</nav>
{@render children?.()}

<style>
	nav {
		font-size: 1.2em;
		padding: 0.4em;
		border-bottom: 1px solid var(--text);

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			gap: 1em;
		}
	}
</style>
