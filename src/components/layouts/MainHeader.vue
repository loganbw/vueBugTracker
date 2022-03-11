<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
  <section>
    <nav></nav>
  </section>
</template>
<script>
  export default {
    props: ["title"],
  };
</script>
<style scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    display: flex;
    place-items: center;
  }
</style>
