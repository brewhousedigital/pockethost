<script lang="ts">
  import { AlertTypes } from '$components/svelte/AlertBar.types'
  import { SvgIcons } from '$util/svgIcons'

  export let title: string = ''
  export let text: string = ''
  export let icon: SvgIcons | undefined = undefined
  export let alertType: AlertTypes = AlertTypes.Warning
</script>

<div class="container">
  <div class="alert alert-{alertType}">
    {#if icon}
      {icon}
    {/if}
    <span><slot /></span>
  </div>
</div>
