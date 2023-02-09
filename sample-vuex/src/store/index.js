
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
    counter:0
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter++
    }
  }
})
