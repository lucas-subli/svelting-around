<script lang='ts'>
	let input: HTMLInputElement;

	export function focus() {
		input.focus();
	}
</script>

<input bind:this={input} />