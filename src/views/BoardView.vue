<template>
  <div class="boardHeader">
    <h2>Team's Boards</h2>
  </div>
  <div></div>
  <div>
    <BaseCollumnVue />
  </div>
</template>
<script>
  import BaseCollumnVue from "../components/UI/BaseCollumn.vue";
  export default {
    components: {
      BaseCollumnVue,
    },
  };
</script>
<style scoped>
  .boardHeader {
    display: flex;
    justify-content: center;
    margin:1%;
  }
</style>
