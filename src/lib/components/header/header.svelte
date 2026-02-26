<script>
	import { Button } from '$components/ui/button';
	import { goto } from '$app/navigation';
</script>

<nav class="bg-background mx-4 md:mx-10 mt-5">
	<div class="flex justify-between items-center">
		<!-- Left -->
		<div class="w-32">
			<p class="text-2xl">Welcome!</p>
		</div>

		<!-- Right -->
		<div class="hidden md:flex justify-end grow">
			<Button
				onclick={() => goto('/')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-destructive border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-destructive">01.</span>
				Home
			</Button>

			<Button
				onclick={() => goto('/about')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-destructive border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-destructive">02.</span>
				About
			</Button>

			<Button
				onclick={() => goto('/projects')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-destructive border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-destructive">03.</span>
				Projects
			</Button>

			<Button
				onclick={() => goto('/contact')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-destructive border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-destructive">04.</span>
				Contact
			</Button>

			<Button
				onclick={() => goto('/resume')}
				class="bg-background hover:bg-destructive ml-3 border-2 border-accent hover:border-destructive rounded-sm text-accent transition-all hover:-translate-y-0.5 duration-300 hover:cursor-pointer"
				variant="outline"
			>
				Resume
			</Button>
		</div>
	</div>
</nav>
