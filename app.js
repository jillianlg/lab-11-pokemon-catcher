// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';
import { getRandomPokemon, setInLocalStorage, incrementEncounters, incrementCaptures } from './pokemon-utils.js';
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
        // firstPokemon = getRandomPokemon(rawPokemonData);
        secondPokemon = getRandomPokemon(rawPokemonData);
        thirdPokemon = getRandomPokemon(rawPokemonData);
    }
    
    radios[0].value = firstPokemon.pokemon;
    images[0].src = firstPokemon.url_image;
    radios[0].checked = false;
    
    radios[1].value = secondPokemon.pokemon;
    images[1].src = secondPokemon.url_image;
    radios[1].checked = false;
    
    radios[2].value = thirdPokemon.pokemon;
    images[2].src = thirdPokemon.url_image;
    radios[1].checked = false;
}
renderRandomPokemon();

//  increment encountered

// for (let i = 0; i < radios.length; i++) {
//     const item = radios[i];
//     incrementEncounters(pokemonResults, item.value);
// }

// set event listeners to update state and DOM
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', (e) => {	
       incrementEncounters(pokemonResults, radios[0].value);
       incrementEncounters(pokemonResults, radios[1].value);
       incrementEncounters(pokemonResults, radios[2].value);
    //    console.log(myInc);
       console.log(pokemonResults);
    //    console.log(radios[i].value);

    //    console.log(radios[0]);
    //    console.log(radios[1]);
    //    console.log(radios[2]);
       caughtDiv.classList.remove('hidden');
       radios[i].disabled = true;
        images[i].style.opacity = .5;
        incrementCaptures(pokemonResults, e.target.value);
        console.log(pokemonResults);

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

