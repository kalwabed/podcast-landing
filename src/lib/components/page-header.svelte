<script>
	import logo from '$lib/assets/logo.svg';
	import Button from './button.svelte';

	const navs = ['Home', 'About', 'Feature', 'Topic', 'Pricing', 'Review'];
</script>

<div class="py4 font-sans">
	<nav class="max-w-screen-xl mx-auto w-full flex items-center justify-between">
		<a href="/">
			<img src={logo} alt="Logo" />
		</a>
		<ul class="flex items-center gap-10">
			{#each navs as nav (nav)}
				<li><a class="hover:underline font-medium" href="/">{nav}</a></li>
			{/each}

			<span class="h-[30px] w-[1px] bg-gray-300" aria-hidden="true"></span>
			<a class="hover:underline font-medium" href="/">Login account</a>
			<Button>Subscribe</Button>
		</ul>
	</nav>
</div>
