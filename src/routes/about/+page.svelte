<script lang="ts">
	import Header from '$components/header';
	import Space from '$components/space';
	const title = 'Rodrigo-Matuz • About';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="About Rodrigo dos Santos Lima — Software Engineer focused on backend, system design, and performance."
	/>
</svelte:head>

<Header title="About Me" />

<section class="mx-auto px-6 py-20 max-w-4xl text-foreground">
	<h1 class="mb-10 font-bold text-4xl md:text-5xl tracking-tight">About Me</h1>

	<div class="space-y-6 text-slate-300 text-lg leading-relaxed">
		<p>
			I'm Rodrigo dos Santos Lima, a Software Engineer with over 4 years of experience and a
			bachelor's degree in Software Engineering.
		</p>

		<p>
			My background includes backend and full-stack development, microservices architecture, REST
			API design, cloud deployment, and software testing. I’ve worked in pair programming with
			senior developers on production systems, contributing to architecture decisions, code reviews,
			and scalable service design.
		</p>

		<p>
			I have strong interest in low-level programming, system design, performance optimization, and
			core computer science fundamentals. I use Linux as my primary development environment and
			enjoy understanding how systems work under the hood.
		</p>
	</div>

	<div class="mt-16">
		<h2 class="mb-6 font-semibold text-2xl">Experience</h2>

		<div class="space-y-8 text-slate-300">
			<div>
				<h3 class="font-semibold text-foreground text-xl">
					Full Stack Developer (Pair Programming)
				</h3>
				<p class="mt-2">
					Worked directly with a senior developer on production web services within a microservices
					architecture.
				</p>
				<ul class="space-y-1 mt-3 list-disc list-inside">
					<li>Designed and implemented RESTful APIs</li>
					<li>Developed backend services and full-stack features</li>
					<li>Contributed to architecture and service design</li>
					<li>Participated in code reviews and technical discussions</li>
					<li>Applied clean code and maintainability best practices</li>
				</ul>
			</div>

			<div>
				<h3 class="font-semibold text-foreground text-xl">
					Software Engineering Intern — Compass UOL
				</h3>
				<p class="mt-2">
					Worked in Agile squads delivering enterprise-level solutions and validating production
					features.
				</p>
				<ul class="space-y-1 mt-3 list-disc list-inside">
					<li>Managed sprint tasks and backlog in Jira</li>
					<li>Performed manual and automated testing using Robot Framework</li>
					<li>Validated production features and ensured stable releases</li>
					<li>Collaborated across teams in Agile/Scrum environment</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="mt-16">
		<h2 class="mb-6 font-semibold text-2xl">Technical Skills</h2>

		<div class="gap-8 grid md:grid-cols-2 text-slate-300">
			<div>
				<h3 class="mb-2 font-semibold text-foreground">Languages</h3>
				<p>Python, JavaScript, TypeScript, Rust, C, C++, SQL</p>
			</div>

			<div>
				<h3 class="mb-2 font-semibold text-foreground">Backend & Architecture</h3>
				<p>REST APIs, Microservices, MVC, Cloud Deployment</p>
			</div>

			<div>
				<h3 class="mb-2 font-semibold text-foreground">Frontend</h3>
				<p>Svelte, TypeScript</p>
			</div>

			<div>
				<h3 class="mb-2 font-semibold text-foreground">Databases</h3>
				<p>PostgreSQL, Supabase, Prisma</p>
			</div>

			<div>
				<h3 class="mb-2 font-semibold text-foreground">Testing & Process</h3>
				<p>Robot Framework, Test Automation, Agile/Scrum, Jira</p>
			</div>

			<div>
				<h3 class="mb-2 font-semibold text-foreground">Tools & Platforms</h3>
				<p>Git, Linux, AWS, Heroku, Tauri</p>
			</div>
		</div>
	</div>

	<div class="mt-16 pt-10 border-slate-700 border-t text-slate-400">
		<p>
			You can find my work on
			<a
				href="https://github.com/Rodrigo-Matuz"
				target="_blank"
				class="text-foreground hover:underline"
			>
				GitHub
			</a>.
		</p>
	</div>
</section>
