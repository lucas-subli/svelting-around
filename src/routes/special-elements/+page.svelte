<script lang='ts'>
	import Folder from './Folder.svelte';
    import RedThing from './RedThing.svelte';
	import YellowThing from './YellowThing.svelte';
	import BlueThing from './BlueThing.svelte';
    import Todo from './Todo.svelte';

	let todos = [
		{ id: 1, done: true, text: 'wash the car' },
		{ id: 2, done: false, text: 'take the dog for a walk' },
		{ id: 3, done: false, text: 'mow the lawn' }
	];

	const options = [
		{ color: 'red',   component: RedThing   },
		{ color: 'yellow', component: YellowThing },
		{ color: 'blue',  component: BlueThing  },
	];

    let selected = options[0];

	let root = [
		{
			name: 'Important work stuff',
			files: [
				{ name: 'quarterly-results.xlsx' }
			]
		},
		{
			name: 'Animal GIFs',
			files: [
				{
					name: 'Dogs',
					files: [
						{ name: 'treadmill.gif' },
						{ name: 'rope-jumping.gif' }
					]
				},
				{
					name: 'Goats',
					files: [
						{ name: 'parkour.gif' },
						{ name: 'rampage.gif' }
					]
				},
				{ name: 'cat-roomba.gif' },
				{ name: 'duck-shuffle.gif' },
				{ name: 'monkey-on-a-pig.gif' }
			]
		},
		{ name: 'TODO.md' }
	];

    const tagOptions = ['h1', 'h3', 'p'];
	let tagSelected = tagOptions[0];

    function toggle(toggled: any) {
		todos = todos.map(todo => {
			if (todo === toggled) {
				// return a new object
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// return the same object
			return todo;
		});
	}
</script>


<h1> Self (for recursion) </h1>

<Folder name="Home" files={root} expanded/>

<h1> Switcharoo component </h1>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component}/>

<h1> Sitcharoo tags</h1>

<select bind:value={tagSelected}>
	{#each tagOptions as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<svelte:element this={tagSelected}>I'm a {tagSelected} tag</svelte:element>

<h1> Immutable </h1>
<h2>Todos</h2>
{#each todos as todo}
	<Todo {todo} on:click={() => toggle(todo)}/>
{/each}

<br>

<a href="components"> Back </a>

<!-- <a href="special-elements"> Special Elements </a> -->
