import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonInfo, getImageURL } from '../api/PokeApi';
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

  const { types } = pokemon;
  const typeClass = types.map((type) => type.type.name).join(' ');

  return (
    <div className={`PokeInfo ${typeClass}`}>
              
              <div className='pokemon-image'>
        <h1 className='name'>Detalhes do {pokemon.name}<span className="number">#{pokemon.id}</span></h1>
        <img src={getImageURL(id)} alt={pokemon.name} />
      </div>
      <div className='PokeDetail'>

        <p>Altura: {pokemon.height} decímetros</p>
        <p>Peso: {(parseFloat(pokemon.weight) / 10).toFixed(1).replace('.', ',')} kg</p>
        <div className='PokeTypes'>
          {types.map((type) => (
            <span key={type.type.name} className={`type ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
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