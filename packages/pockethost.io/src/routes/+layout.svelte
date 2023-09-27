<script>
  import InitializeTooltips from '$components/svelte/InitializeTooltips.svelte'
  import Navbar from '$components/svelte/Navbar.svelte'
  import VerifyAccountBar from '$components/svelte/VerifyAccountBar.svelte'
  import AuthStateGuard from '$components/svelte/helpers/AuthStateGuard.svelte'
  import Meta from '$components/svelte/helpers/Meta.svelte'
  import Protect from '$components/svelte/helpers/Protect.svelte'
  import ThemeDetector from '$components/svelte/helpers/ThemeDetector.svelte'
</script>

<Meta />
<Protect />
<ThemeDetector />

<Navbar />

<AuthStateGuard>
  <VerifyAccountBar />
</AuthStateGuard>

<main data-sveltekit-prefetch>
  <slot />
</main>

<InitializeTooltips />

<style lang="scss">
</style>
