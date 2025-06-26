import React from "react";
import reactLogo from '../assets/react.svg'
import MenuItem from "./MenuItem";

interface HeaderProps{
    text1:string
    text2:string
    text3:string
    text4:string
}

const Header: React.FC<HeaderProps> = ({text1,text2,text3,text4})=>{
    const menuItems=[text1,text2,text3,text4]
    return(
        <div style={{width:"90%", display:"flex", alignItems:"start",height:"50px"}}>
            <div style={{display:"flex",minWidth:'90vw',width:'100%', height:'50px', alignItems:"center",justifyContent:"space-evenly", color:"black"}}>
                <img src={reactLogo} />
                {menuItems.map((text,index)=>(
                    <MenuItem key={index} text={text}/>
                ))}
            </div>
        </div>
    )
}
export default Header