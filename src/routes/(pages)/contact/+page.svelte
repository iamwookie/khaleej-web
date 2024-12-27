<script lang="ts">
	import type { ActionData } from './$types';

	import { enhance } from '$app/forms';
	import { Mails, CircleCheck, CircleX } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';

	let { form } = $props<{ form: ActionData | null }>();
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<div class="flex items-center gap-2 text-secondary font-bold text-2xl md:text-4xl">
					<Mails size={36} /> Contact
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
					<CircleCheck size={24} /><span>Your form has been submitted!</span>
				</div>
			{/if}

			{#if form?.fail}
				<div role="alert" class="alert alert-error max-w-md">
					<CircleX size={24} /><span>Uh oh! Something went wrong!</span>
				</div>
			{/if}

			<form method="POST" use:enhance class="card card-body w-full">
				<div class="form-control">
					<label for="name" class="label">
						<span class="label-text">Your Name</span>
					</label>

					<input name="name" type="text" placeholder="Chesley Sullenberger" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="vatsimCid" class="label">
						<span class="label-text">Your VATSIM CID</span>
					</label>

					<input name="vatsimCid" type="number" placeholder="1234567" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="email" class="label">
						<span class="label-text">Your Email</span>
					</label>

					<input name="email" type="email" placeholder="example@mail.com" class="input input-bordered" required />
				</div>

				<div class="form-control mt-4">
					<label for="message" class="label">
						<span class="label-text">Message</span>
					</label>

					<textarea name="message" placeholder="I would like to contact you regarding..." class="textarea textarea-bordered h-24" required
					></textarea>
				</div>

				<div class="form-control mt-6">
                    <!-- Disable forms for now -->
					<button type="submit" class="btn btn-secondary btn-disabled">Submit</button>
				</div>
			</form>
		</div>
	</section>
</main>

<style lang="postcss">
	.alert {
		grid-auto-flow: column;
		grid-template-columns: auto minmax(auto, 1fr);
		justify-items: start;
		text-align: start;
	}
</style>
