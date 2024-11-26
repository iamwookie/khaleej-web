<script lang="ts">
	import Discord from '$lib/components/icons/Discord.svelte';
	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="h-screen bg-cover bg-center bg-no-repeat" style="background-image: url({bgImage});">
		<!-- <div class="h-full bg-black/50">
			<div class="container flex flex-col justify-center h-full md:px-0">
				<h2 class="text-4xl md:text-6xl">Welcome to</h2>
				<h1 class="text-5xl md:text-7xl text-secondary">Khaleej vACC</h1>
				<h3 class="text-sm md:text-xl">Home of the Bahrain and Kuwait region on VATSIM.</h3>
			</div>
		</div> -->
		<div class="h-full bg-black/50">
			<div class="container flex flex-col justify-center h-full md:px-0">
				<div class="flex flex-col gap-4 max-w-md">
					<h1 class="text-5xl font-bold">Hello there</h1>
					<p>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
						repudiandae et a id nisi.
					</p>
					<a href="/" class="btn bg-discord mr-auto hover:bg-discord/50"><Discord class="w-5" /> Join Discord</a>
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col">
			<h2 class="text-4xl">Upcoming Events</h2>
			<div class="divider"></div>
		</div>
	</section>

	<p class="bg-base-300">Below the divider</p>
</main>


