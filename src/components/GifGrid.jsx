import { useState, useEffect } from "react";
import { getGifs } from '../helpers/GetGifs';
import GifItem from "./GifItem";

export const GifGrid = ( {category} ) => {        
    console.log(category)
    const [images, setImages] = useState([]);
    const [loading, setloadingSate] = useState(true);

    // buena practica para llamar una funcion asincrona (api) desde useEffect
    const getImages = async () => {
        const images = await getGifs( category );
        setImages(images);
        setloadingSate(false);
    }

    // llamamos a la funcion asincrona que consulta la api (fetch)
    useEffect(() => {                      
       getImages();       
    }, []); // solo se ejecuta una vez cuando las dependenias estan vacias []
    
  return (
    <>     
      <h3>{ category }</h3>            
      <div className="card-grid">
        {
          loading ? // esto es el if ternario
          ( <h2>Cargando...</h2> )
          : 
          (
              images.map((image) => (
                // <div className="card" key={image.id}>
                //     <img src={ image.url } alt={ image.title } />
                //     <p>{ image.title }</p>
                // </div>   
                
                <GifItem 
                    key={ image.id }
                    { ...image } // esto hace que las propiedades del objeto se propaguen como propiedades independientes
                />
                
            ))
          )
        }      
      </div>      
    </>
  )
}

