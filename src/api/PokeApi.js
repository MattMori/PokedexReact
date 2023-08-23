import axios from 'axios';

// Configurar a URL base da PokeAPI
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export async function getPokemonInfo(pokemonId) {
    try {
      const response = await pokeApi.get(`${pokemonId}`);
      const pokemonData = response.data;
      return pokemonData;
    } catch (error) {
      console.error('Erro ao obter informações do Pokémon:', error);
      throw error;
    }
  }
  
  export const getImageURL = ( pokemonId ) => {
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';
  
    // Has only PNG.
    if ( parseInt( pokemonId ) >= 650 ) {
      return `${ baseURL }/official-artwork/${ pokemonId }.png`;
    }
  
    // Has SVG.
    return `${ baseURL }/dream-world/${ pokemonId }.svg`;
  };

async function getPokemonType(type) {
  try {
    const response = await pokeApi.get('pokemon', {
      params: {
        types: type
      }
    });
    const pokemonList = response.data.results;
    console.log('Lista de Pokémon:', pokemonList);
  } catch (error) {
    console.error('Erro ao obter lista de Pokémon:', error);
  }

  
}
 