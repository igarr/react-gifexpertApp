import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';
export const GifGrid = ({ categorGrid }) => {

    // Al deconstruir puedo asignar valres nuevos a los campos
   const {data:imagenesEncontradas, loading} = useFetchGifs(categorGrid);

   // Este efecto me lo llevo al custom hook
//    useEffect( () => {
//        getGifs(categorGrid) //nos devuelve una promesa
//        .then( ponerImagenes );//esto es una abreviatura de lo siguiente comentado:
//        // .then( gifsEncontrados => ponerImagenes(gifsEncontrados));
//    }, [categorGrid])


    //Según está esta función React volverá a lanzar la petición API cuando pulse el botón
    // que incrementa el número count en 1, esto lo hace porque detecta un cambio
    // en el componente y debe actualizar las referencias.
    // Si estoy almacenando las imágenes en un array, por ejemplo, me lo llenará
    // de cosas repetidas
    // PARA QUE ESTO NO OCURRA DEBE UTILIZARSE useEffect
    return (
        <>
        <h3> { categorGrid } </h3>
        { loading && 'Cargando...'}
        <div className="card-grid">
            
                {
                imagenesEncontradas.map( currentImg => (
                 <GridItem 
                    key = {currentImg.id}
                    //Con esto le envío los datos de la imagen
                    {...currentImg}
                    />
                ))
                }
            </div>
        </>
    )
}
