<template>
  <h1 v-if="pokemonGanador===null">
    Espere por favor estamos cargando el juego..........</h1>
  <div v-else>
  <h1>Adivina el POKEMON</h1>

  <PokemonImagen :pokemonId="pokemonGanador.id" :showPokemon="false"/>
  <PokemonOpciones v-on:selecciono="revisarClick($event)" :pokemons="pokemonsArr"/>
</div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue"
import PokemonOpciones  from "../components/PokemonOpciones.vue"

import obtenerPokemonsFachada from "../helpers/pokemonHelper"

obtenerPokemonsFachada()

export default {
components:{
    PokemonImagen,
    PokemonOpciones
},
// fases del ciclo de vida de un componente
beforeCreate(){
  console.log("antes de crear el componente");
},

created(){
  console.log("Se creo el componente");
},

beforeMount(){
  console.log("Antes de que se monye el componente en la página")
},

mounted(){
  console.log("Se monto el componente PokemonPage")
  this.cargaInicial()
},

beforeUpdate(){
  console.log("Antes de que se actualice el componente");
},

update(){
console.log("Se actualiza el componente")
},

beforeDestroy(){
console.log("antes de destruir")
},

destroyed(){
console.log("destruido")
},

methods:{
  async cargaInicial(){
  const arregloPokemons = await obtenerPokemonsFachada()
  console.log('desde componente')
  console.log(arregloPokemons)
  this.pokemonsArr = arregloPokemons;

  const indiceGanador=Math.floor(Math.random()*4);
  this.pokemonGanador=  this.pokemonsArr[indiceGanador];
  },

  revisarClick(datoRecivido){
console.log("dio click y se lo emite al padre")
console.log(datoRecivido)  
}
},


data(){
  return{
    pokemonsArr:[],
    pokemonGanador:null,
    mostrarPokemon:false
  }
}
}
</script>

<style>

</style>