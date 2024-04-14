import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../assets/components/AddCategory"


describe('pruebas en < AddCategory>',()=>{
test('debe de mostrar los inputs y el botón del componente', () => { 

    render(< AddCategory />)
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getAllByRole('textbox')).toBeTruthy()

    })

    test('debe de cambiar el valor de la caja de texto ', () => { 

        render(< AddCategory onNewNumber={()=>{}} onCategorySubmita={()=>{}} />)
        const input= screen.getByPlaceholderText('busque su gif aquí');
        // console.log(input);
        fireEvent.input(input,{target:{value:'saitama'}})
        expect(input.value).toBe('saitama')
    
        })

        test('debe de llamar onCategorySubmita y onNewNumber ', () => { 

            const inputValue='megaman x';
            render(< AddCategory onNewNumber={()=>{}} onCategorySubmita={()=>{}} />)
            const input= screen.getByPlaceholderText('busque su gif aquí');
            const form= screen.getByRole('form')
            fireEvent.input(input,{target:{value:inputValue}})
            
            fireEvent.submit(form)
            expect(input.value).toBe('')
        
            })

            test('debe de llamar onCategorySubmitxx con el valor de inputValue ', () => { 

                const inputValue='megaman x';
                const onCategorySubmitxx=jest.fn()
                render(< AddCategory onNewNumber={()=>{}} onCategorySubmita={onCategorySubmitxx} />)
                const input= screen.getByPlaceholderText('busque su gif aquí');
                const form= screen.getByRole('form')
                fireEvent.input(input,{target:{value:inputValue}})
                
                fireEvent.submit(form)
                expect(onCategorySubmitxx).toHaveBeenCalled()
                expect(onCategorySubmitxx).toHaveBeenCalledTimes(1)
                expect(onCategorySubmitxx).toHaveBeenCalledWith(inputValue)
            
                })
                test('No debe de llamar onCategorySubmitxx  el valor de inputValueestá vacío ', () => { 

                    const inputValue='';
                    const onCategorySubmitxx=jest.fn()
                    render(< AddCategory onNewNumber={()=>{}} onCategorySubmita={onCategorySubmitxx} />)
                    // const input= screen.getByDisplayValue('one punch');
                    const form= screen.getByRole('form')
                    // fireEvent.input(input,{target:{value:inputValue}})
                    // if(inputValue != ''){fireEvent.submit(form) }else{''}
                    fireEvent.submit(form)
                    
                    
                    // expect(onCategorySubmitxx).toHaveBeenCalledTimes(0)
                    expect(onCategorySubmitxx).not.toHaveBeenCalled()
                
                    })
})