<script>
// @ts-nocheck

	import Note from './Note.svelte';

	
	export let notes;


</script>

<p><strong>({notes.length} Notes)</strong></p>

{#each notes as note}
	<Note {...note} />
{/each}
