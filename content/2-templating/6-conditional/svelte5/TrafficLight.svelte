<script>
  const TRAFFIC_LIGHTS = ["green", "orange", "red"];
  let lightIndex = $state(0);

  const light = $derived(TRAFFIC_LIGHTS[lightIndex]);

  function nextLight() {
    lightIndex = (lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
</script>

<button onclick={nextLight}>Next light</button>
<p>Light is: {light}</p>
<p>
  You must
  {#if light === "red"}
    <span>WAIT</span>
  {:else if light === "orange"}
    <span>STOP</span>
  {:else if light === "green"}
    <span>GO</span>
  {/if}
</p>
