<script>
	import { courses } from '$lib/courseStore.js';
	let name = '';
	let description = '';

	function saveCourse() {
		let course = { name, description};

		courses.add(course);
		name = '';
		description = '';
	}
</script>

<div>
	<input bind:value={name} placeholder="Name" />
	<input bind:value={description} placeholder="Description" />
	<button on:click={saveCourse}>Save</button>
</div>
