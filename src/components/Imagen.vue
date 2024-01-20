<template>
    <div class="container">
      <img :src="urlImg" alt="no se puede">
      <h1>{{texto}}</h1>
    </div>
  </template>
   
  <script>
  export default {
      props:{
          texto:{
              type:String
          },
          urlImg:{
              type:String
          }
      }
   
  }
  </script>
  <style scoped>
  img{
    height: 200px;
    width: 200px;
    

  }

  h1{
    font-size: 20px;
  
  }
  </style>