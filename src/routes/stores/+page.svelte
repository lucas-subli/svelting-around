<script lang="ts">
	import { count, elapsed, fancyCount, greeting, name, time } from '$lib/stores';
	import Decrementer from './Decrementer.svelte';
	import Incrementer from './Incrementer.svelte';
	import Resetter from './Resetter.svelte';

	let countValue: number;

	count.subscribe((value) => {
		countValue = value;
	});

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>Basic Writtable store</h1>

<h2>The count is {countValue}</h2>

<Decrementer />
<Incrementer />
<Resetter />

<h1>Now with auto unsub</h1>
<h2>The count is {$count}</h2>

<h1>A readbale store</h1>
<h2>The time is {formatter.format($time)}</h2>

<h1>A derived store</h1>

<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<h1>Custom counter (the same as before but fancier)</h1>

<h3>The fancy counter is {$fancyCount}</h3>

<button on:click={fancyCount.increment}>+</button>
<button on:click={fancyCount.decrement}>-</button>
<button on:click={fancyCount.reset}>reset</button>

<h1>Store binding</h1>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}> Add exclamation mark! </button>

<br>

<a href="lifecycle"> Back </a>

<a href="motion"> Motion </a>
