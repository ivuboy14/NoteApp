<h1>Add a Course</h1>
<AddCourse />
<script>
	import { courses } from '$lib/courseStore.js';
	import CourseList from '../CourseList.svelte';
	import AddCourse from '../AddCourse.svelte';
	export let data;

	if ($courses.length === 0) {
		courses.populate(data.courses);
	}
</script>

<CourseList courses={$courses} />
