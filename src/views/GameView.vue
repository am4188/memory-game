<template>
  <div class="container">
    <div class="scoreboard">
        <h1>Correct Selections: {{ $store.state.matches }}</h1>
        <h1>Attempts: {{ $store.state.attempts }}</h1>
        <h1>Match Percentage: {{calculateMatchPercentage() }}%</h1>
        
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
        for(let i = 0; i < this.$store.state.cards.length; i++) {
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
        this.$store.state.arrayOfCards = this.$store.state.arrayOfCards.sort(() => Math.random() - 0.5);
    },
    methods: {
        generateKey(index) {
            return 'item_' + index;
        },
        calculateMatchPercentage() {
            if(this.$store.state.attempts == 0) {
                return "";
            }
            return ((this.$store.state.matches/this.$store.state.attempts) * 100).toFixed(0);
        }
    }
    
}
</script>

<style>
.scoreboard {
    display: flex;
    justify-content: center;
    border: 3px solid black;
}

.scoreboard > * {
    margin: 2rem;
}
.card-container {
    display: flex;
    justify-content: center;

}
.memory-cards {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    align-items: center;
}
</style>