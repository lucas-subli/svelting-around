<script>
	let current = 'foo';
	let big = false;
	let bgOpacity = 0.5;
	$: color = bgOpacity < 0.6 ? '#000' : '#fff';
</script>

<h1>Selected pattern</h1>

<button class:selected={current === 'foo'} on:click={() => (current = 'foo')}>foo</button>

<button class:selected={current === 'bar'} on:click={() => (current = 'bar')}>bar</button>

<button class:selected={current === 'baz'} on:click={() => (current = 'baz')}>baz</button>

<h1>With Shorthands</h1>

<label>
	<input type="checkbox" bind:checked={big} />
	big
</label>

<div class:big>
	some {big ? 'big' : 'small'} text
</div>

<h1>Inline styling</h1>

<input type="range" min="0" max="1" step="0.1" bind:value={bgOpacity} />

<p class="noice" style:color style:--opacity={bgOpacity}>This is a paragraph.</p>

<a href="actions"> Back </a>

<a href="components"> Components </a>

<style>
	button {
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}

	.big {
		font-size: 4em;
	}

	.noice {
		font-family: 'Comic Sans MS', cursive;
		background: rgba(255, 62, 0, var(--opacity));
	}
</style>
