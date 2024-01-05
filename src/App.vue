<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo = "contador 1" :valor="10"/>
  <Contador titulo = "contador 2" :valor= "calcularValor()"/>
  <Contador titulo = "contador 3" :valor="sumarCounter"/>
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },

  methods:{
   calcularValor(){
      return 5+5*100;
    }
  }
};

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
</style>
