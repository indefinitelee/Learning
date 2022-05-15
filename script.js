
    async function fetchPokemon(){
        try { 
            const response = await fetch('fetch_pokemon.php?pokemon=25');
            const pokemon = await response.json();
            console.log(pokemon)
            initialize(pokemon);
    }
        catch (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        };
      }


function initialize(data) {
    const main = document.querySelector('main');
    const div = document.createElement('div')
    div.innerHTML = JSON.stringify(data)
    main.appendChild(div)
}

fetchPokemon()