<template>
  <div>
    <nav>
      <ul>
        <router-link class="routerLinkText" to=""><li>Teams</li></router-link>
        <router-link class="routerLinkText" to=""><li>Your Board</li></router-link>
        <router-link class="routerLinkText" to=""><li>Change Board Flow</li></router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {};
</script>
<style scoped>
  div {
    background-color: rgba(30, 46, 67, 0.8);
    width: 130px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  ul {
    list-style-type: none;
    margin-top:50%;
  }
  li {
    margin-bottom: 25%;
    text-decoration: none;
    color: #fff;
  }
  .routerLinkText{
      text-decoration: none;
  }
</style>
