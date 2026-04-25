<script lang="ts">
	import { resolve } from '$app/paths';
	import { fade, slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronDown, Close, Menu } from '@steeze-ui/carbon-icons';

	type InternalHref = '/' | '/about' | '/services/vps' | '/services/colocation' | '/docs'; // can we just use sveltekit resolve here

	let isMobileMenuOpen = $state(false);
	let openDropdown = $state<string | null>(null);

	const servicesItems = [
		{
			label: 'VPS',
			description: 'VPS hosting from $5/mo.',
			href: '/services/vps' as InternalHref
		},
		{
			label: 'Colocation',
			description: 'Colocation hosting, from $50/mo.',
			href: '/services/colocation' as InternalHref
		}
	];

	const aboutItems = [
		{
			label: 'About us',
			description: "Why we're building this.",
			href: '/about' as InternalHref
		},
		{
			label: 'Documentation',
			description: 'What to expect when using Stack.',
			href: '/docs' as InternalHref
		},
		{
			label: 'Blog',
			description: 'Updates and engineering notes!',
			href: 'https://blog.fyralabs.com/'
		}
	];

	function toggleDropdown(name: string) {
		openDropdown = openDropdown === name ? null : name;
	}

	function closeAll() {
		openDropdown = null;
		isMobileMenuOpen = false;
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') closeAll();
	}}
	onclick={(e) => {
		if (!(e.target as Element).closest('header')) openDropdown = null;
	}}
/>

<header class="top-0 backdrop-blur-sm sticky z-50 bg-fyra-gray-900">
	<a
		href={resolve('/services/colocation')}
		class="gap-2 px-4 py-2.5 text-sm font-medium flex items-center justify-center bg-fyra-red-600 text-center text-fyra-gray-50 transition-colors hover:bg-fyra-red-600"
	>
		<span class="font-semibold">Colocation is here.</span>
		<!-- <span class="text-fyra-red-200"
			>Launching April 13th, get 1U colocation at just $50/mo promo price! Ship your servers now.</span
		> -->
		<span class="text-fyra-red-200"
			>$10/mo off all plans, 1U from $50/mo. Sign up and ship your servers whenever you're ready.
			First servers go online April 13th!</span
		>
		<span class="text-fyra-red-300">→</span>
	</a>
	<div class="max-w-6xl mx-auto">
		<div
			class="h-12 gap-4 px-4 flex items-center justify-between border-x border-b border-fyra-gray-800"
		>
			<!-- Logo -->
			<a
				href={resolve('/')}
				class="gap-1.5 rounded-xs px-1 py-1 flex shrink-0 items-center transition-colors duration-100 hover:bg-fyra-gray-800"
			>
				<img src="/logo.svg" alt="Fyra Stack" class="h-5 w-5" />
				<span class="text-base font-semibold tracking-tight text-fyra-gray-50">Stack</span>
			</a>

			<!-- Center nav -->
			<nav class="md:flex hidden items-center" aria-label="Main">
				<!-- Services dropdown -->
				<div class="relative">
					<button
						type="button"
						onclick={() => toggleDropdown('services')}
						class="gap-1 rounded-xs px-2.5 py-1.5 flex items-center text-[13px] transition-colors duration-100
							{openDropdown === 'services'
							? 'bg-fyra-gray-800 text-fyra-gray-50'
							: 'text-fyra-gray-200 hover:bg-fyra-gray-800 hover:text-fyra-gray-100'}"
						aria-expanded={openDropdown === 'services'}
					>
						Services
						<Icon
							src={ChevronDown}
							class="h-2.5 w-2.5 mt-px shrink-0 text-fyra-gray-400 transition-transform duration-150 {openDropdown ===
							'services'
								? 'rotate-180'
								: ''}"
							aria-hidden="true"
						/>
					</button>

					{#if openDropdown === 'services'}
						<div
							transition:fade={{ duration: 100 }}
							class="right-0 mt-2.5 w-64 rounded-xs shadow-sm absolute top-full overflow-hidden border border-fyra-gray-800 bg-fyra-gray-900 shadow-fyra-gray-950/80"
						>
							{#each servicesItems as item (item.href)}
								<a
									href={resolve(item.href as InternalHref)}
									onclick={closeAll}
									class="gap-0.5 px-3.5 py-3 flex flex-col transition-colors duration-100 hover:bg-fyra-gray-800"
								>
									<span class="font-medium text-[13px] text-fyra-gray-100">{item.label}</span>
									<span class="text-[12px] text-fyra-gray-300">{item.description}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Static links -->
				<!-- {#each ["Docs", "Pricing"] as label}
					<a
						href="{label === 'Docs' ? '/docs' : '/pricing'}"
						class="flex items-center rounded-xs px-2.5 py-1.5 text-[13px] text-fyra-gray-200 hover:text-fyra-gray-100 hover:bg-fyra-gray-800 transition-colors duration-100"
					>{label}</a>
				{/each} -->

				<!-- About dropdown -->
				<div class="relative">
					<button
						type="button"
						onclick={() => toggleDropdown('about')}
						class="gap-1 rounded-xs px-2.5 py-1.5 flex items-center text-[13px] transition-colors duration-100
							{openDropdown === 'about'
							? 'bg-fyra-gray-800 text-fyra-gray-50'
							: 'text-fyra-gray-200 hover:bg-fyra-gray-800 hover:text-fyra-gray-100'}"
						aria-expanded={openDropdown === 'about'}
					>
						About
						<Icon
							src={ChevronDown}
							class="h-2.5 w-2.5 mt-px shrink-0 text-fyra-gray-400 transition-transform duration-150 {openDropdown ===
							'about'
								? 'rotate-180'
								: ''}"
							aria-hidden="true"
						/>
					</button>

					{#if openDropdown === 'about'}
						<div
							transition:fade={{ duration: 100 }}
							class="right-0 mt-2.5 w-56 rounded-xs shadow-sm absolute top-full overflow-hidden border border-fyra-gray-800 bg-fyra-gray-900 shadow-fyra-gray-950/80"
						>
							{#each aboutItems as item (item.href)}
								{#if item.href.startsWith('/')}
									<a
										href={resolve(item.href as InternalHref)}
										onclick={closeAll}
										class="gap-0.5 px-3.5 py-3 flex flex-col transition-colors duration-100 hover:bg-fyra-gray-800"
									>
										<span class="font-medium text-[13px] text-fyra-gray-100">{item.label}</span>
										<span class="text-[12px] text-fyra-gray-300">{item.description}</span>
									</a>
								{:else}
									<a
										href={item.href}
										onclick={closeAll}
										rel="external"
										class="gap-0.5 px-3.5 py-3 flex flex-col transition-colors duration-100 hover:bg-fyra-gray-800"
									>
										<span class="font-medium text-[13px] text-fyra-gray-100">{item.label}</span>
										<span class="text-[12px] text-fyra-gray-300">{item.description}</span>
									</a>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			</nav>

			<!-- Right side -->
			<div class="gap-1 md:hidden flex items-center">
				<!-- CTA -->

				<!-- Mobile menu toggle -->
				<button
					type="button"
					onclick={() => {
						isMobileMenuOpen = !isMobileMenuOpen;
						openDropdown = null;
					}}
					class="rounded-xs p-1.5 md:hidden flex items-center justify-center text-fyra-gray-200 transition-colors duration-100 hover:bg-fyra-gray-800 hover:text-fyra-gray-100"
					aria-label="Open menu"
				>
					{#if isMobileMenuOpen}
						<Icon src={Close} class="h-4 w-4" aria-hidden="true" />
					{:else}
						<Icon src={Menu} class="h-4 w-4" aria-hidden="true" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</header>

<!-- Mobile drawer -->
{#if isMobileMenuOpen}
	<div
		transition:fade={{ duration: 120 }}
		class="inset-0 top-11 md:hidden fixed z-40 bg-fyra-gray-950/50"
		role="button"
		tabindex="0"
		onclick={() => {
			isMobileMenuOpen = false;
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') isMobileMenuOpen = false;
		}}
	></div>

	<div
		transition:slide={{ duration: 300, axis: 'y' }}
		class="inset-x-0 top-11 px-4 py-3 md:hidden fixed z-50 border-y border-fyra-gray-800 bg-fyra-gray-900"
	>
		<div class="gap-0.5 flex flex-col">
			<p class="px-3 pt-1 pb-0.5 font-medium text-[11px] text-fyra-gray-400 uppercase">Services</p>
			{#each servicesItems as item (item.href)}
				<a
					href={resolve(item.href as InternalHref)}
					onclick={closeAll}
					class="rounded-xs px-3 py-2 text-sm text-fyra-gray-200 transition-colors duration-100 hover:bg-fyra-gray-800 hover:text-fyra-gray-100"
					>{item.label}</a
				>
			{/each}

			<!-- <div class="my-1.5 border-t border-fyra-gray-800"></div> -->

			<!-- {#each ["Docs", "Pricing"] as label}
				<a href={label === 'Pricing' ? '/pricing' : '/docs'} onclick={closeAll} class="rounded-xs px-3 py-2 text-sm text-fyra-gray-200 hover:bg-fyra-gray-800 hover:text-fyra-gray-100 transition-colors duration-100">{label}</a>
			{/each} -->

			<div class="my-1.5 border-t border-fyra-gray-800"></div>

			<p class="px-3 pt-1 pb-0.5 font-medium text-[11px] text-fyra-gray-400 uppercase">About</p>
			{#each aboutItems as item (item.href)}
				{#if item.href.startsWith('/')}
					<a
						href={resolve(item.href as InternalHref)}
						onclick={closeAll}
						class="rounded-xs px-3 py-2 text-sm text-fyra-gray-200 transition-colors duration-100 hover:bg-fyra-gray-800 hover:text-fyra-gray-100"
						>{item.label}</a
					>
				{:else}
					<a
						href={item.href}
						onclick={closeAll}
						rel="external"
						class="rounded-xs px-3 py-2 text-sm text-fyra-gray-200 transition-colors duration-100 hover:bg-fyra-gray-800 hover:text-fyra-gray-100"
						>{item.label}</a
					>
				{/if}
			{/each}
		</div>
	</div>

	<style>
		html {
			overflow: hidden;
		}
	</style>
{/if}
