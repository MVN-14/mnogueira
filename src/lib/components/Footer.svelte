<script lang="ts">
	import { page } from "$app/state";

	let { menuItems } = $props();
</script>

<footer>
	<div>
		<p class="title">Contact Me:</p>
		<div id="contact">
			<a href="mailto:michael@mnogueira.ca"
				><icon class="nf nf-md-email"></icon>michael@mnogueira.ca</a
			>
			<a href="tel:2266268849"
				><icon class="nf nf-fa-mobile_phone"></icon>226-626-8849</a
			>
		</div>
	</div>
	<div>
		<ul id="menu">
			{#each menuItems as item}
				<li>
					<a
						class:active={page.route.id?.includes(item.activeMatch)}
						href={item.href}>{item.text}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--text);
		max-width: 1200px;
		margin: 2em auto 0 auto;
		display: flex;
		justify-content: center;
		gap: 2em;
		padding: 0.5em 2em;

		.title {
			font-weight: 500;
			font-size: 1.5em;
			margin: 0;
		}

		#contact {
			max-width: max-content;
			display: flex;
			flex-direction: column;
			gap: 0.5em;
			padding: 0.5em 0;

			icon {
				margin-right: 0.5em;
			}
		}

		#menu {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
			margin-top: 2.5em;

			.active {
				font-weight: bold;
			}
		}
	}
</style>
