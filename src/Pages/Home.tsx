import React from "react";
import viteLogo from "../../public/vite.svg"
import gitLogo from '../../github.svg'
import linkedinLogo from '../../linkedin.svg'

function Home() {
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", width: '100vw' }}>
            <div style={{ paddingTop: '5%',display: "flex", width: '40%', height: '100%', justifyContent:"center" }}>
                <div style={{  width:'50%', alignItems:"center" }}>
                    <section style={{ display: 'flex', backgroundColor: 'gray', justifyContent: "end" , paddingRight:'5%'}}>
                        <img src={viteLogo} alt="vite.svg" style={{ borderRadius: 50, backgroundColor: "black", width: '80px', height: '80px' }} />
                    </section>
                    <section style={{ display: "flex", backgroundColor: 'gray', justifyContent: "end", paddingRight:'5%', width:'100%',height:'8%' }}>
                        <img src={gitLogo} alt="github.svg" style={{ width: '40px' }} />
                        <img src={linkedinLogo} alt="linkedin.svg" style={{ width: '40px' }} />
                    </section>
                </div>
                <div style={{backgroundColor:"blue",width:'50%'}}>
                    <h4>Olá sou Iago Vinicius Braga França, bem vindo ao meu portifólio.</h4>
                </div>
            </div>
        </div>
    )
}
export default Home