<script lang="ts">
	import { team } from '$lib/data/team';

	const members = team.filter((m) => m !== null);

	function displayName(m: (typeof members)[number]) {
		if (!m.nickname) return m.name;
		const parts = m.name.split(' ');
		return `${parts[0]} "${m.nickname}" ${parts.slice(1).join(' ')}`;
	}
</script>

<!-- Team -->
<section class="border-b border-fyra-gray-800">
	<!-- Header -->
	<div class="px-6 py-8 md:px-10 border-b border-fyra-gray-800">
		<h2 class="text-3xl font-semibold tracking-tight md:text-4xl text-fyra-gray-50">The team.</h2>
		<p class="mt-2 text-sm text-fyra-gray-400">Small, on purpose.</p>
	</div>

	<!-- Member grid -->
	<div class="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-px bg-fyra-gray-800">
		{#each members as member (member.name)}
			<div class="gap-4 px-6 py-6 md:px-10 flex items-center bg-fyra-gray-900">
				<img
					src={member.avatar}
					alt={member.name}
					class="h-9 w-9 rounded-md shrink-0 object-cover object-center brightness-90"
				/>
				<div class="min-w-0 flex-1">
					<p class="text-sm font-medium text-fyra-gray-50">{displayName(member)}</p>
					<p class="font-medium tracking-widest text-[11px] text-fyra-gray-500 uppercase">
						{member.role.replace(' / ', ' · ')}
					</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Bottom CTA strip -->
	<div
		class="gap-4 px-6 py-8 sm:flex-row sm:items-center md:px-10 flex flex-col items-start justify-between border-t border-fyra-gray-800"
	>
		<div>
			<p class="text-sm font-medium text-fyra-gray-50">We're small, on purpose.</p>
			<p class="mt-1 text-sm text-fyra-gray-400">
				We live with the decisions we make. That keeps us careful.
			</p>
		</div>
		<a
			href="https://github.com/FyraLabs"
			target="_blank"
			rel="noopener noreferrer"
			class="text-sm font-medium shrink-0 text-fyra-red-400 transition-colors duration-100 hover:text-fyra-red-300"
		>
			Find us on GitHub <span aria-hidden="true">→</span>
		</a>
	</div>
</section>
