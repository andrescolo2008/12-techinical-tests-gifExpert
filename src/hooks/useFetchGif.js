import { useEffect, useState } from "react"

 import{getGifs} from '../helpers/getGif';
 
 export const useFetchGif= (category,number ) =>{
    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const getImages=async ( ) =>{
        const newImages=await  getGifs(category,number)
        // setTimeout(() => {
            setImages(newImages)
            setIsloading(false)
            
        // }, 2000);
        // quitar el setTimeout para que no interfiera con la prueba
    }
    
    useEffect(() => {
       getImages()
      
    }, [])
    
    return{
        images,
        isLoading,
        setImages
    }
}

