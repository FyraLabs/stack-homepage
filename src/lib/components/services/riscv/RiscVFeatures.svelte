<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { DataCenter } from '@steeze-ui/carbon-icons';
</script>

<section class="border-b border-fyra-gray-800">
	<div
		class="lg:grid-cols-2 lg:divide-x lg:divide-y-0 grid grid-cols-1 divide-y divide-fyra-gray-800"
	>
		<!-- Left: headline -->
		<div class="px-8 py-12 lg:px-10 lg:py-16 flex flex-col justify-center">
			<h2 class="text-4xl leading-tight font-semibold tracking-tight text-fyra-gray-50">
				Open all the way down.
			</h2>

			<p class="mt-6 text-base leading-relaxed text-fyra-gray-400">
				RISC-V is the open instruction set architecture — no licensing fees, no black boxes, no
				vendor lock-in at the hardware level. Stack runs RISC-V VPS on DeepComputing servers, built
				specifically for cloud and compute workloads.
			</p>
			<p class="mt-3 text-base leading-relaxed text-fyra-gray-400">
				Whether you're porting software, testing RISC-V compatibility, or just want a machine that's
				genuinely open, these servers are for you.
			</p>
			<p class="mt-3 text-base leading-relaxed text-fyra-gray-300">Same Stack. Different ISA.</p>
		</div>

		<!-- Right: bento grid -->
		<div class="grid grid-cols-2 gap-px bg-fyra-gray-800">
			<!-- DeepComputing partnership — full width -->
			<div class="p-8 relative col-span-2 overflow-hidden bg-fyra-gray-900">
				<div class="gap-4 relative flex items-start justify-between">
					<div>
						<p class="font-medium tracking-widest text-[11px] text-fyra-gray-600 uppercase">
							Hardware partner
						</p>
						<p class="mt-2 text-lg font-semibold text-fyra-gray-50">DeepComputing</p>
						<p class="mt-1.5 max-w-sm text-sm leading-relaxed text-fyra-gray-400">
							DeepComputing builds RISC-V hardware for the modern era — from development boards to
							datacenter-grade compute nodes. Our RISC-V VPS runs on their servers.
						</p>
						<a
							href="https://deepcomputing.io"
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 text-sm font-medium inline-block text-fyra-red-400 transition-colors duration-100 hover:text-fyra-red-300"
						>
							deepcomputing.io →
						</a>
					</div>
					<!-- DC logo placeholder — replace with actual logo if available -->
					<div
						class="h-12 w-12 sm:flex hidden shrink-0 items-center justify-center border border-fyra-gray-800 bg-fyra-gray-800 text-fyra-gray-600"
					>
						<Icon src={DataCenter} class="h-6 w-6" aria-hidden="true" />
					</div>
				</div>
			</div>

			<!-- Open ISA -->
			<div class="p-8 bg-fyra-gray-900">
				<p class="text-lg leading-snug font-semibold text-fyra-gray-50">Open ISA</p>
				<p class="mt-1.5 text-sm leading-relaxed text-fyra-gray-400">
					RISC-V is fully open — no royalties, no NDAs, no architecture secrets.
				</p>
			</div>

			<!-- Linux native -->
			<div class="p-8 bg-fyra-gray-900">
				<p class="text-lg font-semibold text-fyra-gray-50">Linux native</p>
				<p class="mt-1.5 text-sm leading-relaxed text-fyra-gray-400">
					Run Ultramarine, Debian, or any RISC-V Linux distro. Full root access.
				</p>
			</div>

			<!-- Real support -->
			<div class="p-8 bg-fyra-gray-900">
				<p class="text-lg font-semibold text-fyra-gray-50">Real support</p>
				<p class="mt-1.5 text-sm leading-relaxed text-fyra-gray-400">
					By the engineers that maintain the hardware — not a ticket queue.
				</p>
			</div>

			<!-- Honest pricing -->
			<div class="p-8 bg-fyra-gray-900">
				<p class="text-lg font-semibold text-fyra-gray-50">Honest pricing</p>
				<p class="mt-1.5 text-sm leading-relaxed text-fyra-gray-400">
					No hidden fees, no egress charges, no surprise bills. Flat rate.
				</p>
			</div>
		</div>
	</div>
</section>
