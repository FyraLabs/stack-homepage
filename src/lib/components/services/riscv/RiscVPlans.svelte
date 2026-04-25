<script lang="ts">
	import { riscvPlans } from '$lib/data/riscvPlans';

	let { selectedPlanName = $bindable('RISCV-XS') }: { selectedPlanName?: string } = $props();

	let currentPlan = $derived(riscvPlans.find((p) => p.name === selectedPlanName) ?? riscvPlans[0]);
</script>

<!-- Header -->
<div id="plans" class="px-6 py-8 md:px-10 border-b border-fyra-gray-800">
	<div class="gap-2.5 flex items-center">
		<h2 class="text-3xl font-semibold tracking-tight md:text-4xl text-fyra-gray-50">
			Priced fairly.
		</h2>
	</div>
	<p class="mt-2 text-sm text-fyra-gray-400">Simple, flat-rate plans with no surprise fees.</p>
</div>

<div class="grid grid-cols-7">
	<div class="p-5 col-span-7 flex flex-col justify-between border-b border-fyra-gray-800">
		<!-- top -->
		<div class="flex min-w-full items-center justify-between">
			<h2 class="text-xl font-semibold tracking-wide lg:text-2xl">
				{currentPlan.name}
			</h2>
			<h3 class="text-xl font-semibold tracking-tight lg:text-2xl">
				<span class="font-medium tracking-wide">$</span>{currentPlan.price}<span
					class="text-sm leading-3 font-medium lg:text-base">/mo</span
				>
			</h3>
		</div>
		<!-- middle -->
		<div
			class="mt-8 gap-x-8 gap-y-1.5 text-base md:grid-cols-2 md:gap-y-3.5 lg:mt-16 lg:text-[1.05rem] grid grid-cols-1"
		>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Architecture</p>
				<p class="tracking-tight">RISC-V (RV64GC)</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Storage</p>
				<p class="tracking-tight">{currentPlan.storage}GB NVMe</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">CPU Cores</p>
				<p class="tracking-tight">{currentPlan.cpu}x cores</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Memory</p>
				<p class="tracking-tight">{currentPlan.ram}GB</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Network</p>
				<p class="tracking-tight">
					{#if currentPlan.network === '1'}1Gbps{:else}{currentPlan.network}Mbps{/if} Fair-use
				</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Hardware</p>
				<p class="tracking-tight">DeepComputing</p>
			</div>
		</div>
	</div>
</div>

<div class="lg:grid-cols-4 grid grid-cols-2 divide-x divide-y divide-fyra-gray-800">
	{#each riscvPlans as plan, i (plan.name)}
		<button
			onclick={() => (selectedPlanName = plan.name)}
			class="p-4 col-span-1 w-full text-left duration-200 {selectedPlanName === plan.name
				? 'bg-fyra-gray-800'
				: 'bg-fyra-gray-900 hover:bg-fyra-gray-800'} {i === riscvPlans.length - 1
				? 'border-b border-fyra-gray-800'
				: ''}"
		>
			<div class="gap-4 flex items-start justify-between">
				<h4 class="text-base/5 font-medium md:text-[1.1rem]/6">{plan.name}</h4>
				<h3 class="text-sm font-medium tracking-tighter lg:text-base">
					<span class="font-normal tracking-wide">$</span>{plan.price}<span class="text-sm"
						>/mo</span
					>
				</h3>
			</div>
			<div class="mt-4 md:mt-6 text-left">
				<p class="text-xs text-fyra-gray-400">
					{plan.cpu} cores
					<span class="px-0.5 text-fyra-red-500">•</span>
					{plan.ram}GB RAM
					<span class="md:inline hidden">
						<span class="px-0.5 text-fyra-red-500">•</span>
						{plan.storage}GB NVMe
					</span>
				</p>
			</div>
		</button>
	{/each}
</div>
