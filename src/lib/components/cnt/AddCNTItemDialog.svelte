<script lang="ts">
	import { createCNTItem } from '$lib/db/cnt';

	let { showModal = $bindable<boolean>(false) }: { showModal: boolean } = $props();

	let name = $state('');
	let artist = $state('');
	let url = $state('');
	let type = $state('chord');

	let isDragging = false;

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	});

	async function onAddCNTItem() {
		if (name && artist && url && type) {
			try {
				await createCNTItem({
					name,
					artist,
					url,
					type
				});
			} catch (err) {
				console.error(err);
			}
		}
	}

	function onDragEnter(e: DragEvent) {
		console.log('enter');
		preventAndStop(e);
	}

	function onDragOver(e: DragEvent) {
		console.log('over');
		preventAndStop(e);
	}

	function onDrop(e: DragEvent) {
		let dataTransfer = e.dataTransfer;
		if (dataTransfer) {
			console.log(dataTransfer.getData('text'));
		}
		preventAndStop(e);
	}

	function onDragExit(e: DragEvent) {
		console.log('exit');
		isDragging = true;
		preventAndStop(e);
	}

	function preventAndStop(e: Event) {
		e.preventDefault();
		e.stopPropagation();
	}
</script>

<dialog
	bind:this={dialog}
	class="m-auto rounded-3xl bg-grey p-4"
	aria-dropeffect="copy"
	role="form"
	ondragenter={onDragEnter}
	ondragover={onDragOver}
	ondrop={onDrop}
	ondragexit={onDragExit}
>
	<button
		class="w-10 rounded-lg border-2 border-black py-1.5 hover:border-red hover:text-red"
		onclick={() => (showModal = false)}
		aria-label="close"><i class="fa fa-x"></i></button
	>

	<h1 class="text-center text-4xl">Add Chord or Tab</h1>

	<form class="flex flex-col gap-4 p-12">
		<div class="flex flex-col">
			<label for="name">Name</label>
			<input type="text" name="name" class="rounded-md bg-white" bind:value={name} required />
		</div>

		<div class="flex flex-col">
			<label for="artist">Artist</label>
			<input type="text" name="artist" class="rounded-md" bind:value={artist} required />
		</div>

		<div class="flex flex-col">
			<label for="url">Url</label>
			<input type="text" name="url" class="rounded-md" bind:value={url} required />
		</div>

		<div class="flex flex-col">
			<label for="type">Type</label>
			<select bind:value={type} class="rounded-md">
				<option value="chord" selected>Chords</option>
				<option value="tab">Tabs</option>
			</select>
		</div>

		<button
			onclick={onAddCNTItem}
			class="hover-bg-black mt-8 rounded-lg border-2 border-black py-1.5 font-bold hover:border-white hover:text-white"
			>Add</button
		>
	</form>
</dialog>
