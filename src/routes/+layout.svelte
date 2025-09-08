<script lang="ts">
	import appleTouchIcon from "$lib/assets/apple-touch-icon.png";
	import favicon32 from "$lib/assets/favicon-32x32.png";
	import favicon16 from "$lib/assets/favicon-16x16.png";
	import manifest from "$lib/assets/site.webmanifest";
	import "../app.css";

	import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();

	let menuItems = [
		{
			text: "Music",
			href: "/music/vinyl",
			activeMatch: "music",
		},
		{
			text: "Projects",
			href: "/projects",
			activeMatch: "projects",
		},
	];
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<title>MNogueira</title>
	<link rel="manifest" href={manifest} />
</svelte:head>

<Nav {menuItems} />

<div id="pageContainer">
	{@render children?.()}
</div>

<Footer {menuItems} />

<style>
	#pageContainer {
		min-height: 80vh;
	}


</style>
