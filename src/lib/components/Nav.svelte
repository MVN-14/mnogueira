<script lang="ts">
	import { page } from "$app/state";

	let { menuItems } = $props();
</script>

<nav>
	<ul>
		<li class:active={page.route.id == ("/")}>
			<a href="/"><strong>MNogueira</strong></a>
		</li>
		{#each menuItems as item}
			<li class:active={page.route.id?.includes(item.activeMatch)}>
				<a href={item.href} target={item.target ? "_blank" : "_self"}>
					{#if item.icon}
						<icon class={"nf " + item.icon}></icon>
					{/if}
					{item.text}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		font-size: 1.2em;
		border-bottom: 1px solid #add8e6;
		display: flex;
		justify-content: center;
		font-weight: 500;
		margin: 0 auto;
		max-width: 1200px;	

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			gap: 1em;
			justify-items: center;

			li {
				padding: 0.3em;
			}
		}

		.active {
			background: #add8e6;
			color: var(--black);
			font-weight: bold;
		}

		.active :hover {
			color: var(--black);
		}
	}
</style>
