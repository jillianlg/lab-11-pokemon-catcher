import { rawPokemonData } from './pokemon-data.js';
// import { images, radios } from './pokemon-const.js';

export function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}



// Find Captured Pokemon By NAME function to push into capturedPokemonArray for results
export function findByName(pokemonResults, pokemonName) {

    for (let i = 0; i < pokemonResults.length; i++) {
        const capturedPokemon = pokemonResults[i];

    
        if (capturedPokemon.pokemon === pokemonName) {
            return capturedPokemon;
        }
    }
}

// Get new encounter function
export function getNewEncounter(someArray, pokemoneName) {
    let pokeData = findByName(rawPokemonData, pokemoneName);
    const encounteredPokemon = {
        pokemon: pokeData.pokemon,
        pokeImg: pokeData.url_image,
        encountered: 0, 
        captured: 0
    };
    someArray.push(encounteredPokemon);
}
// Get new capture function
export function incrementCaptures(someArray, pokemoneName) {
    let pokeData = findByName(someArray, pokemoneName);
    if (!pokeData) {
        getNewEncounter(someArray, pokemoneName);
        pokeData = findByName(someArray, pokemoneName);
    }
    pokeData.captured++;
}
// Get new capture function
export function incrementEncounters(someArray, pokemoneName) {
    let pokeData = findByName(someArray, pokemoneName);
    if (pokeData === undefined) {
        getNewEncounter(someArray, pokemoneName);
        pokeData = findByName(someArray, pokemoneName);
    }
    pokeData.encountered++;
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

// Table Functions
export function tableData(arr, item) {
    let returnArray = [];
    arr.forEach(pokemon => {
        let returnItem = null;
        if (item === 'encountered' || item === 'captured') returnItem = pokemon[item];
        else returnItem = findByName(arr, item)[item];
        returnArray.push(returnItem);
    });
    return returnArray;
}

export function buildTable(resultsArray) {
    const capturedTable = document.getElementById('captured');
    const encounteredTable = document.getElementById('encountered');
    resultsArray.forEach(pokemon => {
        const url = pokemon.pokeImg;
        const name = pokemon.pokemon;
        const timesCaptured = pokemon.captured;
        const timesEncountered = pokemon.encountered;
        const rowEl = document.createElement('tr');
        const pokemonBoxEl = document.createElement('td');
        const nameEl = document.createElement('div');
        const imgEl = document.createElement('img');
        const encounteredEl = document.createElement('td');
        
        nameEl.textContent = name;
        imgEl.src = url;
        imgEl.alt = `Picture of ${name}`;
        imgEl.style.width = '50px';
        encounteredEl.textContent = timesEncountered;
        pokemonBoxEl.append(imgEl, nameEl);
        rowEl.append(pokemonBoxEl, encounteredEl);
        if (timesCaptured > 0) {
            const caughtEl = document.createElement('td');
            caughtEl.textContent = timesCaptured;
            rowEl.append(caughtEl);
            capturedTable.append(rowEl);
        } else {
            encounteredTable.append(rowEl);
        }
    });
}