<template>
<PokemonPage/>
</template>
 
<script>
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage
  },
  methods: {},
};
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}


</style>