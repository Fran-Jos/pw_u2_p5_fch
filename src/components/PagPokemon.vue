<template>
  <div class="container">
    <p>Ingresa el id del POKEMON</p>
    <input v-model="id" type="text" v-on:keypress.enter="ObtenerID"/>

    <h1>{{ id }}</h1>
    <h2>POKEMON</h2>

    <p type="Nombre:">{{ name }}</p>
    <p type="weight:">{{ weight }}</p>
    <p type="Base de experiencia:">{{ base_experience }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      weight: null,
      base_experience: null,
      respuesta: null,
    };
  },

  watch: {},

  methods: {
    ObtenerID(id) {
        console.log(id)
      return `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    },

    async consumirAPI() {
      this.name = ".........";
      this.weight = ".........";
      this.base_experience = ".......";

      const { name, weight, base_experience } = await fetch(
        this.ObtenerID
      ).then((respuesta) => respuesta.json());

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
    },

    ingresoID(idant , idact){
    if (idact!==null) return;
      //Consumo del API:
      this.consumirAPI();
    }
  },
};
</script>

<style>
</style>