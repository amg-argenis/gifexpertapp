import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ( {onNewValue} ) => {
    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = ({ target }) => {        
        setInputvalue( target.value );
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const clearedInput = inputvalue.trim();
        if(clearedInput.length <= 1) {
            alert('Digita una categoria');
            return;
        }
        onNewValue(clearedInput); // forma 1
        // onNewValue((estadoActual) => [...estadoActual, inputvalue]); // forma 2
        setInputvalue(''); // limpiamos la caja de texto
    }        

  return (        
    // <form onSubmit={ onSubmitForm }>
    <form>
        <input 
            type="text" 
            placeholder= 'Escribir categora...' 
            value={ inputvalue }
            // onChange={ (evento) => onInputChange(evento) }   // forma 1            
            onChange={ onInputChange } // forma 2
            />           
            
        <button 
        className="boton"
            onClick={ onSubmitForm }>
            Agregar categoria
        </button> 
    </form>            
  )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}