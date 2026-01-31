<script lang="ts">
	import Header from '$components/header';
	const title = 'Rodrigo-Matuz • Home';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content="Personal website and projects by MatuZ." />
	<meta property="og:url" content="https://matuz.me" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://matuz.me/og/banner.png" />
</svelte:head>

<Header></Header>
<!-- <div class="mb-48"></div>
<div class="flex items-center bg-background">
	<div class="">
		<p class="mb-2 text-accent text-2xl">Hi, my name is</p>
		<h1 class="font-bold text-foreground text-5xl md:text-7xl tracking-tighter">
			Rodrigo dos Santos.
		</h1>
		<h1 class="mt-2 font-bold text-foreground text-4xl md:text-6xl tracking-tighter">
			A developer.
		</h1>
		<p class="mt-2 text-1xl">
			Just finished Bacharelor and currently searching for new experiences
		</p>
	</div>
</div> -->

<div class="flex justify-center items-center bg-background min-h-screen">
	<div class="text-center">
		<h1 class="font-bold text-white text-5xl md:text-7xl tracking-tighter">Work in Progress</h1>
		<p class="mt-8 text-slate-400 text-2xl">
			by <span class="font-semibold text-white">MatuZ</span>
		</p>
		<p class="mt-2 font-mono text-slate-500 text-xl">discord • @matuz</p>
	</div>
</div>
