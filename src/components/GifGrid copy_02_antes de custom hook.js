import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import {GridItem} from './GridItem';
export const GifGrid = ({ categorGrid }) => {

    const [imagenes, ponerImagenes] = useState ([]);

   // useEffect recibe una función callback en la que llamaremos a getGifs
   // y un arreglo de dependencias
   // Si el arreglo de dependencias es un array vacío el getGifs solamente se dispara una vez
   // cuando el componente es renderizado por primera vez
   useEffect( () => {
       getGifs(categorGrid) //nos devuelve una promesa
       .then( ponerImagenes );//esto es una abreviatura de lo siguiente comentado:
       // .then( gifsEncontrados => ponerImagenes(gifsEncontrados));
      
    // Nos saldrá un warning indicando que si la categoría cambia deberíamos ejecutar de nuevo para cargar
    // las imágenes, pero en nuestro caso no va a cambiar una vez que hayamos hecho la búsqueda
    //
    // webpackHotDevClient.js:138 src\components\GifGrid.js
    // Line 16:7:  React Hook useEffect has a missing dependency: 'categorGrid'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    //
    // Si quiero quitar el warning pongo esa variable en las dependencias, en el array 
    // que aparece a continuación como segundo parámetro de la función

   }, [categorGrid])


    //Según está esta función React volverá a lanzar la petición API cuando pulse el botón
    // que incrementa el número count en 1, esto lo hace porque detecta un cambio
    // en el componente y debe actualizar las referencias.
    // Si estoy almacenando las imágenes en un array, por ejemplo, me lo llenará
    // de cosas repetidas
    // PARA QUE ESTO NO OCURRA DEBE UTILIZARSE useEffect
    return (
        <>
        <h3> { categorGrid } </h3>
        <div className="card-grid">
            
                {
                imagenes.map( currentImg => (
                 <GridItem 
                    key = {currentImg.id}
                    {...currentImg}
                    />
                ))
                }
        </div>
        </>
    )
}
