<script>
  let isAvailable = $state(false);
</script>

<p>
  I am {#if !isAvailable}un{/if}available
</p>
<input id="is-available" type="checkbox" bind:checked={isAvailable} />
<label for="is-available">Is available</label>
