<template>
  <h1>Adivina el POKEMON</h1>
  <PokemonImagen :pokemonId="2" :showPokemon="false"/>
  <PokemonOpciones />
  
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue"
import PokemonOpciones from "../components/PokemonOpciones.vue"
import  obtenerIDPokemonsFachada from "../helpers/pokemonHelper"

obtenerIDPokemonsFachada()

export default {
components:{
    PokemonImagen,
    PokemonOpciones
}
}
</script>

<style>

</style>