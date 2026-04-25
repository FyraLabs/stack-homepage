<script lang="ts">
	import { colocationPlans } from '$lib/data/colocationPlans';

	let { selectedPlanName = $bindable('STACK-1U') }: { selectedPlanName?: string } = $props();

	let currentPlan = $derived(
		colocationPlans.find((p) => p.name === selectedPlanName) ?? colocationPlans[0]
	);
</script>

<div class="px-6 py-8 md:px-10 border-b border-fyra-gray-800">
	<h2 class="text-3xl font-semibold tracking-tight md:text-4xl text-fyra-gray-50">
		Priced fairly.
	</h2>
	<p class="mt-2 text-sm text-fyra-gray-400">Simple, flat-rate plans with no surprise fees.</p>
</div>
<div class="grid grid-cols-7">
	<div class="p-5 col-span-7 flex flex-col justify-between border-b border-fyra-gray-800">
		<!-- top -->
		<div class="flex min-w-full items-center justify-between">
			<h2 class="text-xl font-semibold tracking-wide lg:text-2xl">
				{currentPlan.name}
			</h2>
			<div class="gap-3 flex items-center">
				<div class="text-right">
					<h3 class="text-xl font-semibold tracking-tight lg:text-2xl">
						{#if currentPlan.originalPrice}
							<span class="mr-1.5 font-medium tracking-wide text-fyra-gray-500 line-through"
								>${currentPlan.originalPrice}</span
							>
						{/if}
						<span class="font-medium tracking-wide">$</span>{currentPlan.price}<span
							class="text-sm leading-3 font-medium lg:text-base">/mo</span
						>
					</h3>
				</div>
				{#if currentPlan.originalPrice}
					<span
						class="px-2.5 py-1 text-xs font-medium rounded-full bg-fyra-red-500/10 text-fyra-red-400"
						>Limited time</span
					>
				{/if}
			</div>
		</div>
		<!-- middle -->
		<div
			class="mt-8 gap-x-8 gap-y-1.5 text-base md:grid-cols-2 md:gap-y-3.5 lg:mt-16 lg:text-[1.05rem] grid grid-cols-1"
		>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Rack Units</p>
				<p class="tracking-tight">{currentPlan.units}U</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Bandwidth</p>
				<p class="tracking-tight">{currentPlan.bandwidth} Fair-use</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">Power</p>
				<p class="tracking-tight">{currentPlan.power}W</p>
			</div>
			<div class="flex justify-between">
				<p class="text-fyra-gray-400">IP Addresses</p>
				<p class="tracking-tight">{currentPlan.ips} IPs</p>
			</div>
		</div>
	</div>
</div>

<div class="lg:grid-cols-3 grid grid-cols-2 divide-x divide-y divide-fyra-gray-800">
	{#each colocationPlans as plan, i (plan.name)}
		<button
			onclick={() => (selectedPlanName = plan.name)}
			class="p-4 col-span-1 w-full text-left duration-200 {selectedPlanName === plan.name
				? 'bg-fyra-gray-800'
				: 'bg-fyra-gray-900 hover:bg-fyra-gray-800'} {i === colocationPlans.length - 1
				? 'border-b border-fyra-gray-800'
				: ''}"
		>
			<div class="gap-4 flex items-start justify-between">
				<h4 class="text-base/5 font-medium md:text-[1.1rem]/6">{plan.name}</h4>
				<div class="text-right">
					<h3 class="text-sm font-medium tracking-tighter lg:text-base">
						{#if plan.originalPrice}
							<span class="mr-1 font-normal tracking-wide text-fyra-gray-500 line-through"
								>${plan.originalPrice}</span
							>
						{/if}
						<span class="font-normal tracking-wide">$</span>{plan.price}<span class="text-sm"
							>/mo</span
						>
					</h3>
				</div>
			</div>
			<div class="mt-4 md:mt-6 text-left">
				<p class="text-xs text-fyra-gray-400">
					{plan.units}U
					<span class="px-0.5 text-fyra-red-500">•</span>
					{plan.power}W
					<span class="px-0.5 text-fyra-red-500">•</span>
					{plan.bandwidth}
				</p>
			</div>
		</button>
	{/each}
</div>

<div class="px-5 py-3 border-b border-fyra-gray-800 text-center">
	<p class="text-xs text-fyra-gray-400">
		Need something custom?
		<a
			href="mailto:contact@fyrastack.com"
			class="text-fyra-red-400 transition-colors hover:text-fyra-red-300">Contact us</a
		>
		for bulk orders and non-profit discounts.
	</p>
</div>
