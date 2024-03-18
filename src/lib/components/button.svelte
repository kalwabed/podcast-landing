<script lang="ts">
	export let size: 'small' | 'medium' = 'small';

	const sizes = {
		small: 'px-4 py-2',
		medium: 'py-4 px-12 text-lg'
	};
</script>

<button class={`flex items-center justify-center font-medium text-white ${sizes[size]}`}>
	<slot>empty</slot>
</button>

<style>
	button {
		border-radius: 30px;
		background: linear-gradient(271deg, #4361ee 21.33%, #4795f1 86.8%);
	}
</style>
