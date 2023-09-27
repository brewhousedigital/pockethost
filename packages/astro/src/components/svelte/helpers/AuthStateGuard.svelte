<script lang="ts">
  import { isAuthStateInitialized } from '$util/stores'
  import { onMount } from 'svelte'

  console.log(`hello world`)
  onMount(() => {})
</script>

{#if $isAuthStateInitialized}
  <slot />
{/if}
