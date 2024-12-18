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
		<li>
			<a href="/tuner">Tuner</a>
		</li>
	</ul>
	{#if currentUser.user}
		<p>Log Out</p>
	{/if}
</nav>
