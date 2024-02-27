<script>
  let inputElement;

  $effect(() => {
    inputElement.focus();
  });
</script>

<input value="not focused" />
<input bind:this={inputElement} value="has focus" />
