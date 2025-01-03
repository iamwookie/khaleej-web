<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { cn } from '$lib/utils';

	import { Mails, CircleCheck, CircleX } from 'lucide-svelte';
	import bgImage from '$lib/assets/images/bg.png';

	let { data } = $props();

	const { form, errors, constraints, message, delayed, enhance } = superForm(data.form);
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
		<div class="container flex flex-col items-center min-h-[40vh]">
			<form method="POST" class="card card-body w-full" use:enhance>
				<div class="form-control">
					<label for="name" class="label">
						<span class="label-text">Your Name</span>
					</label>

					<input
						type="text"
						name="name"
						placeholder="Chesley Sullenberger"
						class={cn('input input-bordered', { 'input-error': $errors.name })}
						bind:value={$form.name}
						{...$constraints.name}
					/>

					{#if $errors.name}
						<div class="label">
							<span class="label-text-alt text-error">
								{$errors.name}
							</span>
						</div>
					{/if}
				</div>

				<div class="form-control mt-4">
					<label for="vatsimCid" class="label">
						<span class="label-text">Your VATSIM CID</span>
					</label>

					<input
						type="number"
						name="vatsimCid"
						placeholder="1514902"
						class={cn('input input-bordered', { 'input-error': $errors.vatsimCid })}
						bind:value={$form.vatsimCid}
						{...$constraints.vatsimCid}
					/>

					{#if $errors.vatsimCid}
						<div class="label">
							<span class="label-text-alt text-error">
								{$errors.vatsimCid}
							</span>
						</div>
					{/if}
				</div>

				<div class="form-control mt-4">
					<label for="email" class="label">
						<span class="label-text">Your Email</span>
					</label>

					<input
						type="email"
						name="email"
						placeholder="example@mail.com"
						class={cn('input input-bordered', { 'input-error': $errors.email })}
						bind:value={$form.email}
						{...$constraints.email}
					/>

					{#if $errors.email}
						<div class="label">
							<span class="label-text-alt text-error">
								{$errors.email}
							</span>
						</div>
					{/if}
				</div>

				<div class="form-control mt-4">
					<label for="message" class="label">
						<span class="label-text">Message</span>
					</label>

					<textarea
						name="message"
						placeholder="I would like to contact you regarding..."
						class={cn('textarea textarea-bordered h-24', { 'input-error': $errors.message })}
						bind:value={$form.message}
						{...$constraints.message}
					></textarea>

					{#if $errors.message}
						<div class="label">
							<span class="label-text-alt text-error">
								{$errors.message}
							</span>
						</div>
					{/if}
				</div>

				<div class="form-control mt-6">
					<button type="submit" class={cn('btn btn-secondary', { 'btn-disabled': $delayed })}>
						{#if $delayed}
							<span class="loading loading-spinner"></span>
						{:else}
							Submit
						{/if}
					</button>
				</div>
			</form>

			{#if $message}
				{#if $message.status == 'success'}
					<div role="alert" class="alert alert-success max-w-md">
						<CircleCheck size={24} /><span>{$message.text}</span>
					</div>
				{:else if $message.status == 'error'}
					<div role="alert" class="alert alert-error max-w-md">
						<CircleX size={24} /><span>{$message.text}</span>
					</div>
				{/if}
			{/if}
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
