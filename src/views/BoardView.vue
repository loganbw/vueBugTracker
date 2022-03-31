<template>
  <div class="boardHeader">
    <h1>Team's Boards</h1>
  </div>
  <div></div>
  <div>
    <BaseSideBar />
    <BaseCollumnVue />
  </div>
</template>
<script>
  import BaseCollumnVue from "../components/UI/BaseCollumn.vue";
  import BaseSideBar from "../components/UI/BaseSideBar.vue";
  export default {
    components: {
      BaseCollumnVue,
      BaseSideBar,
    },
  };
</script>
<style scoped>
  div {
    display: flex;
  }
  .boardHeader {
    display: flex;
    justify-content: flex-start;
    height: 60px;
    align-items: center;
    height: 50px;
    padding: 1%;
    background-color: rgba(30, 46, 67, 0.8);
    color: rgb(255, 255, 255);
  }
</style>
