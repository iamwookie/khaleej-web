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
			<div class="container grid grid-cols-1 grid-rows-3 justify-items-center h-full">
				<enhanced:img src="../lib/assets/images/logo_khaleej.png" alt="Logo" class="h-28 w-28" />

				<div class="text-center self-center">
					<h2 class="font-semibold text-secondary text-5xl md:text-7xl">Khaleej vACC</h2>
					<p class="max-w-xl mt-4">
						Embark on an exhilarating journey through the virtual skies of Bahrain and Kuwait with Khaleej vACC. Join our vibrant
						community on VATSIM and experience the thrill of realistic air traffic control and piloting.
					</p>
					<h3 class="font-semibold text-2xl md:text-4xl mt-4">✈️ Flying Soon...</h3>
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>
</main>
