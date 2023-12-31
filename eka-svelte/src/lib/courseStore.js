// @ts-nocheck
import { writable } from 'svelte/store';

function createCourses() {
	let js_beginner = {
		id: 0,
		name: 'JavaScript for Beginners',
		description: 'Nihil pariatur consectetur.'
	};
	let python_beginner = [
		{ ...js_beginner },
		{
			id: 1,
			name: 'Python for beginners',
			description: 'Consequatur quisquam odio sapiente culpa molestiae nesciunt.'
		}
	];
	// @ts-ignore
	const { subscribe, set, update } = writable([]);

	const add_course = (course) => {
		update((courses) => {
			let id = courses.length;
			return [...courses, { id, ...course }];
		});
	};

	return {
		subscribe,
		// @ts-ignore
		add: add_course,
		reset: () => set([]),
		populate: (courses) => set(courses)
	};
}

export const courses = createCourses();
