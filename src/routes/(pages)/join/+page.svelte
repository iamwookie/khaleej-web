<script lang="ts">
	import { ArrowDown } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-screen" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<h1 class="text-4xl md:text-6xl text-center">Ready to embark on an unforgettable journey?</h1>
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
		<div class="container flex flex-col items-center">
			<div class="hero">
				<div class="hero-content flex-col lg:flex-row gap-8">
					<enhanced:img src="../../../lib/assets/images/bg.png" alt="Join Image" class="max-w-md rounded-lg shadow-2xl" />

					<div class="flex flex-col gap-6">
						<p class="max-w-md">
							Join a world full of opportunities and experiences, filled with events and activities. Whether you're a seasoned pilot or
							a veteran controller, the skies of Bahrain and Kuwait are open for you.
						</p>

                        <!-- Disabled for now due to Discord integration -->
						<button class="btn btn-disabled">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
</style>
