const poke_container = document.getElementById('poke_container');

const fetchPokemons = async () => {
    for(let i=1; i<=150; i++){
        await getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemon(pokemon);
}

const createPokemon = pokemon => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const type = pokemon.types[0].type.name;

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type: ${type}</small>
        </div>
    `
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl)
}

fetchPokemons();