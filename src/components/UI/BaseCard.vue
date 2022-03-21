<template>
  <div>
    <div class="card">
      <slot></slot>
      <slot name="icons"></slot>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style scpoed>
  .card {
    height: 60px;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    margin: 2%;
    padding: 5%;
    background-color: rgb(255, 254, 246);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
</style>
