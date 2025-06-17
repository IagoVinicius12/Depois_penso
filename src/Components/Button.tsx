import React from "react";
import { useState } from "react";
// import styled from 'styled-components';

const Button=(text:string)=>{
    const [hovered,setHovered]= useState(false)
    return(
        <>
            <button onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} style={{backgroundColor:hovered ? 'grey':'red'}} >{text}</button>
        </>
    )
}
export default Button