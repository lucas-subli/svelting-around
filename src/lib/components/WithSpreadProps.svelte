<script lang="ts">
	export let who: string;
	export let giveYouUp: boolean;
	export let letYouDown: boolean;
	export let makeYouCry: boolean;
	export let hurtYou: boolean;
</script>

<p>
	Give {who} up: {giveYouUp ? 'yes' : 'no'}<br>
	Let {who} down: {letYouDown ? 'yes' : 'no'}<br>
	Make {who} cry: {makeYouCry ? 'yes' : 'no'}<br>
	Hurt {who}: {hurtYou ? 'yes' : 'no'}<br>
</p>