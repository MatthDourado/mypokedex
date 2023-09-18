const loadMoreButton = document.getElementById("loadmore");
const pokemonList = document.getElementById("pokemonList");
const pokeModal = document.getElementById('pokeModal'); 

const maxPokemons = 151;
const limit = 9;
let offset = 0;

// pokeApi.getPokemons().then((pokemons = []) => {
//   pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
//   // mesma coisa que a função a acima
//   // const newList = pokemons.map((pokemon)=> convertPokemonToLi(pokemon))
//   // const newHtml = newList.join('')
//   //pegou a lista de pokemons,com o map,mapeou e converteu para uma lista de Li e depois com o join,fez as lista sempre impressas sem separador,todas juntas
// });

function loadPokemon(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `<li class="pokemon ${pokemon.type}" onclick ='testModal(${pokemon.number})' ontouch='testModal(${pokemon.number})'>
        
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>
  <div class="detail">
    <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
          
  
    </ol>
    <img
    
      src="${pokemon.photo}"
      alt="${pokemon.name}"
    />
  </div>
  </li>
  
  `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}
function testModal(number){
  pokeApi.getPokemonMoreDetails(number).then((pokemonDetail = []) => {
    pokeModal.innerHTML = `
        <li class="pokemonOpen ${pokemonDetail.type}">
            <span class="nameOpen">${pokemonDetail.name}</span>
            <div id="divCloseButton">
                <span>#${pokemonDetail.number}</span>
                <button class="closeButton" onclick="fecharJanela()" ontouch="fecharJanela()">X</button>
            </div>

            <div class="typesContainer">
                <div class="types">
                <span>Types:</span>
                ${pokemonDetail.types
                  .map(
                    (type) => `<span class="openType ${type}">${type}</span>`
                  )
                  .join("")}
                </span>
                </div>
            </div>
        
            <div class="divSkills">
                <div class="skills"> 
                    <span>Skills:</span>                
                    <span class="skillOpen ${pokemonDetail.type}">${
                    pokemonDetail.skill1
                    }</span>
                    <span class="skillOpen ${pokemonDetail.type}">${
                    pokemonDetail.skill2
                    }</span>
                </div>
            </div>

            <div class="pokemonImageOpenContainer">
                <img class="pokemonImage" src="${pokemonDetail.photo}" 
                alt="${pokemonDetail.name}" />
            </div>

            <div class="attributesContainer">
                <h3 class="attributesHeader">Attributes:</h3>
                <div class="attributesDiv">
                <div class="innerAttribute">
                    <span>Hp:</span>
                    <span>${pokemonDetail.statValueHp}</span>
                </div>

                <div class="innerAttribute">
                    <span>ATK:</span>
                    <span>${pokemonDetail.statValueAtk}</span>
                </div>

                <div class="innerAttribute">
                    <span>DEF:</span>
                    <span>${pokemonDetail.statValueDef}</span>
                </div>

                <div class="innerAttribute">
                    <span>Special-ATK:</span>
                    <span>${pokemonDetail.statValueSatk}</span>
                </div>

                <div class="innerAttribute">
                    <span>Special-DEF:</span>
                    <span>${pokemonDetail.statValueSdef}</span>
                </div>

                <div class="innerAttribute">
                    <span>Speed:</span>
                    <span>${pokemonDetail.statValueSpd}</span>
                </div>
                </div>
            </div>
        </li>
        `;
  });
}

loadPokemon(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxPokemons) {
    const newLimit = maxPokemons - offset;
    loadPokemon(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else 
  {
    loadPokemon(offset, limit);
  }
});

