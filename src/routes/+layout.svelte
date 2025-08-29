<script lang="ts">
	import appleTouchIcon from "$lib/assets/apple-touch-icon.png";
	import favicon32 from "$lib/assets/favicon-32x32.png";
	import favicon16 from "$lib/assets/favicon-16x16.png";
	import manifest from "$lib/assets/site.webmanifest";
	import "../app.css";
	import { page } from "$app/state";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<title>MNogueira</title>
	<link rel="manifest" href={manifest} />
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/"> <strong>MNogueira</strong> </a>
		</li>
		<li class:active={page.route.id?.includes("music")}>
			<a href="/music/vinyl"> Music </a>
		</li>
		<li class:active={page.route.id?.includes("projects")}>
			<a href="/projects"> Projects </a>
		</li>
	</ul>
</nav>
{@render children?.()}

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
