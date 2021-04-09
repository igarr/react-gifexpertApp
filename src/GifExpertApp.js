import React, {useState} from 'react'
import {AddCategoryFromText} from './components/AddCategoryFromText';
//Para hacer el parámetro ponCategoria obligaotorio
import PropTypes from 'prop-types';
import {GifGrid}  from './components/GifGrid';


export const GifExpertApp = () => {
    
    const [categories, setCatergory] = useState (['Chihiro']);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/*En ponCategoria irá una referencia a la función setCategory
                por lo que podré cambiar las categorías desde allí donde se
                reciba ese parámetro */}
            <AddCategoryFromText ponCategoriaEnPadre={ (setCatergory) } />
            {/*Le paso al componente una función que sirve para manipular las categorías
            en su padre, que soy yo. AddCategoryFromText podrá hacerme cosas por tanto */}
            <hr />
            <ol>
                {
                    //Aquí hay que usar una expresión que devuelva algo
                    categories.map( (category, ind) => {
                        return <GifGrid 
                                    key = { category }
                                    categorGrid={ category } />
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