<script lang="ts">
	import type { ActionData } from './$types';

	import { enhance } from '$app/forms';
	import { Rss, CircleCheck, CircleX } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';

	let { form } = $props<{ form: ActionData | null }>();
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<div class="flex items-center gap-2 text-secondary font-bold text-2xl md:text-4xl">
					<Rss size={36} /> ATC Feedback
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col items-center">
			{#if form?.success}
				<div role="alert" class="alert alert-success max-w-md">
					<CircleCheck size={24} /><span>Your feedback has been submitted!</span>
				</div>
			{/if}

			{#if form?.fail}
				<div role="alert" class="alert alert-error max-w-md">
					<CircleX size={24} /><span>Uh oh! Something went wrong!</span>
				</div>
			{/if}

			<form method="POST" use:enhance class="card card-body w-full">
				<div class="form-control">
					<label for="pilotName" class="label"><span class="label-text">Your Name</span></label>
					<input name="pilotName" type="text" placeholder="Chesley Sullenberger" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="pilotCid" class="label"><span class="label-text">Your VATSIM CID</span></label>
					<input name="pilotCid" type="number" placeholder="1234567" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="atcCallsign" class="label"><span class="label-text">ATC Callsign</span></label>
					<input name="atcCallsign" type="text" placeholder="OBBI_TWR" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="date" class="label"><span class="label-text">Date of Interaction</span></label>
					<input name="date" type="date" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="rating" class="label"><span class="label-text">Rating</span></label>
					<input name="rating" type="range" min="0" max="100" value="50" step="25" class="range range-secondary" />
					<div class="flex w-full justify-between px-2 text-xs mt-2">
						<span>Poor</span>
						<span>Below Average</span>
						<span>Average</span>
						<span>Good</span>
						<span>Excellent</span>
					</div>
				</div>

				<div class="form-control mt-4">
					<label for="feedback" class="label"><span class="label-text">Feedback</span></label>
					<textarea
						name="feedback"
						placeholder="I was flying today and noticed that the controller was..."
						class="textarea textarea-bordered h-24"
						required
					></textarea>
				</div>

				<div class="form-control mt-6">
					<button type="submit" class="btn btn-secondary">Submit Feedback</button>
				</div>
			</form>
		</div>
	</section>
</main>
