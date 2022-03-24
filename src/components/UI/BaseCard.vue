<template>
  <div>
    <div @click="$emit('openCard')" class="card">
      <div class="title">
        <h4>{{ cardName }}</h4>
      </div>

      <div class="tags">
        <span v-for="tag in cardTags">
          {{ cardTags }}
        </span>
      </div>

      <div class="description">
        <span v-if="cardDesc != undefined"> <i class="fa-solid fa-comment-dots"></i></span>
      </div>

    </div>
  </div>
</template>
<script>
  import BaseDialog from "./BaseDialog.vue";
  export default {
    props: ["cardName", "cardDesc", "cardTags"],
    data() {
      return {
        cardId: 0,
        title: "",
        description: "",
        tagList: [],
        tagged: 0,
        cardIsOpen: false,
      };
    },
    methods: {
      openCard() {
        console.log("card open");
        this.cardIsOpen = true;
      },
    },
    components: { BaseDialog },
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
    margin-left: 90%;
  }
</style>
