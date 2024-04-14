
import { GifItem } from "./GifItem"
import { useFetchGif } from "../../hooks/useFetchGif"

import PropTypes from 'prop-types'


export const Gifgrid = ({category='saitama',number=3}) => {

   const {isLoading,images ,setImages} =useFetchGif(category,number)
  
   const handleClearImages = () => {
      // Limpia el estado de las imágenes
      setImages([]);
    };
  

   // console.log({images,isLoading,number});
   

   //  const [images, setImages] = useState([])

   //  const getImages=async ( ) =>{
   //      const newImages=await  getGifs(category)
   //      setImages(newImages)
        
        
   //  }
    
   //  useEffect(() => {
   //     getImages()
      
   //  }, [])
  
    return (
            <>
            <h3>{category}</h3>
            <h3>{number}</h3>

            <button onClick={handleClearImages} >limpiar imágenes</button>
            
            <div className="card">

               {
                  isLoading &&
                  (<h3>Cargando...</h3>)
   
}
                
            {
            //     images.map(({id,url,title})=>(
            //    < GifItem key={id} url={url} titlte={title} />
            //         )
            //      )

                 images.map(imag =>(

                    < GifItem key={imag.id } {...imag}  />
                 ) 
                    
                    )
                    
            }

            </div>
              
                </>
  )
}

Gifgrid.propTypes = {
   category:PropTypes.string.isRequired,
   number:PropTypes.string.isRequired
   }
