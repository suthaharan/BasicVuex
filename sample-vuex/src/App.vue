<template>
  <div class="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="counter">{{ counter }}</div>
  <div class="buttons">
    <button @click="decreaseCounter">-</button>
    <button @click="increaseCounter">+</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    increaseCounter(){
      this.counter++;
    },
    decreaseCounter(){
      this.counter--;
    }
  },
  components: {
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
