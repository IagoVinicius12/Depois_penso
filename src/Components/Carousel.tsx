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
    const visibleImages = imagens.slice(index, index + 3);
    return(
        <div>
            {visibleImages.map((src,index)=>(
                <section style={{width:"15%", backgroundColor:"white", borderRadius:15 }}>
                    <img key={index} src={src} alt="" style={{width:'100%', borderTopRightRadius:15, borderTopLeftRadius:15}} />
                    <div style={{display:"flex", padding:20}}>
                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                    </div>
                </section>
            ))}
        </div>
    )
}