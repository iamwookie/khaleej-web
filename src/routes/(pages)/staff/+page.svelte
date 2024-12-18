<script lang="ts">
	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<h2 class="font-bold text-secondary text-2xl md:text-4xl">Staff</h2>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col gap-6">
			<div class="divider text-3xl font-bold">Board</div>

			<!-- To add: badges for roles, import from data file -->
			<div class="flex flex-col md:flex-row justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Optional Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center text-white">
						<h2 class="card-title text-2xl font-bold">Rashid Raikhy</h2>
						<span>KHLJ1 • Director</span>
						<button class="btn btn-secondary w-full shadow-lg mt-4">Contact</button>
					</div>
				</div>
			</div>

			<div class="divider text-3xl font-bold">Directorate</div>

			<div class="flex flex-col md:flex-row justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Optional Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center text-white">
						<h2 class="card-title text-2xl font-bold">Shaun Mclean</h2>
						<span>KHLJ3 • ATC Training Director</span>
						<button class="btn btn-secondary w-full shadow-lg mt-4">Contact</button>
					</div>
				</div>
			</div>

			<div class="divider text-3xl font-bold">Operations</div>

			<div class="flex flex-col md:flex-row justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Optional Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center text-white">
						<h2 class="card-title text-2xl font-bold">Shaun Mclean</h2>
						<span>KHLJ33 • Operations Team Member</span>
						<button class="btn btn-secondary w-full shadow-lg mt-4">Contact</button>
					</div>
				</div>

				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Optional Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center text-white">
						<h2 class="card-title text-2xl font-bold">Syed Moiz Uddin</h2>
						<span>KHLJ42 • Events and Marketing</span>
						<button class="btn btn-secondary w-full shadow-lg mt-4">Contact</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
