<template>

  <div class="container">
    <p>Ingresa el id del POKEMON</p>
    <input v-model="id" type="text" v-on:keypress.enter="consumirAPI()"/>

    <h1>{{ id }}</h1>
    <h2>POKEMON</h2>

    <label for="">Nombre</label>
    <input type="text" v-model="name" >
    <label for="">Weight</label>
    <input type="text" v-model="weight" >    
    <label for="">Base_experience</label>
    <input type="text" v-model="base_experience" >
    
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
 

    async consumirAPI() {
      this.name = ".........";
      this.weight = ".........";
      this.base_experience = ".......";

      const { name, weight, base_experience } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/"+this.id
      ).then((respuesta) => respuesta.json());

     

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;

   
    },

 
  },
};
</script>

<style scope>

body {
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Esto asegura que el contenedor ocupe el 100% de la altura de la pantalla */
    margin: 0;
}

.container {
    text-align: center; /* Alinea el contenido del contenedor al centro */
    color: blanchedalmond;

}

.container label {
    display: block;
   
    margin-top: 25px; /* Ajusta según sea necesario */
    text-align: center;
}

.container input {
    width: 100%; /* O ajusta el ancho según sea necesario */
    margin-bottom: 20px; /* Espaciado entre los elementos de entrada */
     margin-top: 10px;
}


</style>