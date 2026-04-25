<script lang="ts">
	import { resolve } from '$app/paths';
	import { team } from '$lib/data/team';

	const members = team.filter((m) => m !== null);

	const gridCols: Record<number, string> = {
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-2 sm:grid-cols-3',
		4: 'grid-cols-2 lg:grid-cols-4',
		5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
		6: 'grid-cols-2 sm:grid-cols-3'
	};
	const colClass = gridCols[members.length] ?? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

	function displayName(m: (typeof members)[number]) {
		if (!m.nickname) return m.name;
		const parts = m.name.split(' ');
		return `${parts[0]} "${m.nickname}" ${parts.slice(1).join(' ')}`;
	}
</script>

<section class="border-b border-fyra-gray-800">
	<!-- Header -->
	<div
		class="gap-6 px-6 py-8 md:px-10 flex items-end justify-between border-b border-fyra-gray-800"
	>
		<div>
			<h2 class="text-3xl font-semibold tracking-tight md:text-4xl text-fyra-gray-50">
				Built by engineers, not a board.
			</h2>
			<p class="mt-2 text-sm text-fyra-gray-400">
				Small team, on purpose. We live with the decisions we make.
			</p>
		</div>
		<a
			href={resolve('/about')}
			class="text-sm font-medium shrink-0 text-fyra-red-400 transition-colors duration-100 hover:text-fyra-red-300"
		>
			Meet the team <span aria-hidden="true">→</span>
		</a>
	</div>

	<!-- Portraits -->
	<div class="grid gap-px bg-fyra-gray-800 {colClass}">
		{#each members as member (member.name)}
			<a href={resolve('/about')} class="group relative block overflow-hidden bg-fyra-gray-900">
				<!-- Photo -->
				<div class="relative aspect-[3/4] overflow-hidden">
					<img
						src={member.avatar}
						alt={member.name}
						class="h-full w-full object-cover object-top brightness-75 transition-[filter] duration-500 group-hover:brightness-90"
					/>
					<!-- Gradient for text legibility -->
					<div
						class="inset-0 absolute bg-gradient-to-t from-fyra-gray-950 via-fyra-gray-950/30 to-transparent"
					></div>
					<!-- Red accent bar -->
					<div
						class="bottom-0 left-0 h-0.5 absolute w-full origin-left scale-x-0 bg-fyra-red-500 transition-transform duration-300 group-hover:scale-x-100"
					></div>
					<!-- Info overlaid -->
					<div class="right-0 bottom-0 left-0 p-5 pb-4 absolute">
						<p class="text-sm leading-snug font-semibold text-fyra-gray-50">
							{displayName(member)}
						</p>
						<p class="mt-1 font-medium tracking-widest text-[11px] text-fyra-gray-500 uppercase">
							{member.role.replace(' / ', ' · ')}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
