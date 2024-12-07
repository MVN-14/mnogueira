<script lang="ts">
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { currentUser } from '$lib/runes/auth.svelte';

	let email = $state<string>('');
	let password = $state<string>('');

	async function signIn() {
		try {
			const credentials = await signInWithEmailAndPassword(auth, email, password);
			alert('Logged In Successfully');
			currentUser.user = credentials.user;
		} catch (err) {
			alert('Error logging in' + err);
		}
	}
</script>

<form class="flex flex-col gap-4 p-4">
	<div class="flex items-center justify-center gap-3">
		<p>Email</p>
		<input bind:value={email} type="email" class="text-black" />
	</div>

	<div class="flex items-center justify-center gap-4">
		<p>Password</p>
		<input bind:value={password} type="password" class="text-black" />
	</div>

	<button type="submit" onclick={signIn}>Submit</button>
</form>
