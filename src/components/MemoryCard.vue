<template>
  <div class="container">
    <div class="card" v-on:click="clicked(card)" v-bind:class="{ 'rotate' : $store.state.hardModeEnabled }">
      <img v-if="card.showCard" v-bind:src="card.image">
      <img v-else src="/card-back-side.jpg" />
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['card', 'hardModeEnabled'], 
  name: 'MemoryCard',
  methods: {
    toggleShowCard(card) {
      card.showCard = !card.showCard;
    },
    clicked(card) {
      if(!card.showCard && this.$store.state.selectedCards.length < 2) {
        card.showCard = true;
        this.$store.state.selectedCards.push(card);

        if(this.$store.state.selectedCards.length === 2) {
          if(this.checkForMatch()) {
            this.$store.state.matchedCards.push(this.$store.state.selectedCards[0]);
            this.$store.state.matchedCards.push(this.$store.state.selectedCards[1]);
            
            this.$store.state.selectedCards = [];
            this.$store.state.matches++;
          } else {
            setTimeout(this.hideCards, 1200);            
          }          
          this.$store.state.attempts++;
        }
        console.log("and now the length of selectedCards is: " + this.$store.state.selectedCards.length);
        
      }
    },
    checkForMatch() {
      if(this.$store.state.selectedCards[0].name == this.$store.state.selectedCards[1].name) {
        return true;
      } else {
        return false;
      }
    },
    hideCards() {
      this.$store.state.arrayOfCards.find(card => card.id === this.$store.state.selectedCards[0].id).showCard = false;
      this.$store.state.arrayOfCards.find(card => card.id === this.$store.state.selectedCards[1].id).showCard = false;
     
      this.$store.state.selectedCards = [];
    },

    
    
  }
}
</script>

<style>

img {
  height: 10.4rem;
  width: 12rem;
  margin: 0.3rem;


}

.rotate {
  animation: rotate-stop 2s infinite linear;
  transform: rotate();
}


@keyframes rotate-stop{
  0%{
    transform: rotate(0deg);
  }
  5%, 25%{
    transform: rotate(90deg);
  }
  30%, 50%{
    transform: rotate(180deg);
  }
  55%, 75%{
    transform: rotate(270deg);
  }
  80%, 100%{
    transform: rotate(360deg);
  }
}
</style>