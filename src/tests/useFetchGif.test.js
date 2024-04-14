import { renderHook, screen, waitFor } from "@testing-library/react"
import { useFetchGif } from "../hooks/useFetchGif"


describe('pruebas en < useFetchGif>',()=>{

test('debe de regresar el estado inicial', () => { 
// estado incial images[], y isLoading = true 

const {result}=renderHook(()=> useFetchGif('goku',3))
const { images, isLoading }= result.current

// 2nda manera de desestructurar

// const {result:{current}}=renderHook(()=> useFetchGif('goku',3))
//console.log(result) -->result{current:{ images: [], isLoading: true }}
// console.log(current) -->{ images: [], isLoading: true }
// const { images, isLoading }= current

expect(images.length).toBe(0)
expect(isLoading).toBeTruthy()


        })
        test('debe de retornar un arreglo de imágenes y isLoading en false',async () => { 
            // estado incial images[], y isLoading = true 
            const {result}=renderHook(()=> useFetchGif('goku',3))
           
            await waitFor(
                ()=> expect(result.current.images.length).toBeGreaterThan(0)
            )

            const { images, isLoading }= result.current
            expect(images.length).toBeGreaterThan(0)
            expect(isLoading).toBeFalsy()
            
            console.log(images,isLoading);
            
                    })
})