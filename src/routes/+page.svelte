<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import PageHeader from '$lib/components/page-header.svelte';
</script>

<PageHeader />
<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	:global(html, body, #root) {
		height: 100%;
	}
</style>
