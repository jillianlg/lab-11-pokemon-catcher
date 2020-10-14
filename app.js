// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';
import { getRandomPokemon, findByName, setInLocalStorage } from './pokemon-utils.js';
// import { images, radios, caughtDiv, moreButton } from './pokemon-const.js';

const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const caughtDiv = document.querySelector('#caught-div');
const moreButton = document.querySelector('button');
//Add back it if you get a chance to render pokemon neam on UX
// const captured = document.querySelector('#captured-pokemon');

// initialize state
let captures = 10;
let pokemonResults = [];

// Render Random Pokemon Fuction - loops through raw data to update DOM
export function renderRandomPokemon() {

    let firstPokemon = getRandomPokemon(rawPokemonData);
    let secondPokemon = getRandomPokemon(rawPokemonData);
    let thirdPokemon = getRandomPokemon(rawPokemonData);
    
    while (firstPokemon.id === secondPokemon.id || secondPokemon.id === thirdPokemon.id || thirdPokemon.id === firstPokemon.id) {
        firstPokemon = getRandomPokemon(rawPokemonData);
        secondPokemon = getRandomPokemon(rawPokemonData);
        thirdPokemon = getRandomPokemon(rawPokemonData);
    }
    
    radios[0].value = firstPokemon.pokemon;
    images[0].src = firstPokemon.url_image;
    
    radios[1].value = secondPokemon.pokemon;
    images[1].src = secondPokemon.url_image;
    
    radios[2].value = thirdPokemon.pokemon;
    images[2].src = thirdPokemon.url_image;
}
renderRandomPokemon();

// set event listeners to update state and DOM
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {	
        

        caughtDiv.classList.remove('hidden');

        radios.forEach((radio) => {
            let encounteredPokemon = findByName(pokemonResults, radio.value);
            if (!encounteredPokemon) {
                encounteredPokemon = {
                    pokeName: radio.value,
                    pokeImg: encounteredPokemon.url_image,
                    encountered: 1, 
                    captured: 0 
                },
                pokemonResults.push(encounteredPokemon);
            } else {
                encounteredPokemon.encountered++;
            }
            
        });

        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
            images[i].style.opacity = .5;
        }

        let capturedPokemon = findByName(pokemonResults, e.target.value);
        capturedPokemon.captured++;

    console.log(capturedPokemon);

        setInLocalStorage('RESULTS', pokemonResults);
    });
}

moreButton.addEventListener('click', () => {
    captures--;
    // console.log(captures);
    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        images[i].style.opacity = 100;
    }
    if (captures === 0) {
        // radios[i].disabled = true;
        window.location.href = './results/index.html';
    }
    renderRandomPokemon();
});

