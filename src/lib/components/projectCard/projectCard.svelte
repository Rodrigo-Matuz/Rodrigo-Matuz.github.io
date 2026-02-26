<script lang="ts">
	export let title: string;
	export let description: string;
	export let github: string;
	export let demo: string | null = null;
	export let tags: string[] = [];
	export let image: string = '';
	export let imageAlt: string = title;
</script>

<div
	class="group flex flex-col bg-card hover:shadow-2xl backdrop-blur p-6 border-2 border-background hover:border-secondary rounded-2xl w-full transition-all hover:-translate-y-2 duration-300"
>
	<!-- Header / Banner / Thumbnail -->
	<div class="mb-5 rounded-xl w-full overflow-hidden">
		{#if image}
			<!-- Full image – preserves original aspect ratio, cropped nicely -->
			<img
				src={image}
				alt={imageAlt}
				class="w-full h-auto max-h-80 object-cover group-hover:scale-[1.03] transition-transform duration-500"
			/>
		{:else}
			<!-- Banner fallback – wide & short -->
			<div
				class="relative flex justify-center items-center bg-linear-to-r from-[#1e65ff] to-[#702ef3] w-full aspect-21/9 overflow-hidden"
			>
				<div
					class="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shine"
				></div>
				<span
					class="opacity-35 font-black text-white text-5xl sm:text-6xl md:text-7xl tracking-tighter select-none"
				>
					{title.slice(0, 3).toUpperCase()}
				</span>
			</div>
		{/if}
	</div>

	<!-- Title & Description -->
	<div class="flex flex-col mt-auto grow">
		<h2 class="font-bold text-white text-2xl">{title}</h2>
		<p class="mt-3 text-slate-400 line-clamp-4">{description}</p>

		<!-- Tags -->
		<div class="flex flex-wrap gap-2 mt-4">
			{#each tags as tag}
				<span class="bg-background px-3 py-1 rounded-full font-medium text-slate-300 text-xs">
					{tag}
				</span>
			{/each}
		</div>

		<!-- Buttons -->
		<div class="flex gap-4 mt-6">
			<a
				href={github}
				target="_blank"
				class="bg-accent hover:bg-destructive px-4 py-2 rounded-lg font-semibold text-white transition"
			>
				View Code
			</a>

			{#if demo}
				<a
					href={demo}
					target="_blank"
					class="hover:bg-zinc-800 px-4 py-2 border border-zinc-600 rounded-lg text-white transition"
				>
					Live Demo
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	@keyframes shine {
		0% {
			transform: translateX(-120%);
		}
		100% {
			transform: translateX(120%);
		}
	}
	.animate-shine {
		animation: shine 8s infinite linear;
	}
</style>
