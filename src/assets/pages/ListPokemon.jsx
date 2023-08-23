import PokeCard from "../components/PokeCard/PokeCard";
import { getPokemonInfo } from "../../api/PokeApi"
import { useEffect, useState } from "react";
import './ListPokemon.scss'


const ListPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const maxPokemon = 807; // Número máximo de Pokémon (primeira geração)
  const itemsPerPage = 30; // Número de Pokémon por página
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const pokemonDataArray = [];

        const startIdx = (currentPage - 1) * itemsPerPage + 1;
        const endIdx = Math.min(startIdx + itemsPerPage - 1, maxPokemon);

        for (let i = startIdx; i <= endIdx; i++) {
          const pokemon = await getPokemonInfo(i);
          pokemonDataArray.push(pokemon);
        }

        setPokemonData(pokemonDataArray);
      } catch (error) {
        console.error('Erro ao obter dados dos Pokémon:', error);
      }
    }

    fetchPokemonData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(maxPokemon / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="ListPokemon">
      <div className="Pagination">
        {Array.from({ length: Math.ceil(maxPokemon / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={index + 1 === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="ListPokemon-Container">
        {pokemonData.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

    </section>
  );
};

export default ListPokemon;