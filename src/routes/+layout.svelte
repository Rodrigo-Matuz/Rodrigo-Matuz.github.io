<script lang="ts">
	import './layout.css';
	import coding from '$lib/assets/coding.png';

	const { children } = $props();
</script>

<svelte:head>
	<title>Rodrig-Matuz • Portfolio</title>
	<link rel="icon" href={coding} />
</svelte:head>
{@render children()}
