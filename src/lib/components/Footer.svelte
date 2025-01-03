<script lang="ts">
	// import Discord from './icons/Discord.svelte';
	import YouTube from './icons/YouTube.svelte';
	import Twitch from './icons/Twitch.svelte';
	import Instagram from './icons/Instagram.svelte';
</script>

<footer class="bg-base-300 w-full">
	<div class="container">
		<div class="divider m-0"></div>

		<div class="footer footer-center gap-8 py-10">
			<aside>
				<a href="/" aria-label="Home" class="hover:opacity-50 transition-opacity">
					<enhanced:img src="../assets/images/logo_footer.png" alt="Footer Logo" class="h-24 w-auto" />
				</a>

				<p class="text-neutral-content">© 2024 KHALEEJ VACC • ALL RIGHTS RESERVED</p>
			</aside>

			<nav class="grid-flow-col gap-4">
				<!-- Disabled until Discord integration is complete -->
				<!-- <a href="/" aria-label="Discord" class="hover:opacity-50 transition-opacity">
					<Discord class="fill-current h-6 w-6" />
				</a> -->

				<a href="https://www.youtube.com/@KhaleejvACC/" aria-label="YouTube" class="hover:opacity-50 transition-opacity">
					<YouTube class="fill-current h-6 w-6" />
				</a>

				<a href="https://www.twitch.tv/khaleejvacc/" aria-label="Twitch" class="hover:opacity-50 transition-opacity">
					<Twitch class="fill-current h-6 w-6" />
				</a>

				<a href="https://www.instagram.com/khaleejvacc/" aria-label="Instagram" class="hover:opacity-50 transition-opacity">
					<Instagram class="fill-current h-6 w-6" />
				</a>
			</nav>
		</div>
	</div>
</footer>
