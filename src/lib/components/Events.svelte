<script lang="ts">
	import type { VatsimEvent } from '$lib/types';

	import { CalendarCheck2 } from 'lucide-svelte';

	let { events }: { events: VatsimEvent[] } = $props();
</script>

<div class="flex flex-col items-center gap-10 w-full">
	{#each events as event}
		<div class="card 2xl:card-side w-[80vw] 2xl:w-[60vw] bg-base-100 shadow-xl">
			<figure class="w-full 2xl:w-2/5 h-auto">
				<img src={event.banner} alt="Event Banner" class="w-full h-full object-fill" />
			</figure>

			<div class="relative card-body justify-between gap-10 bg-opacity-80 rounded-xl shadow-xl w-full 2xl:w-3/5">
				<!-- Decorative Overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-b-xl 2xl:rounded-b-none 2xl:rounded-r-xl"
				></div>

				<div class="relative flex flex-col gap-1">
					<h2 class="card-title text-base lg:text-xl">{event.name}<span class="badge badge-neutral text-xs">{event.type}</span></h2>
					<p class="text-sm sm:text-base">{event.short_description}</p>
				</div>

				<div class="relative card-actions justify-between items-center">
					<div class="flex items-center gap-1">
						<CalendarCheck2 size={20} />

						<p class="font-bold text-sm sm:text-base">
							{new Date(event.start_time)
								.toLocaleDateString('en-GB', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})
								.replace(/(\w+) (\d+) (\w+) (\d+)/, '$1, $2 $3, $4')}
						</p>
					</div>

					<a href={event.link} target="_blank" class="btn btn-secondary">View Info</a>
				</div>
			</div>
		</div>
	{/each}
</div>
