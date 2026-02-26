<script lang="ts">
	import { Button } from '$components/ui/button';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Space from '$components/space';

	export let title: string = 'Welcome!';

	let lastScrollY = 0;
	let visible = true;
	let ticking = false;

	const deltaThreshold = 5;
	const hideAfter = 100;
	const transitionDuration = 420;

	onMount(() => {
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				const current = window.scrollY;
				if (Math.abs(current - lastScrollY) < deltaThreshold) {
					ticking = false;
					return;
				}
				if (current > lastScrollY && current > hideAfter) {
					visible = false;
				} else {
					visible = true;
				}
				lastScrollY = current;
				ticking = false;
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	class={`fixed top-0 right-0 left-0 z-50 bg-background px-5 pt-5 
          transition-all duration-[${transitionDuration}ms] ease-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div class="flex justify-between items-center">
		<!-- Left -->
		<div class="w-120">
			<p class="text-2xl">{title}</p>
		</div>

		<!-- Right (desktop) -->
		<div class="hidden md:flex justify-end grow">
			<Button
				onclick={() => goto('/')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-accent border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-accent">01.</span>
				Home
			</Button>

			<Button
				onclick={() => goto('/about')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-accent border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-accent">02.</span>
				About
			</Button>

			<Button
				onclick={() => goto('/projects')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-accent border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-accent">03.</span>
				Projects
			</Button>

			<Button
				onclick={() => goto('/contact')}
				class="group bg-background hover:bg-background mx-3 border-transparent hover:border-accent border-b-2 rounded-none transition-all hover:-translate-y-0.5 duration-300 ease-out hover:cursor-pointer"
			>
				<span class="mr-1 text-accent group-hover:text-accent">04.</span>
				Contact
			</Button>

			<Button
				onclick={() => goto('/resume')}
				class="bg-background hover:bg-accent ml-3 border-2 border-accent hover:border-accent rounded-sm text-accent transition-all hover:-translate-y-0.5 duration-300 hover:cursor-pointer"
				variant="outline"
			>
				Resume
			</Button>
		</div>
	</div>
</nav>

<Space larger={true} />

<style>
	@reference 'tailwindcss';

	/* Optional: slight shadow when visible + scrolled */
	nav {
		@apply shadow-sm;
	}

	/* Make shadow appear only after some scroll (optional polish) */
	nav:not([style*='translate-y-0']) {
		@apply shadow-none;
	}
</style>
