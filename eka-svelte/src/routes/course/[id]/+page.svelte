<script>
	import { courses } from '$lib/courseStore.js';
	import Course from '../../Course.svelte';
	export let data;

	let course = $courses.find((b) => b.id === +data.id);
</script>

<h1>Course</h1>

{#if course !== undefined}
	<Course {...course} />
{:else}
	<p>Course is not found</p>
{/if}
