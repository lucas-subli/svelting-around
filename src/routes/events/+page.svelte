<script lang="ts">
    import Inner from './Inner.svelte';
    import Outer from './outer.svelte';
    import { CustomButton } from '$lib/components';

	let m = { x: 0, y: 0 };
    let otherm = { x: 0, y: 0 };
    
	function handleMousemove(event: MouseEvent) {
        m.x = event.clientX;
		m.y = event.clientY;
	}
    
    function handleClick() {
        alert('no more alerts')
	}

    function handleCustomClick() {
        alert('Ywah!')
	}

    function handleMessage(event: CustomEvent) {
        alert(event.detail.text);
    }

</script>

<h1>DOM Events</h1>

<div class="superdiv" on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<h1>Same thing but inline</h1>

<div class="superdiv" on:mousemove="{e => otherm = { x: e.clientX, y: e.clientY }}">
	The mouse position is {otherm.x} x {otherm.y}
</div>

<h1>Event modifiers (will only trigger once)</h1>

<button on:click|once={handleClick}>
	Click me
</button>


<h1>Event dipatcher from child</h1>
<Inner on:message={handleMessage}/>

<h1>Event dipatcher from nested child</h1>
<Outer on:message={handleMessage}/>

<h1>Dom event from child</h1>
<CustomButton on:click={handleCustomClick}/>

<!-- Navigation -->
<br>
<a href="logic"> Back </a>

<a href="bindings"> Bindings </a>

<!-- Styles -->
<style>
	.superdiv { width: 400px; height: 400px; color: white; background: green; }
</style>