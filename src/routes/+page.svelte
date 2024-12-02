<script lang="ts">
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
			<div class="container flex flex-col justify-center h-full">
				<h1 class="text-2xl md:text-4xl">👋 Welcome to</h1>
				<h2 class="font-bold text-secondary text-5xl md:text-7xl">Khaleej vACC</h2>
				<p class="mt-4 max-w-lg">
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
		<div class="container flex flex-col">
			<h2 class="text-4xl">Upcoming Events</h2>
			<div class="divider"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col">
			<h2 class="text-4xl">Upcoming Events</h2>
			<div class="divider"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col">
			<h2 class="text-4xl">Our Partners</h2>

			<div class="divider"></div>

			<div class="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
				<a href="https://vatsim.net/" target="_blank" aria-label="VATSIM" class="hover:opacity-50 transition-opacity">
					<enhanced:img src="../lib/assets/images/vatsim.png" alt="Logo" class="h-28 w-auto" />
				</a>
			</div>
		</div>
	</section>
</main>
