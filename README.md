# lab-11-pokemon-catcher

## Game Objective:
This project will simulate the experience of leaving Pallet Town and braving the wilds in search of Pokemon. 
- The player will presented with 3 random (different) pokemon. 
- The player will select which pokemon they want to catch. 
- The player will present with 3 more pokemon. 
- After the player has encountered 10 trios of pokemon, they transport to the results page where they can see their haul.

## UX
On the pokemon page, we need these HTML elements to interact with:
- Clickable images (secretly radio button)
    - Three random, different pokemons (with random ids) will be displayed side by side.
- Result span
- Button ('catch more')

## State
- Raw Pokemon (all the Pokemon, never changes)
    - Should be able to reset the game
    - "Data to guess from" -- we need a place to get "new" pokemon from
- Caught Pokemon
    - track and store which Pokemon were caught
- Encountered Pokemon
    - track and store which Pokemon have been encountered
- UnEncountered Pokemon (the ones that have NOT been caught yet)
    - When the player hits 10 rounds, the game is over
- Results Page
    - Display which Pokemon were caught
    - Display which Pokemon were encountered
- Reset button
    - Return player to main Pokemon page.

_Refer to assets folder planning wireframe_