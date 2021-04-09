import React, {useState} from 'react'

export const GifGrid = ({ categorGrid }) => {

   const [count, setCount] = useState(0)
    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=0QLXsShpMVIgEqUf2rwNrQGMMKzieiW5&q=Chiniro&limit=10';
        const resp = await fetch( url );
        
        //Solamente me interesa el campo data del json que obtengo como respuesta
        const { data } = await resp.json();

        // De todo el data solo me interesan los campos id, title y downsized_medium.url
        // con data.map voy recorriendo el arreglo data y cada elemento se va asociando
        // a la variable img de la que luego saco lo que me interesa
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs);


    }

    // Llamo a la función definida antes directamente, antes de hacer el return principal
    getGifs();

    //Según está esta función React volverá a lanzar la petición API cuando pulse el botón
    // que incrementa el número count en 1, esto lo hace porque detecta un cambio
    // en el componente y debe actualizar las referencias.
    // Si estoy almacenando las imágenes en un array, por ejemplo, me lo llenará
    // de cosas repetidas
    // PARA QUE ESTO NO OCURRA DEBE UTILIZARSE useEffect
    return (
        <div>
            <h3> { categorGrid } </h3>
            <h3>{count}</h3>
            <button 
                onClick = {() => setCount(count+1)}>pulsa</button>
        </div>
    )
}
