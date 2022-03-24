<template>
  <div v-if="cardModle">
    <div></div>
    <base-dialog @close="closeDialog()">
      <form type="submit" @submit.prevent>
        <div class="cardForm">
          <label for="name"> Bug Issue</label>
          <input v-model="cardName" id="title" type="text" />
          <label for="issue">description</label>
          <textarea v-model="cardDesc" name="issue" id="issue" cols="30" rows="5"></textarea>
          <label id="tag">Tags</label>
          <ul>
            <li v-for="tag in tags">
              <input v-model="cardTag" id="tag" type="radio" name="tag" :value="tag.name" />
              <label class="tagLabel" for="red">{{ tag.name }}</label>
            </li>
          </ul>
        </div>
        <div class="spacer"></div>
        <div class="submitButton">
          <base-button
            class="loginButton"
            @click="pushCard(currentCol, numberOfCards, cardName, cardDesc, cardTag)"
            value="submit"
            title="Add Issue"
          ></base-button>
        </div>
      </form>
    </base-dialog>
  </div>
  <div :class="overflowFlag ? 'overflowFlag' : 'colContain'">
    <div v-for="col in collumns" :id="col" class="contain" draggable="true">
      <div @click="changeNameFun(col), focusColInput()" class="title">
        <div v-show="changeName && currentCol == col.id">
          <form type="submit" @submit.prevent="closeChangeNameFun">
            <input
              ref="colInput"
              @input="test($event)"
              v-model="collumns[col.id].collumnName"
              focus
            />
            <button style="display: none" type="submit" value="submit"></button>
          </form>
        </div>
        <div v-if="!changeName">
          {{ collumns[col.id].collumnName }}
        </div>
      </div>

      <div draggable="true" v-for="card in collumns[col.id].cards" :id="numberOfCards">
        <base-card
          :cardName="card.name"
          :cardDesc="card.description"
          @openCard="openCard()"
        ></base-card>
      </div>
      <div class="addCard">
        <button class="addCardIcon" @click="addCard(col.id)">
          <i class="iconStyle fa-regular fa-plus fa-2xl"></i>
        </button>
      </div>
    </div>
    <div class="addButton">
      <button class="addButtonColor" @click="addCollumn">
        <i class="iconStyle fa-regular fa-plus fa-2xl"></i>
      </button>
    </div>
    <div v-if="cardIsOpen">
      <base-dialog @close="closeCard()"> </base-dialog>
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
        numberOfCollumns: 0,
        numberOfCards: 0,
        cardIsOpen: false,
        overflowFlag: false,
        cardModle: false,
        currentCol: 0,
        changeName: false,
        currentCol: 0,
        collumnId: 0,
        collumns: [
          {
            id: 0,
            collumnName: "",
            cards: [],
          },
        ],

        tags: [
          { id: 1, name: "red", description: "" },
          { id: 2, name: "blue", description: "" },
          { id: 3, name: "green", description: "" },
        ],
      };
    },
    watch: {},
    props: ["title"],
    components: [BaseCard],
    methods: {
      focusColInput() {
        console.log(this.$refs.colInput);
        //this.$refs.colInput.$el.focus();
      },
      test(event) {
        let t = "";
      },
      closeChangeNameFun() {
        console.log("CLOSE");
        this.changeName = false;
      },
      changeNameFun(col) {
        for (let index = 0; index < this.collumns.length; index++) {
          if (index == col.id) {
            this.currentCol = index;
            this.focusColInput
            return (this.changeName = true);
          }
        }
      },
      openCard() {
        this.cardIsOpen = true;
      },
      closeCard() {
        this.cardIsOpen = false;
      },
      closeDialog() {
        this.cardModle = false;
      },
      addCollumn() {
        this.numberOfCollumns++;
        this.collumns.push({ id: this.numberOfCollumns, cards: [] });
        console.log(this.collumns);
      },
      addCard(colId) {
        this.cardModle = true;
        this.numberOfCards++;
        this.currentCol = colId;
      },
      logItem(item) {
        console.log(item);
      },
      pushCard(colId, cardId, cardName, cardDesc, cardTag) {
        console.log(this.collumns);
        this.collumns[colId].cards.push({
          id: cardId,
          name: cardName,
          description: cardDesc,
          tags: [cardTag],
          dateCreated: new Date(),
        });
        this.closeDialog();
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
  .submitButton {
    display: flex;
    justify-content: center;
  }
  .loginButton {
    width: 35%;
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
