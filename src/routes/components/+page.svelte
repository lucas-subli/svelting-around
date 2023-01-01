<script>
	import Box from './Box.svelte';
    import ContactCard from './ContactCard.svelte';
    import Project from './Project.svelte'
	import Comment from './Comment.svelte'
    import Hoverable from './Hoverable.svelte';
</script>

<h1>Component with a slot for children</h1>

<Box>
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>

<h1>Slots can have fallbacl</h1>

<Box />

<h1> Named slots (default) </h1>

<ContactCard/>


<h1> Named slots (in use)</h1>


<ContactCard>
	<span slot="name">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>

    <span slot="email">
		hotshot98@hotmail.com
	</span>
</ContactCard>


<h1> Conditional on slot content </h1>

<h2>
	Projects
</h2>

<ul>
	<li>
		<Project
			title="Add TypeScript support"
			tasksCompleted={25}
			totalTasks={57}
		>
			<div slot="comments">
				<Comment name="Ecma Script" postedAt={new Date('2020-08-17T14:12:23')}>
					<p>Those interface tests are now passing.</p>
				</Comment>
			</div>
		</Project>
	</li>
	<li>
		<Project
			title="Update documentation"
			tasksCompleted={18}
			totalTasks={21}
		/>
	</li>
</ul>

<h1> Passing props on slots </h1>

<Hoverable let:hovering={active}>
	<div class='hoverable' class:active>
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class='hoverable' class:active>
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class='hoverable' class:active>
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<a href="adv-styling"> Back </a>

<a href="special-elements"> Special Elements </a>


<style>
	h1 {
		font-weight: 300;
		margin: 0 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem;
		display: flex;
	}

	@media (max-width: 600px) {
		ul {
			flex-direction: column;
		}
	}

	li {
		padding: 0.5rem;
		flex: 1 1 50%;
		min-width: 200px;
	}

    .hoverable {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>