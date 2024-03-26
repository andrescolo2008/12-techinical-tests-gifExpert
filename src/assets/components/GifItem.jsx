import React from 'react'

export const GifItem = ({id,title,url}) => {

    console.log(id,title,url);
    
  return (
    <div  
    key={id}>
        <img src={url} alt="title" />
    </div>
  )
}
