<template>
  <div>
    <button class="button-3" role="button" >{{title}}</button>
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
    margin: 5%;
    justify-content: center;
  }
  .home {
    width: 15%;
    text-decoration: none;
    text-align: center;
    padding: 1%;
    background: #49779e;
    color: #f0ebd8;
    font-weight: bold;
    border-radius: 5%;
    outline: none;
  }

.button-3 {
  width: 15%;
  appearance: none;
  background-color: #49779e;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #f0ebd8;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #5965d1;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #bedfe4;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #bedfe4;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
  
</style>
