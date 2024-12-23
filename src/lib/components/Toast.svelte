<script lang="ts">
	import { X } from 'lucide-svelte';

	let visible = $state(false);

	setTimeout(() => (visible = true), 1000);
</script>

{#if visible}
	<div class="toast toast-center">
		<div class="alert bg-base-100">
			<button class="btn btn-sm" onclick={() => (visible = false)}>
				<X size={20} />
			</button>

			<span
				>Looking to give ATC feedback? Click <a href="/atc/feedback" class="btn-link text-secondary hover:opacity-50 transition-opacity"
					>here</a
				>.</span
			>
		</div>
	</div>
{/if}

<style lang="postcss">
	.alert {
		grid-auto-flow: column;
		grid-template-columns: auto minmax(auto, 1fr);
		justify-items: start;
		text-align: start;
	}
</style>
