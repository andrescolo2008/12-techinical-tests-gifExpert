
import { GifItem } from "./GifItem"
import { useFetchGif } from "../../hooks/useFetchGif"


export const Gifgrid = ({category,number}) => {

   const {isLoading,images } =useFetchGif(category,number)

   console.log({images,isLoading,number});
   

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

                    < GifItem key={imag.id } {...imag} />
                 ) 
                    
                    )
            }

            
            </div>

           
              
                </>

  )
}
