 import { Link } from 'react-router-dom';
import './index.scss';  
import  {getImageURL} from "../../../api/PokeApi";
 
const PokeCard = ({ pokemon }) => {
  const { id, name, types } = pokemon;

  

  const typeClass = types.map((type) => type.type.name).join(' ');

  
  return (
    <div className={`PokeCard ${typeClass}`}>
    <span className="number">#{pokemon.id}</span>
      <div className='pokemon-image'>
        <img src={getImageURL(id)} alt={name} />
      </div>
      <div className='pokemon-description'>
      
        <h3 className='name'>{name}</h3>
        <div className='detail'>
          <div className='types'>
            {types.map((type) => (
              <span key={type.type.name} className={`type ${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          <Link to={`/pokemon/${id}/`} className='buttonDetails'>
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;