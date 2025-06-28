
import { useState } from "react";
import './carousel.css'
import Img1 from '../../Images/SLA.jpg'
import Img2 from '../../Images/SLA1.jpg'
import Img3 from '../../Images/SLA2.jpg'
import Img4 from '../../Images/SLA3.jpg'


export default function Carousel() {
    const imagens = [
        Img1,
        Img2,
        Img3,
        Img4,
    ];
    const texts = [
        'aaaaaa',
        'bbbbbbb',
        'cccccccccc',
        'sddddddddd'
    ]
    const [index, setIndex] = useState(0);
    const [currentIndex] = useState(index);
    const [change, setChange] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleNext = () => {
        setIndex(index + 1)
        setChange(true)
        setTimeout(() => {
            setChange(false);
        }, 400);
    }
    const handlePrev = () => {
        setIndex(index - 1)
        setChange(true)
        setTimeout(() => {
            setChange(false);
        }, 400);
    }
    const visibleTexts = texts.slice(index, index + 3)
    return (
        <div className='aparecendo_carrosel' >
            <button onClick={handlePrev} disabled={index <= 0} style={{ width: '2%', height: '20%' }}></button>
            {imagens.map((src, index) => (index >= currentIndex && index <= currentIndex + 2 ? (
                <section 
                key={index}
                style={{ width: "15%", 
                backgroundColor: "white", 
                borderRadius: 15, 
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)", 
                transition: "transform 0.3s ease-in-out", 
                zIndex: hoveredIndex === index ? 1 : 0 }} 
                className={change == true ? 'diminuir_aumentar' : 'none'} 
                onMouseEnter={() => setHoveredIndex(index)} 
                onMouseLeave={()=>setHoveredIndex(null)}>
                    <img key={index} src={src} alt="" style={{ width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15 }} />
                    <div style={{ display: "flex", padding: 20 }}>
                        {visibleTexts[index]} {index}
                    </div>
                </section>
            ) : null))}
            <button onClick={handleNext} disabled={index == imagens.length - 3} style={{ backgroundColor: 'gray', width: '2%', height: '20%' }}></button>
        </div>
    )
}