<template>
  <div class="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCounter />
  <CounterSquared />
  <div class="buttons">
    <button @click="$store.dispatch('decrementCounter')">-</button>
    <button @click="$store.dispatch('incrementCounter')">+</button>
  </div>
  <div>
    <input placeholder="Enter color code" type="text" v-model="colorCode"/>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'MyCounter': require('@/components/MyCounter.vue').default,
    'CounterSquared': require('@/components/CounterSquared.vue').default
  },
  computed: {
    colorCode: {
      get(){
        return this.$store.state.colorCode;
      },
      set(newcolor){
        //this.$store.commit('setColorCode', newcolor)
        this.$store.dispatch('setColorCode', newcolor)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  margin-bottom: 18px;
}
.counter{
  font-size: 80px;
}
.buttons button{
  font-size: 48px;
  width: 100px;
  margin: 0 10px;

}
</style>
