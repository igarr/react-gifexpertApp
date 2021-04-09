// Esto es un custom hook
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categorGridForHook) => {

    const [state, setState] = useState  ({
        data: [],
        loading: true
    });
    console.log('Categoría '+categorGridForHook);
    
    // Utilizando useEffect consigo que solamente se ejecute una vez al cargar el componente
    // al poner como segundo parámetro  [categorGridForHook] también le digo que se ejecute
    // cuando cambie la categoría categorGridForHook, pero esto no va a ocurrir
    useEffect( () => {
        getGifs(categorGridForHook) //nos devuelve una promesa
        .then( gifsEncontrados => {

           
            setTimeout( () => {
                
            console.log(gifsEncontrados);
            setState({
                data: gifsEncontrados,
                loading: false
            });

        }, 3000);
        })
    }, [categorGridForHook])


    //setTimeout es una función que recibe dos parámetros
    // El primero es una función callback que se ejecutará cuando
    // pase el tiempo en ms especificado en el segundo parámetro
    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3],
    //         loading: false
    //     })
    // }, 3000)

    //La primera vez que se entra en esta función hook
    // se devuelve es estado inicial, al pasar
    // 3 segundos se vovlerá a devolver el nuevo estado
    // y OJO, cada tres segundos se seguirá devolviendo eso, NO SE POR QUÉ
    console.log('ENVIO COSAS!!!');
    return state;
}
