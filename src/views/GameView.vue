<template>
  <div class="container">
    <div class="scoreboard">
        <h1>Correct Selections: </h1>
        <h1>Attempts: </h1>
        <h1>Total Score: </h1>
        
    </div>
    <div class="card-container">
        <div class="memory-cards">
            <memory-card v-for="(card, index) in this.$store.state.arrayOfCards" v-bind:key="generateKey(index)" v-bind:card="card"/>
        </div>
    </div>
  </div>
</template>

<script>
import MemoryCard from '../components/MemoryCard.vue'

export default {   
    data() {
        return {
            
            
        }
    },
    name: 'GameView',
    components: {MemoryCard},
    created() {
        this.$store.state.cards.forEach(card => {
            this.$store.state.arrayOfCards.push(card);
        });
        for(let i = 0; i < 10; i++) {
            let dupCard = {
                name: this.$store.state.arrayOfCards[i].name,
                image: this.$store.state.arrayOfCards[i].image,
                showCard: false,
            }
            this.$store.state.arrayOfCards.push(dupCard);
        }
        
        let id = 1;
        for(let i = 0; i < this.$store.state.arrayOfCards.length; i++) {
            this.$store.state.arrayOfCards[i].id = id;
            id++;
        }
        this.$store.state.arrayOfCards = this.arrayOfCards.sort(() => Math.random() - 0.5);
    },
    methods: {
        generateKey(index) {
            return 'item_' + index;
  }
    }
    
}
</script>

<style>
.card-container {
    display: flex;
    justify-content: center;

}
.memory-cards {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    align-items: center;
}
</style>