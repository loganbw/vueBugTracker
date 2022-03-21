<template>
  <div v-if="cardModle">Modle active</div>
  <div :class="overflowFlag ? 'overflowFlag' : 'colContain'">
    <div v-for="col in numberOfCollumns" class="contain" draggable="true">
      <div class="title">{{ Title }}</div>
      <div v-for="card in numberOfCards">
        <base-card></base-card>
      </div>
      <div class="addCard">
        <button class="addCardIcon" @click="addCard">
          <i class="iconStyle fa-regular fa-plus fa-2xl"></i>
        </button>
      </div>
    </div>
    <div class="addButton">
      <button class="addButtonColor" @click="addCollumn">
        <i class="iconStyle fa-regular fa-plus fa-2xl"></i>
      </button>
    </div>
  </div>
</template>
<script>
  import BaseCard from "./BaseCard.vue";
  import BaseButton from "./BaseButton.vue";
  export default {
    data() {
      return {
        numberOfCollumns: 1,
        numberOfCards:0,
        overflowFlag: false,
        cardModle: false
      };
    },
    props: ["title"],
    components: [BaseCard],
    methods: {
      addCollumn() {
        this.numberOfCollumns++;
        console.log(this.numberOfCollumns);
      },
      addCard()
      {
          this.cardModle = true;
          this.numberOfCards++;
      }
    },
    computed: {
      checkCollumns() {
        if (this.numberOfCollumns > 4) {
          this.overflowFlag = true;
        }
      },
    },
    watch: {
      numberOfCollumns() {
        this.checkCollumns;
      },
    },
    components: { BaseCard, BaseButton },
  };
</script>
<style scoped>
  .addButton {
    margin: 5%;
    align-self: center;
  }
  .addButtonColor {
    background-color: #293241;
  }
  .addCard {
    margin-left: 42%;
    margin-top: 20%;
    margin: 5%;
    align-self: center;
    display: flex;
    justify-content: center;
  }
  .addCardIcon {
    background-color: green;
  }
  .contain .title {
    width: 104%;
    padding: 2%;
    border: 5px solid #98c1d9;
    background-color: #98c1d9;
    margin-left: -2%;
    margin-top: -2%;
    text-align: center;
    height: 46px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  .contain {
    border: 3px dashed grey;
    height: 35rem;
    background: rgba(1, 1, 1, 0.08);
    min-width: 15rem;
    margin: 1%;
  }
  button {
    height: 30px;
    align-content: center;
    width: 30px;
    display: flex;
    border: none;
    border-radius: 25%;
  }
  .iconStyle {
    margin-top: 60%;
    margin-left: 10%;
    color: white;
  }
  .colContain {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    height: 40rem;

    margin: 2%;
  }
  .overflowFlag {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    box-sizing: content-box;
    height: 40rem;
    margin: 2%;
  }
</style>
