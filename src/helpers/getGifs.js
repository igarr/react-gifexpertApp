


export   const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0QLXsShpMVIgEqUf2rwNrQGMMKzieiW5&q=${encodeURI(categoria)}&limit=10`;
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
                url: img.images?.downsized_medium.url
            }
        })
         return gifs;
        //La constante gifs no la puedo usar fuera de esta función porque no existirá
    }
