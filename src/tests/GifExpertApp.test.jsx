import { fireEvent, render, screen } from "@testing-library/react"
// import '@testing-library/jest-dom/extend-expect'; // Esto importa las funciones de aserción adicionales, como toBeInTheDocument
import { GifExpert } from "../assets/GifExpert"




describe('pruebas en < GifExpertApp>',()=>{

   
    
test('colocar un valor en el input donde se buscan los gifs', () => { 

    render(< GifExpert />)
    // screen.debug()
    const input= screen.getByPlaceholderText('busque su gif aquí');
    // console.log(input);
    fireEvent.input(input,{target:{value:'saitama'}})
    expect(input.value).toBe('saitama')
        })
        test('encontrar el botón agregar', () => { 

            render(< GifExpert />)
           
          
            expect(screen.getByText('agregar +')).toBeTruthy()
                })

        test('deb de ejecutar la función onAddCategory correctamente ', () => { 

const inputValue='superman'
const inputValuen='1'
            
            render(< GifExpert />)
            const input= screen.getByPlaceholderText('busque su gif aquí');
            const inputn= screen.getByPlaceholderText('nùmero');
            const form= screen.getByRole('form')  
   
    
    fireEvent.input(input,{target:{value:inputValue}})
    fireEvent.input(inputn,{target:{value:inputValuen}})
    fireEvent.submit(form)
          
    // expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    expect(screen.getAllByRole('heading', { name: 'superman' })).toEqual('superman');
    
    // expect(screen.getAllByRole('img').length).toBe(1)
    // expect(screen.getByRole('heading', { name: 'superman' })).toHaveTextContent();
                })

    })
    