<div id="container">
	<header>
		<h1>My Projects</h1>
		<a href="https://github.com/MVN-14" target="_blank">
			<icon class="nf nf-dev-github"></icon> Github
		</a>
	</header>

	<p id="info">
		I love to tinker with my own tools and projects to keep learning and
		solve specific problems I encounter while writing code.
	</p>

	<div id="projects">
		<div class="project">
			<h2 class="projectTitle">
				Web Games <br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/web-games"
					aria-label="Github"
					><icon class="nf nf-dev-github"></icon></a
				>
				|
				<a
					class="projectLink"
					href="https://webgames.mnogueira.ca"
					target="_blank"
					aria-label="website"><icon class="nf nf-md-web"></icon></a
				>
			</h2>
			<p>
				This is a collection of webgames written with pure js web
				components to learn how to use vanilla web components. <br />
				<strong>
					Current games - tic tac toe, wordle, and snake
				</strong>
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				create-wx-app <br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/create-wx-app"
					aria-label="Github"
					><icon class="nf nf-dev-github"></icon></a
				>
			</h2>
			<p>
				A C++ program to spin up a basic wxWidgets Hello World app with
				a CMake build system.
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				Clone Against Humanity <br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/CAHClient"
					aria-label="Github"
					><icon class="nf nf-dev-github"></icon></a
				>
				|
				<a
					class="projectLink"
					href="https://cah.mnogueira.ca"
					target="_blank"
					aria-label="website"><icon class="nf nf-md-web"></icon></a
				>
			</h2>
			<p>
				A Multiplayer Cards Against Humanity clone to learn websockets
				and practice client/server communication
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				i3 Blocks Go<br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/i3blocks-go"
					aria-label="Github"
					target="_blank"><icon class="nf nf-dev-github"></icon></a
				>
			</h2>
			<p>
				This is a collection of go scripts that output i3blocks for
				i3wm's i3bar. <br /> <br />
				<strong>
					blocks inculded: <br />
				</strong>
				battery, date, time, nordvpn, spotify, volume
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				PangGo <br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/panggo"
					aria-label="Github"
					target="_blank"><icon class="nf nf-dev-github"></icon></a
				>
			</h2>
			<p>
				This is a Go library I created to create a PowerLine style
				i3-bar for i3wm, it currently only supports generating pango
				span elements and powerline elements
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				CTools-Nvim<br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/ctools-nvim"
					aria-label="Github"
					target="_blank"><icon class="nf nf-dev-github"></icon></a
				>
			</h2>
			<p>
				This is a neovim plugin that provides quick file switching
				between C/C++ source and header files
			</p>
		</div>

		<div class="project">
			<h2 class="projectTitle">
				Nvim-Commenter<br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/ctools-nvim"
					aria-label="Github"
					target="_blank"><icon class="nf nf-dev-github"></icon></a
				>
			</h2>
			<p>
			This is a neovim plugin that provides configurable keymaps for commenting code			</p>
		</div>
	</div>
</div>

<style>
	#container {
		margin: auto;
		max-width: 1000px;

		header {
			text-align: center;
			padding: 2em;

			h1 {
				font-size: 2.5em;
				margin: 0;
			}

			a {
				font-size: 1.2em;
				color: var(--accent);
			}
		}

		#info {
			text-align: center;
			font-size: 1.2em;
			max-width: 600px;
			margin: 0 auto;
			padding: 0 1em 2em 1em;
		}

		#projects {
			display: flex;
			gap: 2em;
			flex-wrap: wrap;
			justify-content: center;

			.project {
				.projectTitle {
					color: var(--accent);
					font-size: clamp(1.4em, 2vw, 1.8em);
				}

				border: 1px solid var(--accent);
				border-radius: 2em;
				padding: 1em;
				text-align: center;
				max-width: 400px;

				p {
					font-size: 1.2em;
				}
			}
		}
	}
</style>
