<script>
	import { clickOutside } from "./ClickOutside";

	let showModal = true;
</script>

<h1> Use directive </h1>

<button on:click={() => (showModal = true)}>Show Modal</button>
{#if showModal}
	<div class="box" use:clickOutside on:outclick={() => (showModal = false)}>
		Click outside me!
	</div>
{/if}

<br>

<a href="transitions"> Back </a>

<a href="adv-styling"> Advanced Styling </a>

<style>
	.box {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 4px;
		background-color: #ff3e00;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
</style>


