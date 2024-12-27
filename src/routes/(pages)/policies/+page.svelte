<script lang="ts">
	import { HeartHandshake, BookText, ExternalLink } from 'lucide-svelte';

	import bgImage from '$lib/assets/images/bg.png';
</script>

<!-- Will need to add some sort of dynamic data handling -->

<main class="flex flex-col">
	<section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url({bgImage});">
		<div class="bg-black/50 h-full">
			<div class="container flex flex-col justify-center items-center h-full">
				<div class="flex items-center gap-2 text-secondary font-bold text-2xl md:text-4xl">
					<HeartHandshake size={36} /> Policies
				</div>
			</div>
		</div>

		<div class="relative">
			<div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-base-300"></div>
		</div>
	</section>

	<section class="bg-base-300 py-10">
		<div class="container flex flex-col justify-center items-center gap-8 min-h-[40vh]">
			<div class="relative card flex-row bg-opacity-80 w-full rounded-xl shadow-xl p-6">
				<!-- Decorative Overlay -->
				<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

				<!-- Content -->
				<div class="relative flex flex-col md:flex-row gap-4 justify-between w-full">
					<h2 class="card-title text-2xl font-bold"><BookText size={24} /> Khaleej GDPR Policy</h2>

					<!-- prettier-ignore -->
					<a
						target="_blank"
						href="https://cdn.khaleejvacc.net/Khaleej%20GDPR%20Policy.pdf"
						class="btn btn-secondary shadow-lg"><ExternalLink size={20} /> View</a
					>
				</div>
			</div>

			<div class="relative card flex-row bg-opacity-80 w-full rounded-xl shadow-xl p-6">
				<!-- Decorative Overlay -->
				<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

				<!-- Content -->
				<div class="relative flex flex-col md:flex-row gap-4 justify-between w-full">
					<h2 class="card-title text-2xl font-bold"><BookText size={24} /> Khaleej vACC Code of Conduct</h2>

					<!-- prettier-ignore -->
					<a
                        target="_blank"
						href="https://cdn.khaleejvacc.net/Khaleej%20vACC%20Code%20of%20Conduct.pdf"
						class="btn btn-secondary shadow-lg"><ExternalLink size={20} /> View</a
					>
				</div>
			</div>

			<div class="relative card flex-row bg-opacity-80 w-full rounded-xl shadow-xl p-6">
				<!-- Decorative Overlay -->
				<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

				<!-- Content -->
				<div class="relative flex flex-col md:flex-row gap-4 justify-between w-full">
					<h2 class="card-title text-2xl font-bold"><BookText size={24} /> Khaleej vACC ATC Policy</h2>

					<!-- prettier-ignore -->
					<a
                        target="_blank"
						href="https://cdn.khaleejvacc.net/Khaleej%20vACC%20ATC%20Policy.pdf"
						class="btn btn-secondary shadow-lg"><ExternalLink size={20} /> View</a
					>
				</div>
			</div>

			<div class="relative card flex-row bg-opacity-80 w-full rounded-xl shadow-xl p-6">
				<!-- Decorative Overlay -->
				<div class="absolute inset-0 bg-gradient-to-br from-white to-secondary shadow-inner opacity-50 rounded-xl"></div>

				<!-- Content -->
				<div class="relative flex flex-col md:flex-row gap-4 justify-between w-full">
					<h2 class="card-title text-2xl font-bold"><BookText size={24} /> Controlling Software Installation Guide.pdf</h2>

					<!-- prettier-ignore -->
					<a
                        target="_blank"
						href="https://cdn.khaleejvacc.net/Controlling%20Software%20Installation%20Guide.pdf"
						class="btn btn-secondary shadow-lg"><ExternalLink size={20} /> View</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
