
import { createStore } from 'vuex'
import axios from 'axios';
// Create a new store instance.
export default createStore({
  state: {
    counter:0,
    colorCode: 'green'
  },
  mutations: {
    // here mutations will be committed
    increment (state, randomNumber) {
      //state.counter++
      state.counter += randomNumber;
    },
    decrement (state, randomNumber) {
      //state.counter--
      state.counter -= randomNumber;
    },
    setColorCode(state, newcolor){
      state.colorCode = newcolor;
    }
  },
  actions:{
    // here methods will be dispatched
    incrementCounter({commit}){
      console.log("Dispatch increment counter");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then( res => {
        console.log(res.data)
        //this.state.counter += res.data;
        commit('increment', res.data);
      })
    },
    decrementCounter({commit}){
      console.log("Dispatch decrement counter");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then( res => {
        console.log(res.data)
        //this.state.counter -= res.data;
        commit('decrement', res.data);
      })
    },
    setColorCode({commit}, newcolor){
      commit('setColorCode', newcolor);
    }
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter;
    }
  }
})
