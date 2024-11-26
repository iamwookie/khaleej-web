<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Khaleej vACC</title>
	<meta name="description" content="Khaleej vACC is a virtual area control center for the Bahrain and Kuwait region on the VATSIM network." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<Header />
{@render children()}
<footer>Hello this is my footer</footer>