<template>
  <div>
    <Button class="home" >{{title}}</Button>
  </div>
  
</template>
<script>
  export default {
    props: ["title"],
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
