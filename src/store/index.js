import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        name: 1,
        image: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg",
        showCard: false
      },
      {
        name: 2,
        image: "test",
        showCard: false
      },
      {
        name: 3,
        image: "",
        showCard: false
      },
      {
        name: 4,
        image: "",
        showCard: false
      },
      {
        name: 5,
        image: "",
        showCard: false
      },
      {
        name: 6,
        image: "",
        showCard: false
      },
      {
        name: 7,
        image: "",
        showCard: false
      },
      {
        name: 8,
        image: "",
        showCard: false
      },
      {
        name: 9,
        image: "",
        showCard: false
      },
      {
        name: 10,
        image: "",
        showCard: false
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
