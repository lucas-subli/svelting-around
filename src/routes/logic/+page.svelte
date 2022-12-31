<script>
    import Thing from './Thing.svelte';

	let user = { loggedIn: false };
    let x = 0;
    let cats = [
		{ id: 'id_00001', name: 'Thunder cat' },
		{ id: 'id_00002', name: 'Alice in wonderland cat' },
		{ id: 'id_00003', name: 'Dead and alive cat' }
	];
    let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];
	
	let promise = getRandomNumber();

    
    
    $: if (x < 0) x = 0;
    
	function handleClick() {
        things = things.slice(1);
	}
    
	function toggle() {
        user.loggedIn = !user.loggedIn;
	}
    
    async function getRandomNumber() {
        await new Promise(r => setTimeout(r, 2000));

        const res = Math.floor(Math.random() * 100);

        if (res > 50) {
            return res;
        } else {
            throw new Error(`Number ${res} is too small, try again`);
        }
    }

    function handleOtherClick() {
        promise = getRandomNumber();
    }

    function increment() {
        x++;
    }
    
    function decrement() {
        x--;
    }
</script>

<h1>Conditional rendering</h1>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}

<h1>Same same, but simpler</h1>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}

<h1> Chaining conditions </h1>

<button on:click={decrement} disabled={x <= 0}>-</button>
<button on:click={increment}>+</button>

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}


<!-- Loops -->

<h1>Looping</h1>

<ul>
	{#each cats as { id, name }, i}
		<li>
			{i + 1}: {id} - {name}
		</li>
	{/each}
</ul>

<h1>It always changes the last element</h1>

<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing}
	<Thing name={thing.name}/>
{/each}


<h1>If you need anything else you need KEYS</h1>

{#each things as thing (thing.id) }
	<Thing name={thing.name}/>
{/each}


<!-- Promises -->
<h1> Awaiting stuff </h1>

<button on:click={handleOtherClick}>
	generate random number bigger than 50
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p style="color: green">The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}


<!-- Navigation -->
<a href="props"> Back </a>

<a href="events"> Events </a>