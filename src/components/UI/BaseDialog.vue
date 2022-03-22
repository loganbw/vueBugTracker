<template lang="">
  <div class="background" @click="$emit('close')"></div>
  <div>
    <dialog open>
      <div class="spacer">
        <h3>{{ title }}</h3>
      </div>
      <div>
        <slot name="signup"></slot>
      </div>
      <div>
        <form type="submit">
          <slot></slot>
          <div class="spacer"></div>
          <div class="submitButton">
            <base-button
              class="loginButton"
              @click="$emit('close')"
              :click="test()"
              value="submit"
              :title="submitButton"
            ></base-button>
          </div>
        </form>
      </div>
      <div class="spacer"></div>
    </dialog>
  </div>
</template>
<script>
  export default {
    props: ["title", "submitButton"],
    emits: ["close"],
    methods: {
      test() {
        console.log("test");
      },
    },
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
  .submitButton {
    display: flex;
    justify-content: center;
  }
  .spacer {
    padding: 1rem;
    justify-content: center;
    display: flex;
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
      left: calc(50% - 10rem);
      width: 20rem;
    }
  }
</style>
