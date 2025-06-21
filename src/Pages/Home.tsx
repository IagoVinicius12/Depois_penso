import React from "react";
import viteLogo from "../../public/vite.svg"
import gitLogo from '../../github.svg'
import linkedinLogo from '../../linkedin.svg'
import Sla from '../../SLA.jpg'

function Home() {
    return (
        <div style={{ justifyContent: "center", height: "100vh", width: '100vw' }}>
            <div style={{ display: "flex", justifyContent: "center", height: '25%' }}>
                <div style={{ paddingTop: '5%', display: "flex", width: '40%', height: '100%', justifyContent: "center", backgroundColor: 'red' }}>
                    <div className='1' style={{ display: "flex", flexDirection: "column", width: '30%', alignItems: "center", height: '100%' }}>
                        <section style={{ display: 'flex', backgroundColor: 'gray', justifyContent: "end", paddingRight: '5%', width: '100%', height: '100%' }}>
                            <img src={viteLogo} alt="vite.svg" style={{ borderRadius: 50, backgroundColor: "black", width: '40%' }} />
                        </section>
                        <section style={{ display: "flex", backgroundColor: 'green', justifyContent: "end",alignItems:"center", paddingRight: '5%', width: '100%', height: '100%' }}>
                            <a href="https://github.com/IagoVinicius12" target="_blank"><img src={gitLogo} alt="github.svg" style={{ width: '40px' }} /></a>
                            <a href="https://www.linkedin.com/in/iago-vin%C3%ADcius-39b675304/" target="_blank"><img src={linkedinLogo} alt="linkedin.svg" style={{ width: '40px' }} /></a>
                        </section>
                    </div>
                    <div className='2' style={{ display: "flex", backgroundColor: "blue", width: '70%', height: '100%', alignItems: "center", paddingBottom: '4%' }}>
                        <a>Olá sou Iago Vinicius Braga França, estudande e apaixonado por programação e desafios. Bem vindo(a) ao meu portifólio</a>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%', alignContent: "flex-start" }}>
                <hr style={{ width: '50%' }} />
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h2>
                    Projetos Pessoais
                </h2>
            </div>
            <div style={{ display: "flex", width: "100%", justifyContent: "center", backgroundColor: 'black' }}>
                <section style={{width:"15%", backgroundColor:"white", borderRadius:15 }}>
                    <img src={Sla} alt="" style={{width:'100%', borderTopRightRadius:15, borderTopLeftRadius:15}} />
                    <div style={{display:"flex", padding:20}}>
                        Some quick example text to build on the card title and make up the bulk of the card’s content.
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home