import { useEffect, useState } from "react";


export const FetchLikePro = () => {
    // const fetchApi=fetchData('http://api.giphy.com/v1/gifs/search?api_key=tOuGo3jNBa9ARQ5eyCuR6crElbBVtfnJ&q&limit=5')
    // const [data, setdata] = useState(null)
    // http://api.giphy.com/v1/gifs/search?api_key=tOuGo3jNBa9ARQ5eyCuR6crElbBVtfnJ&q&limit=5
    const [image, setimage] = useState('')
    
    const fetchGif = async () => {
        try {
            const url = 'https://api.giphy.com/v1/gifs/random?apiKey=bu7WEF9trqzmxwWQygW1Mh70nRKi3ehg';
            const resp = await fetch(url);
            const { data } = await resp.json();
            const imageUrl = data.images.downsized_medium.url;
            setimage(imageUrl);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    };

     useEffect(() => {
            
            
            fetchGif();
        }, []);//Llamar a fetchGif solo una vez al montar el componente
        
    
        const handeClick = ( ) =>{
        fetchGif()
        }
  return (
    
  <div>
    <div>FetchLikePro</div>
    <div className="card">
        <ul>
            {
            <img src={image} alt="gif" />
            }
        </ul>
        <button onClick={handeClick}>siguiente gif</button>
    </div>

    </div>
  )
}
