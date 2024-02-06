import React from 'react'

const BurgerIcon = ({width, height, color, isOpened=false}) => {

  return (

    <div  style={{width: `${width}px`, height: `${height}px`}} className={`burger-icon ${color} ${isOpened && '_opened'} `}>
        <span></span>
    </div>

  )
}

export default BurgerIcon