import React from "react";
import viteLogo from "../../public/vite.svg"
import gitLogo from '../../github.svg'
import linkedinLogo from '../../linkedin.svg'

function Home() {
    return (
        <div style={{ display: "flex", alignItems: "center", height: "100vh", width: '100vw' }}>
            <div style={{ display: "flex", width: '100%', height: '100%', justifyContent:"center" }}>
                <div style={{ marginTop: '100px', width:'50%', alignItems:"center" }}>
                    <section style={{ display: 'flex', backgroundColor: 'gray', justifyContent: "center" }}>
                        <img src={viteLogo} alt="vite.svg" style={{ borderRadius: 50, backgroundColor: "black", width: '80px', height: '80px' }} />
                    </section>
                    <section style={{ display: "flex", backgroundColor: 'gray', justifyContent: "center", width:'20%',height:'8%' }}>
                        <img src={gitLogo} alt="github.svg" style={{ width: '35%' }} />
                        <img src={linkedinLogo} alt="linkedin.svg" style={{ width: '35%' }} />
                    </section>
                </div>
                <div style={{backgroundColor:"blue",width:'50%'}}>
                    aa
                </div>
            </div>
        </div>
    )
}
export default Home