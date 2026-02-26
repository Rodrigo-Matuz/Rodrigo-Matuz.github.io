<script lang="ts">
	import Header from '$components/header';
	import ProjectCard from '$components/projectCard';
	import Space from '$components/space';
	const title = 'Rodrigo-Matuz • Projects';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header title="My Projects" />

<Space larger={true} />

<div class="mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">
	<div class="gap-x-6 gap-y-10 md:gap-x-10 lg:gap-x-12 grid grid-cols-1 md:grid-cols-2">
		<ProjectCard
			title="Wallpaper Picker UI"
			description="A simple, lightweight desktop UI for browsing, selecting, and applying wallpapers."
			github="https://github.com/Rodrigo-Matuz/wallpaper-picker-ui"
			tags={['Svelte', 'Tailwind', 'TypeScript', 'Rust', 'Linux']}
			image="/og/WallpaperPickerUIBanner.png"
			imageAlt="Thumbnail for Wallpaper Picker UI Banner"
		/>
		<ProjectCard
			title="Cinema Automation Challenge - Robot Framework"
			description="Este repositório foi criado como parte do desafio de automação de testes para uma aplicação de cinema, com o objetivo de praticar e demonstrar conhecimentos avançados em automação de testes web utilizando o Robot Framework com Browser Library."
			github="https://github.com/Rodrigo-Matuz/cinema-automation-challenge"
			tags={['Robot Framework', 'Python', 'Playwright', 'QA']}
		/>
	</div>
</div>

<Space larger={true} />
