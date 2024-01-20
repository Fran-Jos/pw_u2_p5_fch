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