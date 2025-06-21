import React from "react";
import { useState } from "react";

export default function Carousel(){
    const imagens=[
        '/SLA.jpg'
    ];
    const [index, setIndex]=useState(0);
    
    const handleNext = () =>{
        setIndex(index+1)
    }
    const handlePrev = () =>{
        setIndex(index-1)
    }
    return(
        <div>
        </div>
    )
}