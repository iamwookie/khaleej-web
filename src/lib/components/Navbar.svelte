<script lang="ts">
	import { Rocket, Plane, Radar, Info, Menu } from 'lucide-svelte';

	const onclick = (e: any) => {
		for (const details of document.querySelectorAll('details')) {
			if (!details.querySelector('summary')?.contains(e.target)) details.open = false;
		}
	};
</script>

<svelte:document {onclick} />

<!-- Drawer Wrapper -->
<div class="drawer drawer-end">
	<!-- Drawer Toggle -->
	<input id="mobile-drawer" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<div class="navbar bg-transparent px-8">
			<div class="navbar-start">
				<a href="/" aria-label="Home" class="hover:opacity-50 transition-opacity">
					<enhanced:img src="../assets/images/logo_khaleej.png" alt="Logo" class="h-32 w-32" />
				</a>
			</div>

			<div class="navbar-center hidden lg:inline-flex">
				<ul class="menu menu-horizontal gap-1 px-1">
					<li>
						<details>
							<summary>
								<Rocket size={20} /> Getting Started
							</summary>

							<ul class="menu menu-vertical bg-secondary bg-opacity-50">
								<li><a href="/new">New to VATSIM</a></li>
								<li><a href="/join">Join Khaleej</a></li>
								<li><a href="/atc/training">ATC Training</a></li>
							</ul>
						</details>
					</li>

					<li>
						<details>
							<summary>
								<Plane size={20} /> Pilots
							</summary>

							<ul class="menu menu-vertical bg-secondary bg-opacity-50 min-w-max">
								<li><a href="/events">Events</a></li>
								<li><a href="/events/booking">Event Booking</a></li>
								<li><a href="/charts">Airports & Charts</a></li>
							</ul>
						</details>
					</li>

					<li>
						<details>
							<summary class="hover:bg-secondary hover:bg-opacity-50">
								<Radar size={20} /> Controllers
							</summary>

							<ul class="menu menu-vertical bg-secondary bg-opacity-50 min-w-max">
								<li><a href="/atc/training">Training</a></li>
								<li><a href="/atc/roster">Roster</a></li>
								<li><a href="/atc/docs">Documentation</a></li>
								<li><a href="/atc/feedback">ATC Feedback</a></li>
							</ul>
						</details>
					</li>

					<li>
						<details>
							<summary class="hover:bg-secondary hover:bg-opacity-50">
								<Info size={20} /> About
							</summary>

							<ul class="menu menu-vertical bg-secondary bg-opacity-50 min-w-max">
								<li><a href="/staff">Staff</a></li>
								<li><a href="/policies">Policies</a></li>
								<li><a href="/contact">Contact</a></li>
								<li><a href="/">HQ</a></li>
							</ul>
						</details>
					</li>
				</ul>
			</div>

			<div class="navbar-end hidden lg:inline-flex">
				<div class="inline-flex flex-row">
					<a href="/join" class="btn btn-outline btn-secondary">Join Now</a>
				</div>
			</div>

			<div class="navbar-end lg:hidden">
				<label for="mobile-drawer" class="btn btn-square btn-ghost hover:bg-secondary hover:bg-opacity-50">
					<Menu size={28} />
				</label>
			</div>
		</div>
	</div>

	<div class="drawer-side">
		<label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>

<style lang="postcss">
	@media (hover: hover) {
		@supports (color: oklch(0% 0 0)) {
			:where(.menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)):not(.active, .btn):hover,
			:where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
				@apply bg-secondary;
				@apply bg-opacity-50;
			}
		}
	}

	.menu li > *:not(ul, .menu-title, details, .btn):active,
	.menu li > *:not(ul, .menu-title, details, .btn).active,
	.menu li > details > summary:active {
		@apply bg-secondary;
		@apply text-white;
	}
</style>
