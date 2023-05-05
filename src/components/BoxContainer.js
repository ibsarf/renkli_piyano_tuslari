import React from 'react'
import Box from './Box'
import "./BoxContainer.css"

function BoxContainer() {
    const num=32
    const allColor=["purple", "magenta", "blueviolet", "pink", "red", "green", "blue", "yellow", "orange", "brown", "violet", "tomato", "lime"]
    const boxes=Array.from({length:num}).map(()=>(<Box nextColor={allColor}/> ))
    
  return (
    <div  className='BoxContainer'>{boxes}</div>
  )
}   
export default BoxContainer;