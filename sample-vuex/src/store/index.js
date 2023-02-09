
import { createStore } from 'vuex'
import axios from 'axios';
// Create a new store instance.
export default createStore({
  state: {
    counter:0
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
    }
  }
})
