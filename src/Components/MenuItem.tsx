import React from "react";
import { useState } from "react";

interface MenuItemProps{
    text:string
}

const MenuItem: React.FC<MenuItemProps>=({text})=>{
    const [hovered,setHovered]=useState(false)
    return(
        <>
            <span
            onMouseEnter={()=>setHovered(true)} 
            onMouseLeave={()=> setHovered(false)} 
            style={{fontSize:hovered ? '20px' : 'initial', minWidth:'30px', display:"flex", justifyContent:"center"}}>
                {text}
            </span>
        </>
    )
}
export default MenuItem