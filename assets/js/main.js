function convertTypeToLi(pokemonTypes){
   return pokemonTypes.map((typeSlot) =>`<li class="type">${typeSlot.type.name}</li>`)
   
}
function FirstLetterUppercase(nomePoke){
 
  return nomePoke.toUpperCase()
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${FirstLetterUppercase(pokemon.name)}</span>
    <div class="detail">
      <ol class="types">
            ${convertTypeToLi(pokemon.types).join('')}
            

      </ol>
      <img
      
        src="${pokemon.sprites.other['official-artwork']
          .front_default}"
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
