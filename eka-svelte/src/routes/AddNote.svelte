<script>
	import { notes } from '$lib/noteStore.js';
	let name = '';
	let description = '';

	function saveNote() {
		let course = { name, description};

		notes.add(note);
		name = '';
		description = '';
	}
</script>

<div>
	<input bind:value={name} placeholder="Name" />
	<input bind:value={description} placeholder="Description" />
	<button on:click={saveNote}>Save</button>
</div>
