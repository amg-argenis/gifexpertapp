import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

const GifExpertApp = () => {

  // ApiKey: NDnLVex4ZdRNrndFgIV7niLMVb69UfYg
  const [categories, setCategories] = useState([]);  

  const onAddCategory = (newCategory) => {    
    // setCategories([...categories, 'Valorant']); // forma 1
    // validar que no haya duplicados
    // const cat = categories.find(cat => cat === newCategory);
    // if (cat) {
    //   alert(`Ya existe ${cat}`);
    //   return;
    // }
    // Otra forma de validar
    if(categories.includes(newCategory)) {
      alert(`Ya existe ${newCategory}`);
        return;
    }
    setCategories((estadoActual) => [...estadoActual, newCategory]); // forma 2
  }  
    
  return (
    <>
      {/* Titulo */}
        <h1>Gif Expert App</h1> 
      
      {/* Input, importar componente */}
      <AddCategory         
        onNewValue = { onAddCategory } // forma 1, a mi me gusta mas asi y le entiendo mejor
        // setCategories = { setCategories }
      />      
      
      {/* Listado de Gifs usando componente*/}      
      { 
         categories.map((category) => (
          <GifGrid 
            key={category}
            category= {category} 
          />
        ))
      }      
    </>
  )
} // end GifExpertApp

export {
    GifExpertApp
}