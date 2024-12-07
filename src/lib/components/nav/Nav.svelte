<script lang="ts">
	import { currentUser } from '$lib/runes/auth.svelte';
</script>

<nav class="flex justify-between bg-white p-3 text-xl text-black">
	<ul class="flex gap-4">
		<li>
			<a href="/"> Home </a>
		</li>
		<li>
			<a href="/spotify"> Spotify </a>
		</li>
		<li>
			<a href="/cnt">CnT</a>
		</li>
	</ul>
	{#if currentUser}
		<p>Logged In</p>
	{/if}
</nav>
