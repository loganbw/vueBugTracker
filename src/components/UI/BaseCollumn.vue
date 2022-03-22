<template>
  <div v-if="cardModle">
    <div></div>
    <base-dialog @close="closeDialog()">
      <div class="cardForm">
        <label for="title"> Bug Issue</label>
        <input id="title" type="text" />
        <label for="issue">description</label>
        <textarea name="issue" id="issue" cols="30" rows="5"></textarea>
        <label id="tag">Tags</label>
        <ul>
          <li v-for="tag in tags">
            <input id="tag" type="radio" name="tag" :value="tag.name" />
            <label class="tagLabel" for="red">{{ tag.name }}</label>
          </li>
        </ul>
      </div>
    </base-dialog>
  </div>
  <div :class="overflowFlag ? 'overflowFlag' : 'colContain'">
    <div v-for="col in numberOfCollumns" :id="col" class="contain" draggable="true">
      <div class="title">{{ col.id }}</div>
      <div draggable="true" v-for="card in cards" :id="card">
        <base-card ></base-card>
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
  import BaseDialog from "./BaseDialog.vue";
  export default {
    data() {
      return {
        numberOfCollumns: 1,
        numberOfCards: 0,
        overflowFlag: false,
        cardModle: false,
        collumnId: 0,
        cards: [],
        tags: [
          { id: 1, name: "red", description: "" },
          { id: 2, name: "blue", description: "" },
          { id: 3, name: "green", description: "" },
        ],
      };
    },
    props: ["title"],
    components: [BaseCard],
    methods: {
      closeDialog() {
        this.cardModle = false;
      },
      addCollumn() {
        this.numberOfCollumns++;
        console.log(this.numberOfCollumns);
      },
      addCard() {
        this.cardModle = true;
        this.numberOfCards++;
        this.cards.push();
      },
      logItem(item) {
        console.log(item);
      },
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
    components: { BaseCard, BaseButton, BaseDialog },
  };
</script>
<style scoped>
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  li {
    display: flex;

    align-items: center;
  }
  .tagLabel {
    margin: 2%;
  }
  .cardForm {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: space-around;
  }
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
    margin: 10%;
    box-shadow: 0 0 4px #000;
  }
  .contain .title {
    width: 104%;
    padding: 2%;
    background-color: #1e465e;
    margin-left: -2%;
    margin-top: -2%;
    text-align: center;
    height: 46px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  .contain {
    border: 1px dashed grey;
    height: 35rem;
    background: rgba(1, 1, 1, 0.08);
    box-shadow: 0 0 5px #000;
    min-width: 15rem;
    margin: 1%;
  }
  .contain:hover {
    transform: scale(1.01);
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
    border-radius: 1%;

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
