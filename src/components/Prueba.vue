<template>
  <div class="container">
    <div  class="cuadrado"></div>
    <p>{{ namee }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    namee: String,
  },

  data() {
    return {
      back_default: null,
      nombre: null,
      pokemons: [],
    };
  },

  watch: {},



  mounted() {
    this.consumirAPI();
 
    console.log(this.pokemons);
  },

  methods: {

    async consumirAPI() {
      this.name = "XXXXXXXXX";
      this.back_default = "Obteniendo imagen";
      for (let index = 0; index < 5; index++) {
        const {
          sprites: { back_default },
          name,
        } = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + this.numeroRamdom()
        ).then((respuesta) => respuesta.json());
        this.pokemons.push({ back_default, name });
      }
    },

    numeroRamdom() {
      return Math.floor(Math.random() * 100) + 1;
    },
  },

  


};
</script>

<style scope>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cuadrado {
  background: black;
  width: 200px;
  height: 200px;
  color: rgb(0, 0, 0);
  margin: 10px;
}

p {
  color: black;
  text-align: center;
  margin: 10px;
}
</style>
