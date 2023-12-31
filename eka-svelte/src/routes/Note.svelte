<script>
	// @ts-nocheck

	export let name;
	export let description;
	export let id;
</script>

<a href={`/note/${id}`}>
	<div>
		<h3>{name}</h3>

	</div></a
>

<style>
	a {
		color: inherit;
		text-decoration: inherit;
	}
	div {
		border: 1px solid black;
		margin-bottom: 1rem;
	}
</style>
