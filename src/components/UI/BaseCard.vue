<template>
  <div>
    <div class="card">
      <div class="title">
        <h4>{{ cardName }}</h4>
      </div>

      <div class="description">
        <span v-if="cardDesc != null || cardDesc != ''">
        
        </span>
      </div>
      <div>
        <span>
          {{ cardTags }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["cardName", "cardDesc", "cardTags"],
    data() {
      return {
        cardId: 0,
        title: "",
        description: "",
        tagList: [],
        tagged: 0,
      };
    },
    methods: {},
  };
</script>
<style scpoed>
  .card {
    height: 60px;
    border-radius: 2%;
    justify-content: center;
    margin: 5%;
    padding: 5%;
    background-color: rgb(255, 254, 246);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .card:hover {
    transform: scale(1.04);
  }
  .title {
    display: flex;
    justify-content: center;
  }
  h4 {
    font-weight: bold;
  }
  .description {
    height: 80px;
    margin-left:90%;
  }
</style>
