// este componente unicamente es el que crea la tarjeta con la imagen y el titulo obtenidos de la url
const GifItem = ({title, url}) => {    
  return (    
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>    
  )
}

export default GifItem
