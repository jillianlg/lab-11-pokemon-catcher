// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';

const images = document.querySelector('lable > img');
const radios = document.querySelectorAll('input');
const caughtDiv = document.querySelector('#caught-div');
const captured = document.querySelector('#captured-pokemon');
const moreButton = document.querySelector('button');

console.log(images);
console.log(radios);
console.log(caughtDiv);
console.log(captured);
console.log(moreButton);
// initialize state

// set event listeners to update state and DOM