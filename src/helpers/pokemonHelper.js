const obtenerIDPokemons=()=>{
    const pokemons1 = obtenerAleatorio(600)
    const pokemon2 = obtenerAleatorio(600)
    const pokemon3 = obtenerAleatorio(600)
    const pokemons4 = obtenerAleatorio(600)

    const pokemonsArr =[pokemons1,pokemon2,pokemon3,pokemons4]
    console.log(pokemonsArr)
    return pokemonsArr;
}

const obtenerNombresPokemons=async([p1,p2,p3,p4])=>{
const nombre1= await consultarNombre(p1);
const nombre2= await consultarNombre(p2);
const nombre3= await consultarNombre(p3);
const nombre4= await consultarNombre(p4);

const pk1={
    id:p1,
    nombre:nombre1
}

const pk2={
    id:p2,
    nombre:nombre2
}

const pk3={
    id:p3,
    nombre:nombre3
}

const pk4={
    id:p4,
    nombre:nombre4
}

const arreglo = [pk1,pk2,pk3,pk4];
console.log(arreglo);

return arreglo

}

const obtenerPokemons= async ()=>{
    const arregloID = obtenerIDPokemons();
    return await obtenerNombresPokemons(arregloID)
}

async function consultarNombre(id){
    const data = await consumirAPI(id);
    return data.name;
}

const consumirAPI= async (id)=>{
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=> r.json())
}

const obtenerPokemonsFachada= async ()=>{
   return await obtenerPokemons()
}
function obtenerAleatorio(max){
return Math.floor(Math.random()*max)+1;
}

export default obtenerPokemonsFachada