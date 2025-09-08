<header>
	<h1>My Projects</h1>
	<a href="https://github.com/MVN-14" target="_blank">
		<icon class="nf nf-dev-github"></icon> Github
	</a>
</header>

<p id="info">
	I love to tinker with my own tools and projects to keep learning and solve
	specific problems I encounter while writing code. I am constantly starting
	new projects and rarely finishing them.
</p>

<ul id="projectList">
	<li>
		<div class="projectInfo">
			<p class="link">
				<a href="https://webgames.mnogueira.ca" target="_blank"
					><strong>Web Games</strong></a
				>
				<br />
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
			</p>
			<p>
				This is a collection of webgames written with pure js web
				components to learn how to use vanilla web components
			</p>
		</div>
	</li>

	<li>
		<div class="projectInfo">
			<p class="link">
				<a
					href="https://github.com/MVN-14/create-wx-app"
					target="_blank"><strong>create-wx-app</strong></a
				>
				<br />
				<a
					class="projectLink"
					href="https://github.com/MVN-14/create-wx-app"
					aria-label="Github"
					><icon class="nf nf-dev-github"></icon></a
				>
			</p>
			<p>
				A C++ program to spin up a basic wxWidgets Hello World app with
				a CMake build system.
			</p>
		</div>
	</li>

	<li>
		<div class="projectInfo">
			<p class="link">
				<a href="https://cah.mnogueira.ca" target="_blank"
					><strong>Clone Against Humanity</strong></a
				>
				<br />
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
			</p>
			<p>
				A Multiplayer Cards Against Humanity clone to learn websockets and practice client/server communication
			</p>
		</div>
	</li>
</ul>

<style>
	header {
		text-align: center;
		padding: 2em;
		h1 {
			font-size: 2.5em;
			margin: 0;
		}
		a {
			font-size: 1.2em;
		}
	}

	#info {
		font-size: 1.2em;
		max-width: 800px;
		margin: 0 auto;
		padding-bottom: 2em;
	}

	#projectList {
		padding: 2em;
		max-width: 800px;
		margin: 0 auto;
		border: solid 1px grey;
		border-radius: 2em;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 3em;

		.projectInfo {
			display: flex;
			gap: 2em;
			.link {
				font-size: 1.5em;
				min-width: 250px;
			}
			p {
				margin: 0;
				font-size: 1.2em;
			}
		}

		.projectLink {
			font-size: 1em;
		}
	}
</style>
