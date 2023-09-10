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
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
  const listItems = [];

  pokemons.map()
  //transfoma um elemento e outro elemento,uma lista transformada
  
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon));
  }
  console.log(listItems);
});
