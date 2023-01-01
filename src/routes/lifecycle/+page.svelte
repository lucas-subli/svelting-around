<script lang='ts'>
	import { onMount } from 'svelte';
    import Timer from './Timer.svelte';

	let characters: Record<string, any>[] = [];

    let open = true;
	let seconds = 0;

	const toggle = () => (open = !open);
	const handleTick = () => (seconds += 1);

	onMount(async () => {
		const res = await fetch(`https://rickandmortyapi.com/api/character`);
		characters = (await res.json()).results;
	});
</script>



<h1>On mount</h1>

<div class="photos">
	{#each characters as character}
		<figure>
			<img src={character.image} alt={character.name}>
			<figcaption>{character.name}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<h1>OnDestroy</h1>

<div>
	<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
	<p>
		The Timer component has been open for
		{seconds} {seconds === 1 ? 'second' : 'seconds'}
	</p>
	{#if open}
	<Timer callback={handleTick} />
	{/if}
</div>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>


<a href="bindings-2"> Back </a>

<a href="stores"> Stores </a>