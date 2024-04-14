import { getByText, render, screen } from "@testing-library/react"
import { Gifgrid } from "../assets/components/Gifgrid"
import { useFetchGif } from "../hooks/useFetchGif"

jest.mock("../hooks/useFetchGif")

describe('pruebas en < GifGrid>',()=>{
    const  category='one punch';
    const number= 2

test('debe de mostrar el loading inicialmente', () => { 
useFetchGif.mockReturnValue({
    images:[],
    isLoading:true,
})

render(< Gifgrid category={category} number={number}/>)

expect(screen.getByText('Cargando...')).toBeTruthy()
expect(screen.getByText(category)).toBeTruthy()
expect(screen.getByText(number)).toBeTruthy()

    })
    test('debe de mostrar las imágenes cargadas cuando se llame useFetchGifs', () => { 

        const gifs=[{
            id:'abc',
            title:'saitama',
            url:'https://www.saitama.jpg.com'
        },
        {
            id:'def',
            title:'garou',
            url:'https://www.garou.jpg.com'
        },
        {
            id:'ghi',
            title:'king',
            url:'https://www.king.jpg.com'
        },
    ]
        const  category='one punch';
        const number= 2
        
        useFetchGif.mockReturnValue({
            images:gifs,
            isLoading:false,
        })
        
        render(< Gifgrid category={category} number={number}/>)
        
        expect(screen.getAllByRole('img').length).toBe(gifs.length)// que el número de lo  que sea img(imágenes) sea igual a la longitud del arreglo gifs, en este caso hay 3 elementos del arreglo, saitama ,garou y king.Así quitar o agregar elementos, no requeriá  colocar un número fijo para el arreglo de gifs 
       
        
            })
})

