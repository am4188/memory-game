<template>
  <div class="container">
    <div class="card" v-on:click="clicked(card)">
      <img v-if="card.showCard" v-bind:src="card.image">
      <img v-else src="/card-back-side.jpg"/>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      selectedCards: this.$store.state.selectedCards,
      matchedCards: this.$store.state.matchedCards,
      attempts: 0,
      matches: 0
    }
  },
  props: ['card'], 
  name: 'MemoryCard',
  methods: {
    toggleShowCard(card) {
      card.showCard = !card.showCard;
    },
    clicked(card) {
      if(!card.showCard) {
        card.showCard = true;
        // if card is second card, check if the two cards match
        this.$store.state.selectedCards.push(card);
        if(this.$store.state.selectedCards.length === 2) {
          if(this.checkForMatch()) {
            console.log("checking for match")
            this.$store.state.matchedCards.push(this.$store.state.selectedCards[0]);
            this.$store.state.matchedCards.push(this.$store.state.selectedCards[1]);
            
            this.matches++;
          } else {
            console.log("not a match");
            setTimeout(this.hideCards, 3000);
            
          }
          setTimeout(this.hideCards, 3000);
          
          this.attempts++;
        }
        console.log("and now the length of selectedCards is: " + this.$store.state.selectedCards.length);
        
      }
    },
    checkForMatch() {
      console.log("checking for match");
      console.log(this.$store.state.selectedCards[0].name);
      console.log(this.$store.state.selectedCards[1].name);
      if(this.$store.state.selectedCards[0].name == this.$store.state.selectedCards[1].name) {
        return true;
      } else {
        return false;
      }
    },
    hideCards() {
      console.log(this.$store.state.selectedCards[0]);
      const card1 = this.$store.state.cards.find(card => card.id === this.$store.state.selectedCards[0].id);
      const card2 = this.$store.state.cards.find(card => card.id === this.$store.state.selectedCards[1].id);
      card1.showCard = false;
      card2.showCard = false;
      this.$store.state.selectedCards = [];
    }
    
  }
}
</script>

<style>

img {
  height: 15rem;
  width: 17rem;
  margin: 0.3rem;
}
</style>