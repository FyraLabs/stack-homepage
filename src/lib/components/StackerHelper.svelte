<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Close, ArrowRight } from '@steeze-ui/carbon-icons';

	let open = $state(false);
	let thumbs = $state<'up' | 'down' | null>(null);
</script>

<!-- Floating button -->
<div class="right-5 bottom-5 gap-3 fixed z-50 flex flex-col items-end">
	{#if open}
		<div
			transition:fly={{ y: 16, duration: 200 }}
			class="w-76 rounded-sm shadow-xl overflow-hidden border border-fyra-gray-800 bg-fyra-gray-900 shadow-fyra-gray-950/60"
		>
			<!-- Header -->
			<div
				class="gap-2.5 px-3.5 py-2.5 flex items-center border-b border-fyra-gray-800 bg-fyra-gray-950"
			>
				<div
					class="h-7 w-7 text-sm font-bold text-white flex shrink-0 items-center justify-center rounded-full bg-fyra-red-700"
				>
					✨
				</div>
				<div class="leading-tight flex flex-col">
					<span class="font-semibold text-[13px] text-fyra-gray-50">Stacker Helper AI ✨</span>
					<span class="text-[11px] text-fyra-red-400">● AI-Powered Assistant</span>
				</div>
				<button
					type="button"
					onclick={() => (open = false)}
					class="rounded-xs p-1 ml-auto text-fyra-gray-400 transition-colors duration-100 hover:bg-fyra-gray-800 hover:text-fyra-gray-100"
					aria-label="Close"
				>
					<Icon src={Close} class="h-3.5 w-3.5" aria-hidden="true" />
				</button>
			</div>

			<!-- Messages -->
			<div class="gap-3 px-3.5 py-4 flex flex-col">
				<div class="gap-2 flex items-end">
					<div
						class="h-6 w-6 text-white flex shrink-0 items-center justify-center rounded-full bg-fyra-red-700 text-[10px]"
					>
						✨
					</div>
					<div
						class="rounded-sm px-3 py-2 leading-snug max-w-[210px] rounded-bl-none bg-fyra-gray-800 text-[13px] text-fyra-gray-100"
					>
						Ayo bro we can help you out frfr on GOD!
					</div>
				</div>

				<!-- Thumbs up/down -->
				<div class="gap-1.5 pl-8 flex items-center">
					<span class="mr-0.5 text-[11px] text-fyra-gray-500">Was this helpful?</span>
					<button
						type="button"
						onclick={() => (thumbs = thumbs === 'up' ? null : 'up')}
						class="rounded-xs p-1 text-[13px] transition-colors duration-100 {thumbs === 'up'
							? 'bg-fyra-gray-700 text-fyra-gray-50'
							: 'text-fyra-gray-500 hover:bg-fyra-gray-800 hover:text-fyra-gray-200'}"
						aria-label="Thumbs up">👍</button
					>
					<button
						type="button"
						onclick={() => (thumbs = thumbs === 'down' ? null : 'down')}
						class="rounded-xs p-1 text-[13px] transition-colors duration-100 {thumbs === 'down'
							? 'bg-fyra-gray-700 text-fyra-gray-50'
							: 'text-fyra-gray-500 hover:bg-fyra-gray-800 hover:text-fyra-gray-200'}"
						aria-label="Thumbs down">👎</button
					>
				</div>
			</div>

			<!-- Input -->
			<div class="gap-2 px-3 py-2.5 flex items-center border-t border-fyra-gray-800">
				<input
					type="text"
					placeholder="Ask something..."
					class="flex-1 bg-transparent text-[13px] text-fyra-gray-100 placeholder-fyra-gray-500 outline-none"
				/>
				<button
					type="button"
					class="h-6 w-6 rounded-xs text-white flex shrink-0 items-center justify-center bg-fyra-red-700 transition-colors duration-100 hover:bg-fyra-red-600"
					aria-label="Send"
				>
					<Icon src={ArrowRight} class="h-3 w-3" aria-hidden="true" />
				</button>
			</div>

			<!-- Disclaimer + Sponsor -->
			<div class="gap-0.5 px-3.5 py-2 flex flex-col border-t border-fyra-gray-800 bg-fyra-gray-950">
				<p class="leading-snug text-[10px] text-fyra-gray-500">
					⚠️ AI can make mistakes. Don't trust it with anything important, bro.
				</p>
				<p class="text-[10px] text-fyra-gray-600">
					Sponsored by <span class="font-medium text-fyra-gray-400"
						>Lockheed Martin AI Division</span
					>
				</p>
			</div>
		</div>
	{/if}

	<!-- Toggle button -->
	<button
		type="button"
		onclick={() => (open = !open)}
		class="h-11 w-11 text-white shadow-lg flex items-center justify-center rounded-full bg-fyra-red-700 shadow-fyra-gray-950/50 transition-colors duration-150 hover:bg-fyra-red-600"
		aria-label="Open Stacker Helper AI"
	>
		{#if open}
			<Icon src={Close} class="h-4 w-4" aria-hidden="true" />
		{:else}
			<span class="text-lg leading-none">✨</span>
		{/if}
	</button>
</div>
