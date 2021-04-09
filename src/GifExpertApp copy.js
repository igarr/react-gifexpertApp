import React, {useState} from 'react'

export const GifExpertApp = () => {
    
    // Si declaro este array con const no podré añadir elementos (mute)
    //const categories = ['Chiniro', 'Totoro', 'Pazu'];
    //
    // El estado inicial es un array
    const [categories, setCatergory] = useState (['Chiniro', 'Totoro', 'Pazu']);
    //SI USO addCategory PARA AÑADIR ELEMENTOS REACT LOS AÑADIRÁ AUTOMÁTICAMENTE A
    // A LA LISTA ORDENADA
    const handleAdd = () => {
        // Si uso push me mete el elemento pero React no lo renderiza en la lista
        // categories.push('Porco Rosso');
        //
        //Mejor utilizar el addCategory
        // En addCategory tengo que poner el nuevo estado
        // EL NUEVO ESTADO SERÁ TODO EL ARRAY QUE YO QUIERO QUE SEA
        // así que digo que deje lo anterior y añada un elemento nuevo
        setCatergory( [...categories, 'Porco Rosso']);
        // También se puede enviar a addCategory una función callback en la cual
        // el primer argumento es el estado anterior y regresa el nuevo estado:
        // setCategory( categIniciales => [ ...categIniciales, 'Porco Rosso']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

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
