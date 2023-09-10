// function convertTypeToLi(pokemonTypes){
//    return pokemonTypes.map((typeSlot) =>`<li class="type">${type}</li>`)
   
// }


function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
            ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
            

      </ol>
      <img
      
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {

  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
  
  // mesma coisa que a função a acima
  // const newList = pokemons.map((pokemon)=> convertPokemonToLi(pokemon))
  // const newHtml = newList.join('')

  //pegou a lista de pokemons,com o map,mapeou e converteu para uma lista de Li e depois com o join,fez as lista sempre impressas sem separador,todas juntas
});
