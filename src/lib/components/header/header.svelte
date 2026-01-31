<script>
	import Button from '$components/ui/button/button.svelte';

	let open = false;
</script>

<nav class="bg-background mx-4 md:mx-10 mt-5">
	<div class="flex justify-between items-center">
		<!-- Left -->
		<div class="w-32">
			<p class="text-2xl">Welcome!</p>
		</div>
		<!-- Desktop menu -->
		<div class="hidden md:flex justify-end grow">
			<Button
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-secondary border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">01.</span>
				About
			</Button>
			<Button
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-secondary border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">02.</span>
				Projects
			</Button>
			<Button
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-secondary border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">03.</span>
				Work
			</Button>
			<Button
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-secondary border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">04.</span>
				Contact
			</Button>
			<Button
				class="bg-background hover:bg-secondary ml-3 border-2 border-accent hover:border-secondary rounded-sm text-accent transition-all hover:-translate-y-0.5 duration-300 hover:cursor-pointer"
				variant="outline"
			>
				Resume
			</Button>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden px-3 py-2 border border-accent hover:border-secondary rounded-sm text-accent transition-colors"
			on:click={() => (open = !open)}
		>
			Menu
		</button>
	</div>

	<!-- Mobile dropdown -->
	{#if open}
		<div class="md:hidden flex flex-col gap-3 mt-4 pt-4 border-border border-t">
			<Button
				class="group justify-start bg-background pb-2 border-border border-b rounded-none w-full"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">01.</span>
				About
			</Button>
			<Button
				class="group justify-start bg-background pb-2 border-border border-b rounded-none w-full"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">02.</span>
				Experience
			</Button>
			<Button
				class="group justify-start bg-background pb-2 border-border border-b rounded-none w-full"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">03.</span>
				Work
			</Button>
			<Button
				class="group justify-start bg-background pb-2 border-border border-b rounded-none w-full"
			>
				<span class="mr-1 text-accent group-hover:text-secondary">04.</span>
				Contact
			</Button>
			<Button
				class="mt-2 border-2 border-accent hover:border-secondary rounded-sm w-full text-accent transition-all"
				variant="outline"
			>
				Resume
			</Button>
		</div>
	{/if}
</nav>
