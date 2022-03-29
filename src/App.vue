<script>
  import MainHeaderVue from "./components/layouts/MainHeader.vue";
  import BaseButton from "./components/UI/BaseButton.vue";
  import BaseSideBarVue from "./components/UI/BaseSideBar.vue";
import BaseCollumn from "./components/UI/BaseCollumn.vue";
import BaseSideBar from "./components/UI/BaseSideBar.vue";
  export default {
    data() {
      return {
        links: [
          { url: "https://github.com/loganbw", icon: '<i class="fa-brands fa-github"></i>' },
          {
            url: "https://linkedin.com/in/loganweathersby",
            icon: '<i class="fa-brands fa-linkedin"></i>',
          },
        ],
      };
    },
    components: {
    MainHeaderVue,
    BaseCollumn,
    BaseSideBar
},
  };
</script>

<template>
  <section>
    <MainHeaderVue title="Website Name" :links="links" linkName="link" />
  </section>
  <div>
    <router-view></router-view>
  </div>
  
</template>

<style>
  @import "@/assets/base.css";

  /* #app {
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }


  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
    }

    #app {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }


    .logo {
      margin: 0 2rem 0 0;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  } */
</style>
