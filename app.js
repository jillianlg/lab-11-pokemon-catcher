// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';

const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const caughtDiv = document.querySelector('#caught-div');
const captured = document.querySelector('#captured-pokemon');
const moreButton = document.querySelector('button');

// initialize state
let capturedPokemon = 0;

function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}

let firstPokemon = getRandomPokemon(rawPokemonData);
let secondPokemon = getRandomPokemon(rawPokemonData);
let thirdPokemon = getRandomPokemon(rawPokemonData);

while (firstPokemon.id === secondPokemon.id) {
    firstPokemon = getRandomPokemon(rawPokemonData);
}
while (secondPokemon.id === thirdPokemon.id) {
    secondPokemon = getRandomPokemon(rawPokemonData);
}
while (thirdPokemon.id === firstPokemon.id) {
    thirdPokemon = getRandomPokemon(rawPokemonData);
}

radios[0].value = firstPokemon.id;
images[0].src = firstPokemon.url_image;

radios[1].value = secondPokemon.id;
images[1].src = secondPokemon.url_image;

radios[2].value = thirdPokemon.id;
images[2].src = thirdPokemon.url_image;

// set event listeners to update state and DOM