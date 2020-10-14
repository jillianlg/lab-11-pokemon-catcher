// import { rawPokemonData } from './pokemon-data.js';
// import { images, radios } from './pokemon-const.js';

export function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}



// Find Captured Pokemon By ID function to push into capturedPokemonArray for results
export function findByName(pokemonResults, pokemonName) {

    for (let i = 0; i < pokemonResults.length; i++) {
        const capturedPokemon = pokemonResults[i];

    
        if (capturedPokemon.pokeName === pokemonName) {
            return capturedPokemon;
        }
    }
}

// GET localStorage function
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// SET localStorage function
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}