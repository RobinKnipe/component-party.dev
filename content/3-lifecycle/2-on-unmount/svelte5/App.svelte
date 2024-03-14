<script lang="ts">
  import Time from "./Time.svelte";

  let showTime = $state(true);

  const toggle = (e: Event) => {
    e.preventDefault();
    showTime = !showTime;
  };
</script>

{#snippet content()}
  {#if showTime}
    <Time />
  {:else}
    <p>Time component unloaded, check console logs for output...</p>
  {/if}
{/snippet}

{@render content()}
<button on:click={toggle}>Toggle</button>
