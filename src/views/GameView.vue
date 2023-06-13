<template>
  <div class="container">
    <div class="scoreboard">
        <h1>Correct Selections: </h1>
        <h1>Attempts: </h1>
        <h1>Total Score: </h1>
        
    </div>
    <div class="memory-cards">
        <MemoryCard v-for="(card, index) in arrayOfCards" v-bind:key="generateKey(index)" v-bind:card="card"/>
    </div>
  </div>
</template>

<script>
import MemoryCard from '../components/MemoryCard.vue'

export default {   
    data() {
        return {
            
            arrayOfCards: [],
        }
    },
    name: 'GameView',
    components: MemoryCard,
    created() {
        this.$store.state.cards.forEach(card => {
            this.arrayOfCards.push(card);
        });
        const dupArray = this.arrayOfCards;
        this.arrayOfCards = this.arrayOfCards.concat(dupArray);
        
        let id = 1;
        for(let i = 0; i < this.arrayOfCards.length; i++) {
            this.arrayOfCards[i].id = id;
            console.log(this.arrayOfCards[i].id)
            id++;
        }
        this.arrayOfCards = this.arrayOfCards.sort(() => Math.random() - 0.5);
        
        console.log(this.arrayOfCards);
    },
    methods: {
        generateKey(index) {
            return 'item_' + index;
  }
    }
    
}
</script>

<style>

</style>