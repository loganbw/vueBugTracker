<template>
  <div>
    <div class="card">
      <h3>{{name}}</h3>
      <div>
          <span>
              {{issue}}
          </span>
        
      </div>
      <div>
          <span>
              {{tags}}
          </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      props:['title','issue','tags'],
    data() {
      return {
        cardId: 0,
        title: "",
        description: "",
        tagList: [],
        tagged: 0,
      };
    },
    methods:{

    }
  };
</script>
<style scpoed>
  .card {
    height: 60px;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    margin: 5%;
    padding: 5%;
    background-color: rgb(255, 254, 246);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transition: all 0.2s ease-in-out;
  }
  .card:hover {
    transform: scale(1.04);
  }
</style>
