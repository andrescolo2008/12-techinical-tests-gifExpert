import React, { useState } from 'react'
import { AddCategory, Gifgrid } from './components'
import { number } from 'prop-types'

// import {AddCategory} from './components/AddCategory'
// import { Gifgrid } from './components/Gifgrid'



export const GifExpert = () => {
  
const [categories, setCategories] = useState(['one punch man',])
const [number, setNumber] = useState(0)

const onAddCategory= ( newCategory) =>{
        
  // console.log(newCategory);
  if(categories.includes(newCategory)) return;
  
  // setCategories([...categories,newCategory])
  setCategories([newCategory])
}

const onCategorySubmit = (newCategory) => {
  onAddCategory(newCategory);
}

const onNewNumber = (newNumber) =>{
setNumber(newNumber)



}

return (
    
      <>
      <div>GifExpert</div>


      <AddCategory  onCategorySubmita={onCategorySubmit} onNewNumber={onNewNumber}  />

        {/* listado de  gifs */}
          
          {
          categories.map(category =>(
            < Gifgrid category={category} key={category} number={number} />)) 
          
          }


      </>


  )

}
