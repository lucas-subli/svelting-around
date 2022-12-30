<script lang="ts">
    import { WithProps } from '$lib/components';
    import { WithSpreadProps } from '$lib/components';

    const rules = {
		who: 'You',
        giveYouUp: false,
        letYouDown: false,
        makeYouCry: false,
        hurtYou: false,
	};
</script>

<h1> This page is all about props </h1>

<p>What is the answer to life the universe and everything else (with props)?.</p>

<p> Default props </p>
<WithProps />

<p> Custom props </p>
<WithProps answer={42} />

<h1> You can spread props </h1>

<WithSpreadProps {...rules} />


<!-- Navigation -->

<a href="/"> Back </a>

<a href="logic"> Logic </a>