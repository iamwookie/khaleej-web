<script lang="ts">
	import { Home, Rocket, Plane, Radar, Info } from 'lucide-svelte';

	const onclick = (e: any) => {
		for (const details of document.querySelectorAll('details')) {
			if (!details.contains(e.target)) details.open = false;
		}
	};
</script>

<svelte:document {onclick} />

<div class="navbar bg-transparent px-8">
	<div class="navbar-start">
		<a href="/" aria-label="Home" class="hover:opacity-50 transition-opacity">
			<enhanced:img src="../assets/images/logo_khaleej.png" alt="Logo" class="h-[100px] w-[100px]" />
		</a>
	</div>

	<div class="navbar-center">
		<ul class="menu menu-horizontal gap-1 px-1">
			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50">
						<Rocket size={20} /> Getting Started
					</summary>

					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a href="/new" class="hover:bg-accent">New to VATSIM</a></li>
						<li><a href="/join" class="hover:bg-accent">Join Khaleej</a></li>
						<li><a href="/atc/training" class="hover:bg-accent">ATC Training</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50">
						<Plane size={20} /> Pilots
					</summary>

					<ul class="menu menu-vertical bg-accent bg-opacity-50 min-w-max">
						<li><a href="/" class="hover:bg-accent">Airports & Charts</a></li>
						<li><a href="/events" class="hover:bg-accent">Events</a></li>
						<li><a href="/events/booking" class="hover:bg-accent">Event Booking</a></li>
						<li><a href="/atc/feedback" class="hover:bg-accent">ATC Feedback</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50">
						<Radar size={20} /> Controllers
					</summary>

					<ul class="menu menu-vertical bg-accent bg-opacity-50 min-w-max">
						<li><a href="/atc/training" class="hover:bg-accent">Training</a></li>
						<li><a href="/atc/roster" class="hover:bg-accent">Roster</a></li>
						<li><a href="/atc/docs" class="hover:bg-accent">Documentation</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50">
						<Info size={20} /> About
					</summary>

					<ul class="menu menu-vertical bg-accent bg-opacity-50 min-w-max">
						<li><a href="/staff" class="hover:bg-accent">Staff</a></li>
						<li><a href="/policies" class="hover:bg-accent">Policies</a></li>
						<li><a href="/contact" class="hover:bg-accent">Contact</a></li>
						<li><a href="/" class="hover:bg-accent">HQ</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>

	<div class="navbar-end">
		<div class="inline-flex flex-row">
			<a href="/login" class="btn btn-outline btn-secondary">Join Now</a>
		</div>
	</div>
</div>
