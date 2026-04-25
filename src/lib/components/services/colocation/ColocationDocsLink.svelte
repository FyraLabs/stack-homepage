<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowRight } from '@steeze-ui/carbon-icons';
	import { resolve } from '$app/paths';
</script>

<section class="border-b border-fyra-gray-800">
	<div class="px-8 py-12 lg:py-16 flex flex-col items-center justify-center text-center">
		<p class="text-lg text-fyra-gray-300">Need a hand getting started?</p>
		<p class="mt-2 text-sm text-fyra-gray-400">Our docs walk you through it.</p>
		<a
			href={resolve('/docs')}
			class="mt-3 gap-2 text-base inline-flex items-center text-fyra-red-400 transition-colors hover:text-fyra-red-300"
		>
			Read the documentation
			<Icon src={ArrowRight} class="h-4 w-4" aria-hidden="true" />
		</a>
	</div>
</section>
