<script>
	import Course from './Course.svelte';
	// @ts-nocheck

	// import { bands } from '$lib/bandStore.js';
	// import bands from '$lib/bands.json';
	
	export let courses;

	// let bands = [];

	// async function getBands() {
	// 	const res = await fetch('https://band-api.netlify.app/.netlify/functions/get-bands');
	// 	const data = await res.json();
	// 	bands = data;

	// 	if (res.ok) {
	// 		return data;
	// 	} else {
	// 		throw new Error();
	// 	}
	// }

	// getBands();
</script>

<p><strong>({courses.length} Courses)</strong></p>

{#each courses as course}
	<Course {...course} />
{/each}

<!-- {#await getBands()}
	<p>Ladataan bändejä.</p>
{:then bands} -->
<!-- {#each bands as band}
		<Band {...band} />
	{/each} -->
<!-- {:catch error}
	<p>{error.message}</p>
{/await} -->
