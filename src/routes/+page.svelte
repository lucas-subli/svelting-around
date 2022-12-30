<script>
    import Nested from './Nested.svelte';
    import { Shared } from '$lib/components';

	// Variables
	let name = 'Rick';
	let src = 'images/dancing.gif';
    let htmlInject = `here is some <strong>Injected HTML!!!</strong>`;
    let count = 0;
	let numbers = [1, 2, 3, 4];

	// Reactive variables
    $: doubled = count * 2;

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);

	// Functions
    function incrementCount() {
		count += 1;
	}

    function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}
</script>

<!-- The basics -->
<h1>A simple text</h1>

<p>I am a text</p>

<h1>Text from varibale</h1>

<p>The variable is {name.toUpperCase()}!</p>

<h1>An image from variable</h1>

<img {src} alt="{name} dancing" />

<h1>Styling</h1>

<p class="style">Super stylized</p>

<h1>Injecting HTML</h1>

<p>{@html htmlInject}</p>


<!-- Some component shenenigans -->
<h1>Importing components</h1>

<Nested />

<h1>Importing from a shared folder</h1>

<Shared />


<!-- Reactivity -->
<h1> Button with counter </h1>

<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<h1> Referenced changes </h1>

<p>The doubled count is {doubled}.</p>

<h1> Reactively keep the counter below 10 </h1>

<p>(Make it go above 10 to see)</p>

<h1>Reactivity only works on assignments</h1>

<p>Adding a number to the array without assignin it won't work</p>
<p>nor will methods such as .pop() .add() or nested assignments</p>
<p>Thus you can use numbers = [...numbers, numbers.length + 1];</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<!-- Navigation -->
<h1>This is getting cluttered let's move to a new page</h1>

<a href="/props">Props Page</a>

<!-- Styling -->
<style>
	.style {
		color: blue;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
	}
</style>
