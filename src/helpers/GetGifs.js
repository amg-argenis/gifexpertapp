export const getGifs = async (category) => {
    const apikey = 'AIzaSyAtLHpjI4xc7jo3A76KhPB4hSWezoRoNTc';
    /* search for excited top 8 GIFs */
// "https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyAtLHpjI4xc7jo3A76KhPB4hSWezoRoNTc&client_key=my_test_app&limit=8"
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apikey}&client_key=gifexpertapp&limit=8`
    // const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();    
    console.log(results);
    

    const gifs = results.map((item) => (
        {
            id: item.id,
            title: item.media_formats.gif.url,
            url: item.media_formats.gif.url
        }

    ));
    // console.log(gifs)
    return gifs;
        
} // end getGifs