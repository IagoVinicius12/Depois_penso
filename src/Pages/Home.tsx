import React from "react";
import viteLogo from "../../public/vite.svg"
import gitLogo from '../../github.svg'
import linkedinLogo from '../../linkedin.svg'

function Home() {
    return (
        <div style={{ justifyContent: "center", height: "100vh", width: '100vw' }}>
            <div style={{ display: "flex", justifyContent: "center", height: '60%' }}>
                <div style={{ paddingTop: '5%', display: "flex", width: '40%', height: '100%', justifyContent: "center" }}>
                    <div className='1' style={{ display: "flex", flexDirection: "column", width: '30%', alignItems: "center", height: '35%' }}>
                        <section style={{ display: 'flex', backgroundColor: 'gray', justifyContent: "end", paddingRight: '5%', width: '100%' }}>
                            <img src={viteLogo} alt="vite.svg" style={{ borderRadius: 50, backgroundColor: "black", width: '40%' }} />
                        </section>
                        <section style={{ display: "flex", backgroundColor: 'gray', justifyContent: "end", paddingRight: '5%', width: '100%', height: '100%' }}>
                            <img src={gitLogo} alt="github.svg" style={{ width: '40px' }} />
                            <img src={linkedinLogo} alt="linkedin.svg" style={{ width: '40px' }} />
                        </section>
                    </div>
                    <div className='2' style={{ display: "flex", backgroundColor: "blue", width: '70%', height: '35%', alignItems: "center", paddingBottom: '10%' }}>
                        <a>Olá sou Iago Vinicius Braga França, estudande e apaixonado por programação e desafios. Bem vindo(a) ao meu portifólio</a>
                    </div>
                </div>
            </div>
            <div>aaa</div>
        </div>
    )
}
export default Home