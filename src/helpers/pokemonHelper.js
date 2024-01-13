const obtenerIDPokemons=()=>{
    const pokemons1 = obtenerAleatorio(600)
    const pokemon2 = obtenerAleatorio(600)
    const pokemon3 = obtenerAleatorio(600)
    const pokemons4 = obtenerAleatorio(600)

    const pokemonsArr =[pokemons1,pokemon2,pokemon3,pokemons4]
    console.log(pokemonsArr)
}

const obtenerNombresPokemons=(Arreglo)=>{
const nombre1= consumirAPI(Arreglo[0]);
const nombre2= consumirAPI(Arreglo[1]);
const nombre3= consumirAPI(Arreglo[2]);
const nombre4= consumirAPI(Arreglo[3]);

}
function consumirAPI(id){
return "nombre"
}

const obtenerIDPokemonsFachada=()=>{
    obtenerIDPokemons()
}
function obtenerAleatorio(max){
return Math.floor(Math.random()*max)+1;
}

export default obtenerIDPokemonsFachada