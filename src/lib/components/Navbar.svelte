<script>
	import { Plane } from 'lucide-svelte';
</script>

<div class="navbar bg-transparent">
	<div class="flex-1">KhaleejVACC</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-1 px-1">
			<li><a class="hover:bg-accent hover:bg-opacity-50" href="/">Home</a></li>
			<li>
				<details>
					<summary class="hover:bg-accent hover:bg-opacity-50"><Plane size={20} /> Pilots</summary>
					<ul class="menu menu-vertical bg-accent bg-opacity-50">
						<li><a class="hover:bg-accent" href="/">Home</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
