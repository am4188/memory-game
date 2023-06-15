import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        name: "Paolo",
        image: '/paolo-banchero.webp',
        showCard: false
      },
      {
        name: "Franz",
        image: '/franz-wagner.webp',
        showCard: false
      },
      {
        name: "Giannis",
        image: '/giannis-antetokounmpo.webp',
        showCard: false
      },
      {
        name: "Jamal",
        image: '/jamal-murray.avif',
        showCard: false
      },
      {
        name: "Joel",
        image: '/joel-embiid.webp',
        showCard: false
      },
      {
        name: "Kevin",
        image: '/kevin-durant.avif',
        showCard: false
      },
      {
        name: "Lebron",
        image: '/lebron-james.webp',
        showCard: false
      },
      {
        name: "Luka",
        image: '/luka-doncic.webp',
        showCard: false
      },
      {
        name: "Nikola",
        image: '/nikola-jokic.webp',
        showCard: false
      },
      {
        name: "Stephen",
        image: '/stephen-curry.webp',
        showCard: false
      },
      {
        name: "Donavan",
        image: '/donavan-mitchell.webp',
        showCard: false
      },
      {
        name: "Damian",
        image: '/damian-lillard.webp',
        showCard: false
      },
    ],
    selectedCards: [],
    matchedCards: [],
    arrayOfCards: [],
    attempts: 0,
    matches: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

