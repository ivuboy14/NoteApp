export async function load({ fetch }) {
	const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');
	const data = await res.json();
	return { courses: data };
}
