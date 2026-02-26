<script lang="ts">
	import Header from '$components/header';
	const title = 'Rodrigo-Matuz • Contact';
	const email = 'rodrigosantoslima1311@gmail.com';
	const github = 'https://github.com/Rodrigo-Matuz';
	const linkedin = 'https://www.linkedin.com/in/rodrigo-santos-m0117/';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header title="Contact Me" />

<section class="flex min-h-screen items-center justify-center bg-background px-6">
	<div
		class="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-2xl backdrop-blur"
	>
		<h1 class="mb-4 text-4xl font-bold text-white">Let’s Build Something</h1>

		<p class="mb-8 text-zinc-400">
			I’m currently open to new opportunities, freelance projects, and interesting collaborations.
			If you have something in mind, feel free to reach out.
		</p>

		<div class="flex flex-col gap-4">
			<a
				href={`mailto:${email}`}
				class="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:bg-secondary"
			>
				Send me an email
			</a>

			<div class="flex justify-center gap-6 text-sm text-zinc-400">
				<a href={github} target="_blank" class="transition hover:text-white"> GitHub </a>

				<a href={linkedin} target="_blank" class="transition hover:text-white"> LinkedIn </a>
			</div>
		</div>

		<div class="mt-10 text-xs text-zinc-600">
			More contact options and a proper form coming soon.
		</div>
	</div>
</section>
