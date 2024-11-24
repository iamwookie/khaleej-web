<script>
	import { Home, Rocket, Plane, Radar, Info } from 'lucide-svelte';
</script>

<div class="navbar bg-transparent">
	<div class="flex-1">
		<a href="/" aria-label="Home">
			<enhanced:img src="../assets/images/logo_khaleej.png" alt="Logo" class="h-[80px] w-[80px]" />
		</a>
	</div>

	<div class="flex-none">
		<ul class="menu menu-horizontal gap-1 px-1">
			<li><a class="hover:bg-accent hover:bg-opacity-50" href="/"><Home size={20} /> Home</a></li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50"><Rocket size={20} /> Getting Started</summary>
					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a href="/" class="hover:bg-accent">New to VATSIM</a></li>
						<li><a href="/" class="hover:bg-accent">Join Khaleej</a></li>
						<li><a href="/" class="hover:bg-accent">ATC Training</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50"><Plane size={20} /> Pilots</summary>
					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a href="/" class="hover:bg-accent">Airports & Charts</a></li>
						<li><a href="/" class="hover:bg-accent">Events</a></li>
						<li><a href="/" class="hover:bg-accent">Event Booking</a></li>
						<li><a href="/" class="hover:bg-accent">ATC Feedback</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50"><Radar size={20} /> Controllers</summary>
					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a href="/" class="hover:bg-accent">Training</a></li>
						<li><a href="/" class="hover:bg-accent">Roster</a></li>
						<li><a href="/" class="hover:bg-accent">Documentation</a></li>
					</ul>
				</details>
			</li>

			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50"><Info size={20} /> About</summary>
					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a href="/" class="hover:bg-accent">Staff</a></li>
						<li><a href="/" class="hover:bg-accent">Policies</a></li>
						<li><a href="/" class="hover:bg-accent">HQ</a></li>
						<li><a href="/" class="hover:bg-accent">Contact</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
