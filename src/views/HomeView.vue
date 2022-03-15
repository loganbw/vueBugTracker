<script>
  import BaseButton from "../components/UI/BaseButton.vue";
  import BaseDialogVue from "../components/UI/BaseDialog.vue";
  export default {
    components: { BaseButton, BaseDialogVue },
    methods: {
      flipIsLogin() {
        this.isLogin = !this.isLogin;
        console.log(this.isLogin);
      },
      closeDialog() {
        this.isLogin = false;
      },
    },
    data() {
      return {
        isLogin: false,
      };
    },
  };
</script>

<template>
  <div v-if="isLogin">
    <base-dialog @close="closeDialog()" title="login" submitButton="Login">
      <div class="form">
        <form>
          <label for="mail">Email</label>
          <input id="mail" type="email" />
          <label for="password">Password</label>
          <input type="password" id="password" />
        </form>
      </div>

      <template #signup>
        <div><p class="signup">signup</p></div>
      </template>
    </base-dialog>
  </div>
  <div class="login">
    <BaseButton @click="flipIsLogin()" title="Login" />
  </div>
</template>

<style scoped>
  .login {
    margin-top: 25%;
    display: flex;
    justify-content: center;
  }
  .signup {
    padding: 10%;
    margin-top: 9%;
    margin-right: 5%;
    float: right;
    border-left: outset;
    border-color: #3d5a80;
  }
  .form {
    margin: 5%;
  }
  form {
    display: flex;
    /* flex-wrap: wrap; */
    align-items: flex-start;
    /* justify-content: space-evenly; */
    /* float: left; */
    flex-direction: column;
  }
</style>
