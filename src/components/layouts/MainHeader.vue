<template>
  <header>
    <div>
      <h1>
        {{ title }}
       
      </h1>
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
    components:{BaseButtonVue}
  };
</script>
<style scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: #1d2d44;
    color: white;
    display: flex;
    place-items: center;
  }
  section {
    float: right;
  }
  a {
    text-decoration: none;
    color: #748cab;
    margin: 0.5rem;
  }
  .navMenu {
    margin-left: 70%;
  }
</style>
