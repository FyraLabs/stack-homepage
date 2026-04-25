<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<!-- Hero -->
<div class="px-6 pt-14 lg:px-8 relative isolate overflow-hidden border-b border-fyra-gray-800">
	<div
		aria-hidden="true"
		class="inset-x-0 -top-40 blur-3xl sm:-top-80 absolute -z-10 transform-gpu overflow-hidden"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="w-144.5 sm:left-[calc(50%-30rem)] sm:w-288.75 relative left-[calc(50%-11rem)] aspect-1155/678 -translate-x-1/2 rotate-30 bg-linear-to-tr from-fyra-red-950 to-fyra-red-700 opacity-25"
		></div>
	</div>

	<div class="max-w-4xl py-24 sm:py-32 mx-auto text-center">
		<!-- Partnership badge -->
		<div class="mb-8 flex justify-center">
			<div
				class="gap-2 px-3.5 py-2 text-sm inline-flex items-center border border-fyra-gray-700 bg-fyra-gray-800/60 text-fyra-gray-400"
			>
				<span>In partnership with</span>
				<span class="font-semibold text-fyra-gray-100">DeepComputing</span>
			</div>
		</div>

		<h1
			class="mb-2 text-4xl font-semibold tracking-tight sm:text-6xl text-balance text-fyra-gray-50"
		>
			The open architecture,
		</h1>
		<h2 class="mb-8 text-4xl font-semibold tracking-tight sm:text-6xl text-balance">
			<span class="text-fyra-red-400">now in the cloud.</span>
		</h2>
		<p class="max-w-lg text-base sm:text-lg/7 mx-auto text-fyra-gray-400">
			RISC-V VPS powered by DeepComputing hardware. Run your workloads on real open-ISA silicon — no
			proprietary lock-in at any layer of the stack.
		</p>
		<div class="mt-10 gap-6 flex flex-wrap items-center justify-center">
			<a
				href="#plans"
				class="px-6 py-2.5 text-sm font-semibold text-white bg-fyra-red-500 transition-colors duration-150 hover:bg-fyra-red-400"
			>
				View plans
			</a>
			<a
				href={resolve('/')}
				class="text-sm text-fyra-gray-400 transition-colors duration-100 hover:text-fyra-gray-200"
			>
				Pre-reserve <span aria-hidden="true">→</span>
			</a>
		</div>
	</div>

	<div
		aria-hidden="true"
		class="inset-x-0 blur-3xl sm:top-[calc(100%-30rem)] absolute top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="w-144.5 sm:left-[calc(50%+36rem)] sm:w-288.75 relative left-[calc(50%+3rem)] aspect-1155/678 -translate-x-1/2 bg-linear-to-tr from-fyra-red-950 to-fyra-red-700 opacity-25"
		></div>
	</div>
</div>
