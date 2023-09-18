const pokeApi = {};

function convertPokeApiToPokeModel(pokeDetail) {
  const pokemon = {
    number: pokeDetail.id,
    name: pokeDetail.name,
    photo: pokeDetail.sprites.other["official-artwork"].front_default,
    types: pokeDetail.types.map((typeSlot) => typeSlot.type.name),
    type: pokeDetail.types[0].type.name,
    skills: pokeDetail.abilities.map((skillsSlot) => skillsSlot.ability.name),
    stats: {
      hp: pokeDetail.stats[0].base_stat,
      atk: pokeDetail.stats[1].base_stat,
      def: pokeDetail.stats[2].base_stat,
      satk: pokeDetail.stats[3].base_stat,
      sdef: pokeDetail.stats[4].base_stat,
      spd: pokeDetail.stats[5].base_stat,
    },
  };

  [pokemon.skill1, pokemon.skill2] = pokemon.skills;
  [
    pokemon.statValueHp,
    pokemon.statValueAtk,
    pokemon.statValueDef,
    pokemon.statValueSatk,
    pokemon.statValueSdef,
    pokemon.statValueSpd,
  ] = Object.values(pokemon.stats);

  return pokemon;
}

// function (pokeDetail) {
   
//   const pokemon = new Pokemon();
//   pokemon.number = pokeDetail.id.toString().padStart(3,'0')
// //   pokemon.number = pokeDetail.order;
//   pokemon.name = pokeDetail.name;
  
//   const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
//   const [type] = types;
//   pokemon.types = types;
//   pokemon.type = type;

//   pokemon.photo = pokeDetail.sprites.other["official-artwork"].front_default;

//   pokemon.skills = pokeDetail.abilities.map((skillsSlot) => skillsSlot.ability.name);
  
//   pokemon.stats = 
  
// }
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiToPokeModel);
};
pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))

    .catch((error) => console.error(error));
};

pokeApi.getPokemonMoreDetails =async (pokemonNumber) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;
  const response =await fetch(url);
  const pokeDetail =await response.json();
  const pokemonDetail = convertPokeApiToPokeModel(pokeDetail);

  abriJanela();

  return pokemonDetail;
}