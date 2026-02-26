<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$components/header';
	import { Button } from '$components/ui/button';
	import { SiGithub, SiDiscord, SiGmail } from '@icons-pack/svelte-simple-icons';
	const title = 'Rodrigo-Matuz • Home';
</script>

<svelte:head>
	<title>{title}</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Standard SEO -->
	<meta name="description" content="Personal website and projects by MatuZ." />
	<meta name="author" content="Rodrigo-Matuz" />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content="Personal website and projects by MatuZ." />
	<meta property="og:url" content="https://matuz.me" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://matuz.me/og/banner.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content="Personal website and projects by MatuZ." />
	<meta name="twitter:image" content="https://matuz.me/og/banner.png" />
</svelte:head>

<Header title="Home" />

<a
	href="mailto:rodrigosantoslima1311@gmail.com"
	class="right-6 md:right-8 lg:right-10 bottom-6 md:bottom-8 lg:bottom-10 z-40 fixed font-mono text-muted-foreground/80 text-xs sm:text-sm md:text-base hover:underline tracking-tight transition-colors pointer-events-auto"
>
	rodrigosantoslima1311@gmail.com
</a>

<div class="flex min-h-[calc(100vh-5rem)]">
	<!-- LEFT SIDEBAR -->
	<aside class="hidden md:block to-muted/30 w-20 lg:w-72 xl:w-20 shrink-0">
		<div
			class="sticky flex flex-col justify-end items-center gap-7 pb-10 h-[calc(100vh-5rem)] text-muted-foreground"
		>
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/Rodrigo-Matuz"
				target="_blank"
				class="hover:bg-transparent hover:text-accent"
			>
				<SiGithub class="size-7" />
			</Button>

			<Button
				variant="ghost"
				size="icon"
				href="https://discordapp.com/users/584503954969198612"
				target="_blank"
				class="hover:bg-transparent hover:text-accent"
			>
				<SiDiscord class="size-7" />
			</Button>

			<Button
				variant="ghost"
				size="icon"
				href="mailto:rodrigosantoslima1311@gmail.com"
				class="hover:bg-transparent hover:text-accent"
			>
				<SiGmail class="size-7" />
			</Button>
		</div>
	</aside>

	<!-- RIGHT CONTENT AREA -->
	<div class="flex flex-1 justify-start md:justify-center items-center px-6 md:px-12 lg:px-16">
		<div class="md:ml-0 lg:-ml-8 xl:-ml-16 md:py-0 w-full max-w-3xl">
			<p class="mb-3 font-medium text-accent text-xl md:text-2xl">Hi, my name is</p>
			<h1 class="font-bold text-foreground text-5xl sm:text-6xl md:text-7xl tracking-tight">
				Rodrigo dos Santos.
			</h1>

			<h2 class="mt-2 font-bold text-foreground text-4xl sm:text-5xl md:text-6xl tracking-tight">
				A developer.
			</h2>

			<p class="mt-6 max-w-xl text-muted-foreground text-lg md:text-xl">
				Just finished my Bachelor's degree and currently searching for new experiences and
				opportunities to grow as a developer.
			</p>

			<div class="flex flex-wrap gap-4 mt-10">
				<Button
					onclick={() => goto('/projects')}
					variant="outline"
					size="lg"
					class="bg-background hover:bg-accent px-8 border-2 border-accent rounded-sm text-accent transition-all hover:-translate-y-0.5 duration-300 hover:cursor-pointer"
				>
					Check out my projects!
				</Button>
			</div>
		</div>
	</div>
</div>
