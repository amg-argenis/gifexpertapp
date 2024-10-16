// este componente unicamente es el que crea la tarjeta con la imagen y el titulo obtenidos de la url
import PropTypes from 'prop-types';

const GifItem = ({title, url}) => {    
  return (    
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>    
  )
}

// Tarea, agegar las proptypes y validaciones
GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


export default GifItem
