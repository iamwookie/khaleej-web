<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Khaleej vACC</title>
    <meta name="theme-color" content="#d8c89f" />
	<meta name="description" content="Khaleej vACC is a virtual area control center for the Bahrain and Kuwait region on the VATSIM network." />
</svelte:head>

{@render children()}
