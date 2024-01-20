<template>
  <h1>UNIVERSIDAD CENTRAL DEL ECUADOR</h1>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }}<sup>2</sup>= {{ obtenerCuadradoComputado }}</p>
  <button v-on:click="sumarCounter">+1</button>
  <button @click="restarCounter">-1</button>
</template>

<script>
export default {
  // props:["titulo", "valor"],

  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        if (value > 0) {
          console.log("error!!");
        }
        return value > 100;
      },
    },
  },

  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Se calcula el cuadrado");
      return this.counter * this.counter;
    },
    sumarCounter() {
      return this.counter++;
    },
    restarCounter() {
      return this.counter--;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Se calcula el cuadradoComputadoF");
      return this.counter * this.counter;
    },
  },
};
</script>

<style scoped>
button {
  background: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;
}
button:hover {
  background: #274e38;
}

p {
  font-family: fantasy;
}

h2 {
  color: #64b687;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
h1 {
  color: #1d5a38;
  font-family:Arial, Helvetica, sans-serif ;
  size: 1px;
}
</style>