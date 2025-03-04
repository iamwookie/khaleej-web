<script lang="ts">
	import { ArrowDown } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-screen" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<h1 class="text-4xl md:text-6xl text-center">Not sure where to start?</h1>
			</div>

			<div class="relative bottom-60">
				<ArrowDown size={20} class="w-10 h-10 m-auto text-secondary animate-bounce" />
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col items-center gap-10 min-h-[40vh]">
			<div class="hero">
				<div class="hero-content flex-col-reverse lg:flex-row gap-10">
					<div class="flex flex-col gap-4">
						<h2 class="text-2xl">Getting Started on VATSIM</h2>

						<p class="max-w-md">
							New to the VATSIM Network and recently started flying? Looking into controlling or simply just not sure where to start?
							Head over to the official VATSIM website that includes comprehensive documentation on how to get started by clicking the
							button below.
						</p>

						<!-- Disabled for now due to Discord integration -->
						<button class="btn btn-disabled">Get Started</button>
					</div>

					<enhanced:img src="../../../lib/assets/images/partners/vatsim.png" alt="VATSIM Image" class="w-96 h-auto shadow-2xl" />
				</div>
			</div>
			<div class="hero">
				<div class="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
					<div class="flex flex-col gap-4">
						<h2 class="text-2xl">Different VATSIM Region?</h2>

						<p class="max-w-md">
							Not a part of the Middle East and North Africa (MENA) region on VATSIM? Click the button below to request a region change.
							After that you can <a href="/join" class="btn-link text-secondary hover:opacity-50 transition-opacity">click here</a> to get
							started on joining Khaleej vACC.
						</p>

						<!-- Disabled for now due to Discord integration -->
						<button class="btn btn-disabled">Get Started</button>
					</div>

					<enhanced:img src="../../../lib/assets/images/bg.png" alt="Region Image" class="w-96 h-auto rounded-lg shadow-2xl" />
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
</style>
