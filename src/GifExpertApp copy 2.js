import React, {useState} from 'react'
import {AddCategoryFromText} from './components/AddCategoryFromText';
//Para hacer el parámetro ponCategoria obligaotorio
import PropTypes from 'prop-types';

export const GifExpertApp = () => {
    
    // Si declaro este array con const no podré añadir elementos (mute)
    //const categories = ['Chiniro', 'Totoro', 'Pazu'];
    //
    // Uso un hook para poder modificar el array de categorías. El estado inicial es un array
    const [categories, setCatergory] = useState (['Chiniro', 'Totoro', 'Pazu']);
    //SI USO setCategory PARA AÑADIR ELEMENTOS REACT LOS AÑADIRÁ AUTOMÁTICAMENTE A
    // A LA LISTA ORDENADA
    const handleAdd = () => {
        // Si uso push me mete el elemento pero React no lo renderiza en la lista
        // categories.push('Porco Rosso');
        //
        //Mejor utilizar el setCategory
        // En setCategory tengo que poner el nuevo estado
        // EL NUEVO ESTADO SERÁ TODO EL ARRAY QUE YO QUIERO QUE SEA
        // así que digo que deje lo anterior y añada un elemento nuevo
        // setCatergory( [...categories, 'Porco Rosso']);
        // También se puede enviar a setCategory una función callback en la cual
        // el primer argumento es el estado anterior y regresa el nuevo estado:
        // setCategory( categIniciales => [ ...categIniciales, 'Porco Rosso']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            {/*En ponCategoria irá una referencia a la función setCategory
                por lo que podré cambiar las categorías desde allí donde se
                reciba ese parámetro */}
            <AddCategoryFromText ponCategoria={ (setCatergory) } />
            <hr />
            <ol>
                {
                    //Aquí hay que usar una expresión que devuelva algo
                    categories.map( (category, ind) => {
                        return <li key={category}>{category}</li>
                    })
                }

            </ol>
        </>
    )
}

//Con esto hacemos el parámetro ponCategoría requerido, para que el que use
// mi componente tenga que enviar siempre el parámetro
AddCategoryFromText.propTypes = {
    ponCategoria: PropTypes.func.isRequired
};