import React from 'react'
import PropTypes from "prop-types"

export const GifItem = ({id,title,url}) => {

    console.log(id,title,url);
    
  return (
    <div  
    key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes= {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}