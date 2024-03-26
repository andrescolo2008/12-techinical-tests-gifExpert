import { useState } from "react";


export const AddCategory = ({onNewNumber,onCategorySubmita}) => {

    const [value, setValue] = useState('one punch')
    const [number, setNumber] = useState(3)

    
      const onInputChange= ({target}) =>{
 
          
          setValue(target.value)
        }

        const onInputChange1= ({target}) =>{
 
          
          setNumber(target.value)
        }

        const onSubmit= ( event) =>{
         event.preventDefault()
         if(value.trim().length<3  ) return
         
            // onNewCategory(categories => [value,...categories])
            
            onCategorySubmita(value.trim())
            onNewNumber(number)
            setValue('')
            setNumber(0)
            
        }
      
    return (
    <>
        
        {/* input */}

        <form onSubmit={onSubmit} >

        <button id='addcategory'type="submit" >
          <span>agregar +</span> 
          </button>

        <label >
          <input type="text" 
          placeholder='busque su gif aquí'
          value={value}
          onChange={event => onInputChange(event)}
          /> 

          <i className="bi bi-check-circle-fill"></i>
        <span className="icon icon-check" role="presentation"> 
          </span>
          <input type="text"
          placeholder="nùmero"
          value={number}
          onChange={event => onInputChange1(event)}
          />
          </label>
        </form>
    </>
  )
}
