<script lang="ts">
	import heroStar from '$lib/assets/hero-star.svg';
	import heroMark from '$lib/assets/hero-mark.svg';
	import heroWave from '$lib/assets/hero-wave.svg';
	import heroDot from '$lib/assets/hero-dot.svg';
	import heroDot2 from '$lib/assets/hero-dot-2.svg';
	import Button from './button.svelte';
</script>

<div class="relative">
	<div class="max-w-screen-xl mx-auto w-full mt-20">
		<div class="flex items-center gap-4">
			<img src={heroStar} width="52" height="52" alt="Hero star" />
			<span class="text-2xl font-medium c-[#4361EE]">The Best Podcast Platform</span>
		</div>

		<div class="relative flex gap-8 mt-6 justify-between">
			<section>
				<h1 class="text-6xl font-medium leading-snug">
					Let’s Make What You Heard are Preciously Worth it to Hear
				</h1>
				<p class="c-gray-5 text-2xl mt-2 mb-14">
					Create, distribute, and monetize your podcast all for free
				</p>

				<Button size="medium">Explore now</Button>

				<div class="mt-12 flex items-center gap-24">
					<div class="flex flex-col">
						<b class="text-4xl font-semibold">2M+</b>
						<span>Listeners</span>
					</div>
					<div class="flex flex-col">
						<b class="text-4xl font-semibold">5M+</b>
						<span>Subscribers</span>
					</div>
				</div>
			</section>
			<img src={heroMark} alt="Podcast owner" class="-mt-16" />
			<img src={heroWave} alt="Sound wave" class="absolute bottom-60px right-345px" />
		</div>
		<img src={heroDot} alt="Dot background" class="absolute left-0 top-67px" />
		<img src={heroDot2} alt="Dot 2 background" class="absolute right-0 -bottom-30px" />
	</div>
</div>
