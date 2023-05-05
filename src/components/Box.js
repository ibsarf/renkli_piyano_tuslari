import { useState } from "react"
import {choice} from "./Helper"
import "./Box.css"

export default function Box({nextColor}){

    const [color,setColor]=useState(choice(nextColor))
    // console.log(color);
    
    const handleClick=()=>{
        let newColor;
        do{
            newColor=choice(nextColor)
        }while(newColor===color) {setColor(newColor) }
    }  

    return(
        <div className="Box" style={{backgroundColor:color}} onClick={handleClick} >
            {color}
        </div> 
    )
}