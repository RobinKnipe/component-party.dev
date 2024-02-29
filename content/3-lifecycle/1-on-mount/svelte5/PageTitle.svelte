<script>
  let pageTitle = $state("");
  $effect(() => {
    pageTitle = document.title;
  });
  document.title = "some title";
</script>

<p>Page title is: {pageTitle}</p>
