<script lang="ts">
	import type { VatsimEvent } from '$lib/types';

	import { CalendarCheck2 } from 'lucide-svelte';

	let { events }: { events: VatsimEvent[] } = $props();
</script>

<div class="flex flex-col items-center gap-10 w-full">
	{#each events as event}
		<div class="card card-side w-[1080px] bg-base-100 shadow-xl">
			<figure class="w-full">
				<img src={event.banner} alt="Event Banner" class="w-full h-auto object-contain" />
			</figure>

			<div class="relative card-body justify-between bg-opacity-80 rounded-xl shadow-xl">
				<!-- Decorative Overlay -->
				<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-e-xl"></div>

				<div class="relative">
					<h2 class="card-title">{event.name}<span class="badge badge-neutral text-xs">{event.type}</span></h2>
					<p>{event.short_description}</p>
				</div>

				<div class="relative card-actions justify-end items-center">
					<CalendarCheck2 size={20} />

					<p class="font-bold">
						{new Date(event.start_time)
							.toLocaleDateString('en-GB', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})
							.replace(/(\w+) (\d+) (\w+) (\d+)/, '$1, $2 $3, $4')}
					</p>

					<a href={event.link} target="_blank" class="btn btn-secondary">View Info</a>
				</div>
			</div>
		</div>
	{/each}
</div>
