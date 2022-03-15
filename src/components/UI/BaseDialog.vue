<template lang="">
  <div class="background" @click="$emit('close')"></div>
  <div>
    <dialog open>
      <div>
        <h3>{{ title }}</h3>
      </div>
      <div>
        <slot></slot>
        <base-button @click="$emit('close')" value="submit"></base-button>
      </div>
      <div>
          <slot name="signup"></slot>
      </div>
    </dialog>
  </div>
</template>
<script>
  export default {
    props: ["title"],
    emits: ["close"],
  };
</script>
<style scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  dialog {
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  header {
    background-color: #3a0061;
    color: white;
    width: 100%;
    padding: 1rem;
  }

  header h2 {
    margin: 0;
  }

  section {
    padding: 1rem;
  }

  menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }

  @media (min-width: 768px) {
    dialog {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
</style>
