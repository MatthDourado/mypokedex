 function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
    <span class="number">#387</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
            <li class="type">Grass</li>
            

      </ol>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
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
