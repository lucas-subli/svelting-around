<script lang='ts'>
	import { onDestroy } from 'svelte';

    export let callback: Function;
    const interval = 1000;
	const ticker = setInterval(() => callback(), interval);

	onDestroy(() => clearInterval(ticker));
</script>

<p>
	This component executes a callback every 
	{interval} milliseconds
</p>

<style>
	p { 
		border: 1px solid blue;
		padding: 5px;
	}
</style>