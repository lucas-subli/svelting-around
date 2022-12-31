
<script lang="ts">
    import { onMount } from 'svelte';
    import Keypad from './Keypad.svelte';
    import InputField from './InputField.svelte';

	let field: InputField;

	let pin: string | undefined;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	let scoops = 1;
	let flavours = ['Mint choc chip'];
    let html = '<p>Write some text!</p>';

    let w: number;
	let h: number;
	let size = 42;
	let text = 'edit me';

    let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

    let canvas: HTMLCanvasElement;

    onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);

		function loop(t: number) {
            if (!ctx) return;
			frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.width >>> 0;

				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		}

		return () => {
			cancelAnimationFrame(frame);
		};
    });

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;

	let menu = [
		'Cookies and cream',
		'Mint choc chip',
		'Raspberry ripple'
	];

	function join(flavours: string[]) {
		if (flavours.length === 1) return flavours[0];
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}

    function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<h1> Multi select</h1>

<h2>Size</h2>

<label>
	<input type=radio bind:group={scoops} value={1}>
	One scoop
</label>

<label>
	<input type=radio bind:group={scoops} value={2}>
	Two scoops
</label>

<label>
	<input type=radio bind:group={scoops} value={3}>
	Three scoops
</label>

<h2>Flavours</h2>

<select multiple bind:value={flavours}>
	{#each menu as flavour}
		<option value={flavour}>
			{flavour}
		</option>
	{/each}
</select>

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if}


<h1> Content editable property</h1>

<div
	contenteditable="true"
	bind:innerHTML={html}
></div>

<pre>{html}</pre>

<h1> Bind inside each block</h1>

{#each todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="What needs to be done?"
			bind:value={todo.text}
		>
	</div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
	Add new
</button>

<button on:click={clear}>
	Clear completed
</button>


<h1> Client Size (read-only) </h1>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div class="measure" bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>

<h1> Get element reference </h1>

<canvas
	bind:this={canvas}
	width={32}
	height={32}
></canvas>

<h1> Binding to child </h1>

<h2 style="color: {pin ? '#333' : '#ccc'}">{view}</h2>
<Keypad bind:value={pin} on:submit={handleSubmit}/>


<h1> Binding to component instance </h1>

<InputField bind:this={field}/>

<button on:click={() => field.focus()}>Focus field</button>

<br>

<a href="bindings"> Back </a>

<a href="lifecycle"> Lifecycle </a>


<!-- Styles -->
<style>
	.measure { display: inline-block; }
	span { word-break: break-all; }

    canvas {
		width: 128px;
		height: 128px;
		background-color: #666;
		-webkit-mask: url(/images/pokeball.svg) 50% 50% no-repeat;
		mask: url(/images/pokeball.svg) 50% 50% no-repeat;
	}
</style>