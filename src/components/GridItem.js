import React from 'react'

//En el componente recibimos las propiedades deconstruidas en vez de todo el elemento imagen
export const GridItem = ( {id,title, url}) => {
    
    console.log({id,title,url});

    return (
        <div className="card animate__animated animate__fadeIn">
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </div>
    )
}
