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
    <base-dialog @close="closeDialog()" title="login">
      <div>
        <form>
          <label>Email</label>
          <input />
          <label>Password</label>
          <input />
        </form>
      </div>

      <template #signup>
        <div>signup</div>
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
  }
</style>
