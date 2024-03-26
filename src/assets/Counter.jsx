import { useState } from "react"

import PropTypes from "prop-types"

export const Counter = ({contador}) => {
    const [counter, setCounter] = useState(contador)
    const [counterValue, setCounterValue] = useState(2)

    const sumar= () =>{
       const  count=counter+counterValue;
       setCounter(count)
      
       
    }

    const restar= ( ) =>{
        if(counter===0) return
        const  count=counter-counterValue;
        setCounter(count)  
        
     }

     const handleChange = ({target}) => {
        let value = target.value;

        // Si el valor no es un string vacío, convierte el valor a un número entero
        // de lo contrario, deja que el valor del input sea el mismo (string vacío)
        if(value !== ''){
            value=parseInt(target.value, 10)
        }
       
      
        // Actualiza el estado counterValue con el nuevo valor
        setCounterValue(value);
       
       
      };


      const evento= ( ) =>{
            console.log(counterValue);
            
    }
    return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <input type="text"
    value={counterValue}
    onChange={handleChange}
     />
    <button onClick={sumar}>sumar</button>
    <button onClick={restar}>restar</button>
    <button onClick={evento}>eventor</button>
    
    </>
    )
}

Counter.propTypes={
    contador:PropTypes.number,
    base:PropTypes.number.isRequired

}

Counter.defaultProps ={
    contador:1,
    base:2
}
