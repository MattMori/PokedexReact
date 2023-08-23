import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonInfo, getImageURL} from '../../api/PokeApi';
import './PokeInfo.scss';

const PokeInfo = () => {
  const { id } = useParams();  
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await getPokemonInfo(id); 
      setPokemon(response);
    };

    getPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Carregando...</div>;
  }

  
  return (
    <div className={`PokeInfo ${pokemon.types[0].type.name}`}>
      <div className='pokemon-image'>
        <h1 className='name'>Detalhes do {pokemon.name}</h1>
        <img src={getImageURL(id)} alt={name} />
      </div>
      <div className='PokeDetail'>
      <p className="number">ID: {pokemon.id}</p>
        <p>Altura: {pokemon.height} decímetros</p>
        <p>Peso: {pokemon.weight} KG</p>
        <p  className='PokeTypes'>Tipos:{pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p>Habilidades: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        <p>Estatísticas:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeInfo;
