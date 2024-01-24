<template>
  <h1 v-if="pokemonGanador === null">
    Espere por favor estamos cargando el juego..........
  </h1>
  <div v-else>
    <div v-if="juego === true">
      <h1>Adivina el POKEMON</h1>
      <PokemonImagen
        :pokemonId="pokemonGanador.id"
        :showPokemon="mostrarPokemon"
      />
      <PokemonOpciones
        v-on:selecciono="revisarClick($event)"
        :pokemons="pokemonsArr"
        @click="evaluar"
      />
    </div>
    <div v-if="juego != true && gana === false">
      <h2>Perdistes: el correcto era....</h2>
      <PokemonImagen
        :pokemonId="pokemonGanador.id"
        :showPokemon="mostrarPokemon"
      />
      <h1>{{ pokemonGanador.nombre }}</h1>
      <button @click="reiniciar">Volver a jugar</button>
    </div>

    <div v-if="juego === false && gana != false">
      <h2>Ganaste</h2>
      <PokemonImagen
        :pokemonId="pokemonGanador.id"
        :showPokemon="mostrarPokemon"
      />
      <h1>{{ pokemonGanador.nombre }}</h1>
            <button @click="reiniciar">Volver a jugar</button>
    </div>
  </div>

  <div></div>
  <div></div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerPokemonsFachada from "../helpers/pokemonHelper";

obtenerPokemonsFachada();

export default {
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      gana: null,

      juego: true,
    };
  },

  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  props: {
    supuestoGanador: null,
  },

  // fases del ciclo de vida de un componente
  beforeCreate() {
    console.log("antes de crear el componente");
  },

  created() {
    console.log("Se creo el componente");
  },

  beforeMount() {
    console.log("Antes de que se monye el componente en la página");
  },

  mounted() {
    console.log("Se monto el componente PokemonPage");
    this.cargaInicial();
  },

  beforeUpdate() {
    console.log("Antes de que se actualice el componente");
  },

  update() {
    console.log("Se actualiza el componente");
  },

  beforeDestroy() {
    console.log("antes de destruir");
  },

  destroyed() {
    console.log("destruido");
  },

  methods: {
    reiniciar() {
      this.cargaInicial
      (this.pokemonsArr = []),
        (this.pokemonGanador = null),
        (this.mostrarPokemon = false),
        (this.gana = null),
        (this.juego = true);
        
    },

    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
      this.pokemonsArr = arregloPokemons;

      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonsArr[indiceGanador];
    },

    revisarClick(datoRecivido) {
      console.log("dio click y se lo emite al padre");
      console.log(datoRecivido);

      if (datoRecivido === this.pokemonGanador.id) {
        this.mostrarPokemon = true;
        console.log("es este el ganador");
        this.gana = true;

        this.juego = false;
      } else {
        console.log("te equivocaste");
        this.gana = false;
        this.mostrarPokemon = true;

        this.juego = false;
      }
    },

    evaluar() {},
  },
};
</script>

<style>
</style>