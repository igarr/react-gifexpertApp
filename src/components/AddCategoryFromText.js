import React, {useState} from 'react'
// Este componente es un cuadro de texto, tiene dos manejadores
// cuando algo cambia, se actualiza el estado
// cuando se le da a enviar...
export const AddCategoryFromText = ({ ponCategoriaEnPadre }) => {
    
    //La caja de texto tendrá algún tipo de estado para poder saber lo que el usuario
    //está escribiendo
    const [textoParaCaja, settextoParaCaja] = useState('Introduzca búsqueda');
    
    const handleInputChange = (e) => {
        settextoParaCaja (e.target.value);
    }

    // Con preventDefault() impedimos que el formulario se comporte por defecto
    // como lo hacían los antiguos, en este caso refrescando la página aunque no se envíe nada
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Cuando de a submit quiero ejecutar la función setCategory que este componente
        // recibe como parámetro para actualizar allí la lista
        // como no he pasado el array de categorías como parámetro uso la función
        // callback que puede ser llamada con el estado anterior
        //
        if (textoParaCaja.trim().length > 2) {
        ponCategoriaEnPadre(categs => [textoParaCaja, ...categs]);
        // si pongo e.textoParaCaja sale vacío, no se por qué
        // Una vez insertado borro el valor de textoParaCaja
        settextoParaCaja('');
        //console.log('Formulario enviado');
        }
    }

    // Con el return yo envío en lo que consiste el componente
    //Como el form agrupa a todo lo que yo quiero enviar no me hace falta el fragment
    return (
        <form onSubmit={ handleSubmit}>
            <input 
                type="text"
                value={textoParaCaja}
                onChange={ handleInputChange }

            />
        </form>
    )
}
