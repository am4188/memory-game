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
      {
        name: "Jayson Tatum",
        image: '/jayson-tatum.webp',
        showCard: false
      },
      {
        name: "Jalen Brunson",
        image: '/jalen-brunson.webp',
        showCard: false
      },
      {
        name: "Zach Lavine",
        image: '/zach-lavine.webp',
        showCard: false
      },
      {
        name: "Trae Young",
        image: '/trae-young.webp',
        showCard: false
      },
      {
        name: "Shae Gilgeous-Alexander",
        image: '/shae-gilgeous-alexander.webp',
        showCard: false
      },
      {
        name: "Devin Booker",
        image: '/devin-booker.webp',
        showCard: false
      },
      {
        name: "De'Aaron Fox",
        image: '/deaaron-fox.webp',
        showCard: false
      },
      {
        name: "Domantas Sabonis",
        image: '/domantas-sabonis.webp',
        showCard: false
      },
    ],
    hardModeEnabled: false,
    selectedCards: [],
    matchedCards: [],
    arrayOfCards: [],
    attempts: 0,
    matches: 0
  },
  getters: {
  },
  mutations: {
    TOGGLE_HARD_MODE(state) {
      state.hardModeEnabled = !state.hardModeEnabled
    }

  },
  actions: {
  },
  modules: {
  }
});

