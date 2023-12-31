<script>
	import { notes } from '$lib/noteStore.js';
	import NoteList from '../NoteList.svelte';
	export let data;

	if ($notes.length === 0) {
		notes.populate(data.notes);
	}
</script>

<h1>NoteApp</h1>

<NoteList notes={$notes} />