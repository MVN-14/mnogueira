<script lang="ts">
	import { page } from "$app/state";

	let { menuItems } = $props();
</script>

<nav>
	<ul>
		<li>
			<a href="/"><strong>MNogueira</strong></a>
		</li>
		{#each menuItems as item}
			<li class:active={page.route.id?.includes(item.activeMatch)}>
				<a href={item.href}>{item.text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		font-size: 1.2em;
		border-bottom: 1px solid var(--text);

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			gap: 1em;

			li {
				padding: 0.3em;
			}
		}

		.active {
			background: white;
			color: var(--black);
			font-weight: bold;
		}
	}
</style>
