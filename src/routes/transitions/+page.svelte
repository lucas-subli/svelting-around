<script>
	import { fade, fly, slide } from 'svelte/transition';
	
    let visible = true;
    let status = 'waiting...';

    let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let number = 0;

</script>

<h1> Basic Transaction </h1>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}

<h1> With params </h1>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fly="{{ y: 200, duration: 2000 }}">
		Flies in and out
	</p>
{/if}

<h1> Moar params </h1>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		Flies in, fades out
	</p>
{/if}


<h1>Transition events</h1>

<p>status: {status}</p>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p
		transition:fly="{{ y: 200, duration: 2000 }}"
		on:introstart="{() => status = 'intro started'}"
		on:outrostart="{() => status = 'outro started'}"
		on:introend="{() => status = 'intro ended'}"
		on:outroend="{() => status = 'outro ended'}"
	>
		Flies in and out
	</p>
{/if}

<h1>Local Transitions</h1>

<label>
	<input type="checkbox" bind:checked={showItems}>
	show list
</label>

<label>
	<input type="range" bind:value={i} max=10>

</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|local>
			{item}
		</div>
	{/each}
{/if}

<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>

<h1>Key Blocks</h1>

<div>
	The number is:
	{#key number}
		<span style="display: inline-block" in:fly={{ y: -20 }}>
			{number}
		</span>
	{/key}
</div>
<br />
<button
	on:click={() => {
		number += 1;
	}}>
	Increment
</button>


<br>

<a href="motion"> Back </a>

<a href="actions"> Actions </a>