import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        name: "Paolo Banchero",
        image: '/paolo-banchero.webp',
        showCard: false
      },
      {
        name: "Franz Wagner",
        image: '/franz-wagner.webp',
        showCard: false
      },
      {
        name: "Giannis Antetokounmpo",
        image: '/giannis-antetokounmpo.webp',
        showCard: false
      },
      {
        name: "Jamal Murray",
        image: '/jamal-murray.avif',
        showCard: false
      },
      {
        name: "Joel Embiid",
        image: '/joel-embiid.webp',
        showCard: false
      },
      {
        name: "Kevin Durant",
        image: '/kevin-durant.avif',
        showCard: false
      },
      {
        name: "Lebron James",
        image: '/lebron-james.webp',
        showCard: false
      },
      {
        name: "Luka Doncic",
        image: '/luka-doncic.webp',
        showCard: false
      },
      {
        name: "Nikola Jokic",
        image: '/nikola-jokic.webp',
        showCard: false
      },
      {
        name: "Stephen Curry",
        image: '/stephen-curry.webp',
        showCard: false
      },
      {
        name: "Donavan Mitchell",
        image: '/donavan-mitchell.webp',
        showCard: false
      },
      {
        name: "Damian Lillard",
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

