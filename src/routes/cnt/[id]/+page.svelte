<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="p-8">
	<h1 class="text-center text-4xl">{data.item.name} - {data.item.artist}</h1>
	<div class="w-full">
		<code class="mx-auto block w-fit whitespace-pre-wrap pt-12">{data.content}</code>
	</div>
</main>
