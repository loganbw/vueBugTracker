<template>
  <header>
    <div>
      <router-link to="/">
        <h1>
          {{ title }}
        </h1>
      </router-link>
    </div>
    <div class="navMenu">
      <section>
        <nav>
          <a v-for="(link, index) in links" :key="index" :href="link.url">
            <span class="icon" v-html="link.icon"></span>
          </a>
        </nav>
      </section>
    </div>
  </header>
</template>
<script>
  import BaseButtonVue from "../UI/BaseButton.vue";
  export default {
    props: ["title", "links", "linkName"],
    components: { BaseButtonVue },
  };
</script>
<style scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background-color: #1d2d44;
    color: white;
    display: flex;
    place-items: center;
  }
  section {
    float: right;
  }
  div{
    margin:1%;
  }
  a {
    text-decoration: none;
    color: #fff;
    margin: 1rem;
  }
  .navMenu {
    margin-left: 80%;

  }
</style>
