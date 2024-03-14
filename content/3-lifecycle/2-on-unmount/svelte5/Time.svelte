<script>
  let time = $state(new Date().toLocaleTimeString());

  $effect(() => {
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString();
    }, 1000);

    return () => {
      console.log("unmount Time component at:", time);
      clearInterval(timer);
    };
  });
</script>

<p>Current time: {time}</p>
