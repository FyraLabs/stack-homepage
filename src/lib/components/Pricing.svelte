<script lang="ts">
	import { resolve } from '$app/paths';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Checkmark } from '@steeze-ui/carbon-icons';

	type ServiceHref = '/services/vps' | '/services/colocation';

	const plans = [
		{
			name: 'Virtual Private Servers',
			href: '/services/vps' as ServiceHref,
			price: '5',
			description: 'Scales to $34/mo.',
			features: [
				'Cascade Lake vCPUs',
				'SAS3 SSD storage',
				'1 Gbps fair-use uplink',
				'Dedicated IPv4 + /64 IPv6',
				'Full root access',
				'Out-of-band serial console',
				'Ultramarine Linux integration',
				'Cancel anytime'
			]
		},
		{
			name: 'Server Colocation',
			href: '/services/colocation' as ServiceHref,
			price: '50',
			description: 'Scales to $280/mo.',
			features: [
				'Up to 6U rackspace',
				'Up to 700W power budget',
				'1 Gbps fair-use uplink',
				'Dedicated IPv4 + IPv6',
				'IPMI remote management',
				'Chicago data center',
				'24/7 physical security',
				'Cancel anytime'
			]
		}
	];
</script>

<section class="border-b border-fyra-gray-800">
	<!-- Header -->
	<div class="px-6 py-8 md:px-10 border-b border-fyra-gray-800">
		<h2 class="text-3xl font-semibold tracking-tight md:text-4xl text-fyra-gray-50">
			Priced fairly.
		</h2>
		<p class="mt-2 text-sm text-fyra-gray-400">Simple, flat-rate plans. No surprise fees.</p>
	</div>

	<!-- Plans -->
	<div class="md:grid-cols-2 grid grid-cols-1 gap-px bg-fyra-gray-800">
		{#each plans as plan (plan.href)}
			<div class="flex flex-col bg-fyra-gray-900">
				<!-- Price block -->
				<div
					class="gap-4 px-6 py-8 md:px-10 flex items-end justify-between border-b border-fyra-gray-800"
				>
					<div>
						<p class="font-medium tracking-widest text-[11px] text-fyra-gray-400 uppercase">
							{plan.name}
						</p>
						<div class="mt-3 gap-1 flex items-baseline">
							<span class="text-4xl font-bold tracking-tight text-fyra-gray-50">${plan.price}</span>
							<span class="text-sm font-medium text-fyra-gray-400">/mo</span>
						</div>
						<p class="mt-1 text-sm text-fyra-gray-400">{plan.description}</p>
					</div>
					<a
						href={resolve(plan.href)}
						class="text-sm font-medium shrink-0 text-fyra-red-400 transition-colors duration-100 hover:text-fyra-red-300"
					>
						View plans <span aria-hidden="true">→</span>
					</a>
				</div>

				<!-- Features -->
				<div class="lg:grid-cols-2 grid grid-cols-1 gap-px bg-fyra-gray-800">
					{#each plan.features as feature (feature)}
						<div class="gap-3 px-6 py-3.5 md:px-10 flex items-center bg-fyra-gray-900">
							<Icon src={Checkmark} class="h-3 w-3 shrink-0 text-fyra-red-500" aria-hidden="true" />
							<span class="text-sm text-fyra-gray-400">{feature}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
