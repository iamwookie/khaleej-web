<script lang="ts">
	import { UsersRound } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';
</script>

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<div class="flex items-center gap-2 text-secondary font-bold text-2xl md:text-4xl">
					<UsersRound size={36} /> Staff
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col gap-10 min-h-[40vh]">
			<div class="divider divider-secondary before:bg-opacity-50 after:bg-opacity-50 text-3xl font-bold">Directorate</div>

			<!-- To add: badges for roles, import from data file -->
			<div class="flex flex-row flex-wrap col justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Rashid Raikhy</h2>
						<span>• KHLJ1 •<br />Director</span>
						<a href="mailto:rashid.raikhy@khaleejvacc.net" class="btn btn-secondary w-full shadow-lg mt-4">Contact</a>
						<code class="bg-base-100 rounded text-sm px-1">rashid.raikhy@khaleejvacc.net</code>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Shaun Mclean</h2>
						<span>• KHLJ3 •<br />ATC Training Director</span>
						<a href="mailto:shaun.mclean@khaleejvacc.net" class="btn btn-secondary w-full shadow-lg mt-4">Contact</a>
						<code class="bg-base-100 rounded text-sm px-1">shaun.mclean@khaleejvacc.net</code>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Max Van Mullem</h2>
						<span>• KHLJ4 •<br />Events & Marketing Director</span>
						<a href="mailto:max.van.mullem@khaleejvacc.net" class="btn btn-secondary w-full shadow-lg mt-4">Contact</a>
						<code class="bg-base-100 rounded text-sm px-1">max.van.mullem@khaleejvacc.net</code>
					</div>
				</div>

				<!-- Card 4 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Syed Moiz Uddin</h2>
						<span>• KHLJ32 •<br />vACC Operations Director</span>
						<a href="mailto:moiz.uddin@khaleejvacc.net" class="btn btn-secondary w-full shadow-lg mt-4">Contact</a>
						<code class="bg-base-100 rounded text-sm px-1">moiz.uddin@khaleejvacc.net</code>
					</div>
				</div>
			</div>

			<div class="divider divider-secondary before:bg-opacity-50 after:bg-opacity-50 text-3xl font-bold">Deputy Directorate</div>

			<div class="flex flex-row flex-wrap justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Vacant</h2>
						<span>• KHLJ31 •<br />Deputy ATC Training Director</span>
						<button class="btn btn-secondary btn-disabled w-full shadow-lg mt-4">Contact</button>
						<code class="bg-base-100 rounded text-sm px-1">atc@khaleejvacc.net</code>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Vacant</h2>
						<span>• KHLJ41 •<br />Deputy Events & Marketing Director</span>
						<button class="btn btn-secondary btn-disabled w-full shadow-lg mt-4">Contact</button>
						<code class="bg-base-100 rounded text-sm px-1">events@khaleejvacc.net</code>
					</div>
				</div>
			</div>

			<div class="divider divider-secondary before:bg-opacity-50 after:bg-opacity-50 text-3xl font-bold">Members</div>

			<div class="flex flex-row flex-wrap justify-center items-center gap-8">
				<!-- Card 1 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Vacant</h2>
						<span>• KHLJ33 •<br />Operations Team Member</span>
						<button class="btn btn-secondary btn-disabled w-full shadow-lg mt-4">Contact</button>
						<code class="bg-base-100 rounded text-sm px-1">operations@khaleejvacc.net</code>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="relative card bg-opacity-80 w-96 rounded-xl shadow-xl p-6">
					<!-- Decorative Overlay -->
					<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

					<div class="relative card-body items-center text-center">
						<h2 class="card-title text-2xl font-bold">Vacant</h2>
						<span>• KHLJ42 •<br />Events & Marketing Member</span>
						<button class="btn btn-secondary btn-disabled w-full shadow-lg mt-4">Contact</button>
						<code class="bg-base-100 rounded text-sm px-1">events@khaleejvacc.net</code>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
