<script lang="ts">
	import AddCntItemDialog from '$lib/components/cnt/AddCNTItemDialog.svelte';
	import { currentUser } from '$lib/runes/auth.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let showModal: boolean = $state(false);
</script>

<main class="flex flex-col gap-8 p-8">
	<!-- <div
		class="border p-72"
		aria-dropeffect="copy"
		role="form"
		ondragenter={(e) => {
			e.stopPropagation();
			e.preventDefault();
		}}
		ondragover={(e) => {
			e.stopPropagation();
			e.preventDefault();
		}}
		ondrop={(e) => {
			let dataTransfer = e.dataTransfer;
			if (dataTransfer) {
				console.log(dataTransfer.getData('text'));
				console.log(dataTransfer.getData);
			}
			e.preventDefault();
			e.stopPropagation();
		}}
	>
		Drop Here
	</div> -->

	<h1 class="text-center text-4xl">Chords N Tabs</h1>

	{#if currentUser}
		<button
			class="button mx-4 w-10"
			onclick={() => {
				showModal = true;
			}}
			aria-label="add"><i class="fa fa-plus text-lg"></i></button
		>
	{/if}

	{#each data.items as item}
		<a href={`/cnt/${item.id}`}>
			{item.name} - {item.artist} ({item.type})
		</a>
	{/each}
</main>

<AddCntItemDialog bind:showModal />
