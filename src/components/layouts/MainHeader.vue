<template>
  <header>
    <h1>
      {{ title }}
    </h1>
    <section>
      <nav>
        <a v-for="(link, index) in links" :key="index" :href="link">{{ linkName }}</a>
      </nav>
    </section>
  </header>
</template>
<script>
  export default {
    props: ["title", "links", "linkName"],
  };
</script>
<style scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: #1d2d44;
    color: white;
    text-align: center;
    display: flex;
    place-items: center;
  }
  section {
      display: block;
  }
  a {
    text-decoration: none;
    color: #748cab;
    margin: 0.5rem;
  }
</style>
