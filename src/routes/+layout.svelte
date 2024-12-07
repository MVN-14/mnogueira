<script lang="ts">
	import Nav from '$lib/components/nav/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Nav />
{@render children()}

<style>
	:global(body) {
		@apply bg-black font-sans text-white;
	}
</style>
