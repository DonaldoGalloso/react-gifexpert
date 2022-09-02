export const getGifs = async(category) =>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=3xV3gfCxM1h8BcFaTr84c7GtJfYDPfCn&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium
    }))
    
    return gifs;
}