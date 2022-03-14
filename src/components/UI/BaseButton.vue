<template>
  <div>
    <RouterLink class="home" :to="routerLinkTo">{{title}}</RouterLink>
  </div>
  
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

  export default {
    props: ["title", "routerLinkTo"],
    component:{RouterLink, RouterView},
    data() {
      return {};
    },
  };
</script>
<style scoped>
  div {
    display: flex;
    margin-top: 40%;
    justify-content: center;
  }
  .home {
    width: 15%;
    text-decoration: none;
    text-align: center;
    padding: 1%;
    background-color: #3e5c76;
    color: #f0ebd8;
    font-weight: bold;

  box-shadow: 0 8px 8px -4px 
  }
  .home:hover{
      background-color: #748cab;
  }
</style>
