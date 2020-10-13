// import functions and grab DOM elements
import { rawPokemonData } from './pokemon-data.js';

const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('input');
const caughtDiv = document.querySelector('#caught-div');
const captured = document.querySelector('#captured-pokemon');
const moreButton = document.querySelector('button');

// initialize state
let captures = 10;
let capturedPokemon = 0;
let encounteredPokemon = 0;
let capturedPokemonArray = [];
let encounteredPokemonArray = [];



function getRandomPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);

    return someArray[index];
}


// Render Random Pokemon
function renderRandomPokemon() {

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

}

renderRandomPokemon();

// set event listeners to update state and DOM

moreButton.addEventListener('click', () => {
    capturedPokemon++;
      console.log(capturedPokemon);
    encounteredPokemon++;
      console.log(encounteredPokemon);
    encounteredPokemon++;
      console.log(encounteredPokemon);
    encounteredPokemon++;
      console.log(encounteredPokemon);
    renderRandomPokemon();
  });
  
  // change to FIND BY ID
  // function removeById(someId) {
    //   for (let i = 0; i < remainingTrees.length; i++) {
      //       if (someId === remainingTrees[i].id) {
        //           remainingTrees.splice(i, 1);
        //       }    
        //   }
        // }
//encounteredPokemonArray.push(firstPokemon.id, secondPokemon.id, thirdPokemon.id);

// function showResults() {
//   if (capturedPokemo.length === 10) {
//     how to I triger the results page
//       alert('done!');
//   }

//   caughtDiv.classList.add('hidden');

//   for (let i = 0; i < radios.length; i++) {
//       radios[i].disabled = false;
//       radios[i].checked = false;
//       images[i].style.opacity = 1;
//   } 

  // for (let i = 0; i < radios.length; i++) {
  //   radios[i].addEventListener('change', (e) => {	
  //     captures--;

  //     const playerCapturedPokemon(e.target.value);
  //     console.log(playerCapturedPokemon);
  //     capturedPokemonArray.push(playerCapturedPokemon);
  //     console.log(capturedPokemonArray);
  //   }
    
  // };

      // for (let i = 0; i < radios.length; i++) {
      //     radios[i].disabled = true;
      //     images[i].style.opacity = .5;
      // } 

      // const playerCapturedPokemon = e.target.value === capturedPokemon.id;
      

      // console.log(playerCapturedPokemon);

      // if (playerCapturedPokemon) {
      //   //I I am not removing anything what is this function doing?
      //   removeById(e.target.value);
      //   } else {
      //     capturedPokemon.push(e.target.value);
      //     // needs a funcution to call onLoad and onClick
      //     encounteredPokemonArray.push(firstPokemon.id, secondPokemon.id, thirdPokemon.id);
      //   }

          
    //     capturedPokemon++;
    //     encounteredPokemon++;
    //     caughtDiv.classList.toggle('hidden');
  
  
    // }