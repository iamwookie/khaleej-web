<script lang="ts">
	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-screen" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center h-full">
				<h2 class="text-2xl md:text-4xl">👋 Welcome to</h2>
				<h1 class="font-bold text-secondary text-5xl md:text-7xl">Khaleej vACC</h1>
				<p class="mt-2 max-w-lg">
					Embark on an exhilarating journey through the virtual skies of Bahrain and Kuwait with Khaleej vACC. Join our vibrant community on
					VATSIM and experience the thrill of realistic air traffic control and piloting.
				</p>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col gap-10">
			<div class="divider divider-secondary before:bg-opacity-50 after:bg-opacity-50 text-4xl">Upcoming Events</div>
			<div class="flex flex-col text-center">
				<p>There are currently no upcoming events.</p>
			</div>
		</div>
	</section>

	<!-- <section class="bg-base-300 py-10">
		<div class="container flex flex-col">
			<h2 class="text-4xl">Upcoming Events</h2>
			<div class="divider"></div>
		</div>
	</section> -->

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col gap-10">
			<div class="divider divider-secondary before:bg-opacity-50 after:bg-opacity-50 text-4xl">Our Partners</div>

			<div class="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
				<a href="https://vatsim.net/" target="_blank" aria-label="VATSIM" class="hover:opacity-50 transition-opacity">
					<enhanced:img src="../lib/assets/images/vatsim.png" alt="Logo" class="h-28 w-auto" />
				</a>
			</div>
		</div>
	</section>
</main>
