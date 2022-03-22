<template>
  <div class="boardHeader">
    <h1>Team's Boards</h1>
  </div>
  <div></div>
  <div>
    
    <BaseCollumnVue />
    
  </div>
</template>
<script>
  import BaseCollumnVue from "../components/UI/BaseCollumn.vue";
import BaseSideBar from "../components/UI/BaseSideBar.vue";
  export default {
    components: {
    BaseCollumnVue,
    BaseSideBar
},
  };
</script>
<style scoped>
  .boardHeader {
    display: flex;
    justify-content: center;
    padding: 1%;
    background-color: rgba(30, 46, 67, 0.8);
    color: rgb(240, 235, 217);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  }
</style>
