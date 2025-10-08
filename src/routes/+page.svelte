<script lang="ts">
	import headshot from "$lib/assets/headshot.png"
</script>

<div id="container">

	<img src={headshot} alt="headshot" width="200"/>
	<h1>Welcome to my website</h1>

	<p id="header">
		My name is Michael Nogueira. <br />
		I have a passion for tech and programming.
		I also love music.
	</p>

	<article>
		<h2>What's On This Site?</h2>

		<ul>
			<li>
				<p>
					<a href="/music/vinyl"
						><strong
							><icon class="nf nf-fa-record_vinyl"></icon> My Vinyl
							Collection</strong
						></a
					>
				</p>
				<p>A list of my vinyl collection from Discogs.com</p>
			</li>
			<li>
				<p>
					<a href="/music/spotify">
						<strong>
							<icon class="nf nf-fa-spotify"></icon> My Spotify Listening
							Habits
						</strong>
					</a>
				</p>
				<p>
					A collection of my top artists/tracks, recently listened to,
					and other spotify statistics
				</p>
			</li>
		</ul>
	</article>

	<article>
		<h2>Tech I Like</h2>
		<ul>
			<li>
				<p>
					<a
						href="https://wiki.archlinux.org/title/Main_page"
						target="_blank"
					>
						<strong>
							<icon class="nf nf-linux-archlinux"></icon> Arch Linux
						</strong>
					</a>
				</p>
				<p>
					I have been daily driving linux since early 2023, starting
					with Ubuntu and then making the switch to arch linux shortly
					after. I love being able to configure and learn constantly.
				</p>
			</li>

			<li>
				<p>
					<a href="https://neovim.io" target="_blank">
						<strong
							><icon class="nf nf-linux-neovim"></icon> NeoVim</strong
						>
					</a>
				</p>
				<p>
					I use NeoVim as my editor of choice. I have been using
					NeoVim for a couple years and I am constantly messing around
					with my config and trying different things.
				</p>
			</li>

			<li>
				<p>
					<a href="https://svelte.dev" target="_blank">
						<strong
							><icon class="nf nf-dev-svelte"></icon> Svelte</strong
						>
					</a>
				</p>
				<p>
					Svelte and SvelteKit are my goto frameworks for my web dev
					projects. Compared to my experience with Angular and React,
					I find Svelte provides a more organized and simple
					development experience.
				</p>
			</li>
		</ul>
	</article>
</div>

<style>
	#container {
		text-align: center;
		margin: auto;
		max-width: 1000px;

		img {
			margin-top: 2em;
		}

		h1 {
			font-weight: 600;
			border-bottom: solid 2px white;
			width: max-content;
			margin: 0 auto 0.5em auto;
		}

		#header {
			max-width: 1000px;
			margin: 0 auto;
			font-weight: 500;
			font-size: clamp(14px, 5vw, 2em);
			padding-bottom: 2em;
		}

		article {
			border: solid 2px grey;
			border-radius: 2em;
			margin-bottom: 4em;

			h2 {
				padding: 0 0 0 0.5em;
				font-weight: 800;
			}

			ul {
				padding: 0;
				display: flex;
				flex-direction: column;
				gap: 1em;
				margin: 0 auto;
				max-width: 75%;
			}

			p {
				text-align: center;
				font-size: clamp(14px, 4vw, 1.3em);
				padding: 0;
				strong {
					font-size: clamp(14px, 4.5vw, 1.3em);
					font-weight: 600;
				}
			}
		}


	}
</style>
