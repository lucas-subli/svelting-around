<svelte:options immutable={true} />

<script lang="ts">
	import { afterUpdate } from 'svelte';

	function flash(element: HTMLElement) {
		requestAnimationFrame(() => {
			element.style.transition = 'none';
			element.style.color = 'rgba(255,62,0,1)';
			element.style.backgroundColor = 'rgba(255,62,0,0.2)';

			setTimeout(() => {
				element.style.transition = 'color 1s, background 1s';
				element.style.color = '';
				element.style.backgroundColor = '';
			});
		});
	}

	export let todo: { done: boolean; text: string };

	let div: HTMLElement;

	afterUpdate(() => {
		flash(div);
	});
</script>

<!-- the text will flash red whenever
     the `todo` object changes -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={div} on:click>
	{todo.done ? '👍' : ''}
	{todo.text}
</div>

<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>
