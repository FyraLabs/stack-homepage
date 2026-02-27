<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>Fyra Stack</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	{@render children()}
</div>
