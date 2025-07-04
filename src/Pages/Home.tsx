import viteLogo from "../../public/vite.svg"
import gitLogo from '../../github.svg'
import linkedinLogo from '../../linkedin.svg'
import Sla from '../../Images/SLA.jpg'
import Carousel from "../Components/Carousel";
import './home.css'
import Curriculo from '../../arquivos/Currículo_Iago.pdf'
import TypingText from "../Components/Typingtext";
import { useState } from "react";

function Home() {
    const texto = 'Olá sou Iago Vinicius Braga França, estudante e apaixonado por programação e desafios. Bem vindo(a) ao meu portifólio'
    const [hovered, setHovered] = useState('')
    return (
        <div style={{ justifyContent: "center", height: "100vh", width: '100vw', overflowX: 'hidden', flexDirection: 'column' }}>
            <div className="aparecendo" style={{ display: "flex", justifyContent: "center", height: '25%'}}>
                <div style={{ paddingTop: '5%', display: "flex", width: '40%', height: '100%', justifyContent: "center" }}>
                    <div className='1' style={{ display: "flex", flexDirection: "column", width: '30%', alignItems: "center", height: '100%' }}>
                        <section style={{ display: 'flex', justifyContent: "end", paddingRight: '5%', width: '100%', height: '100%' }}>
                            <img src={viteLogo} alt="vite.svg" style={{ borderRadius: 50, width: '40%' }} />
                        </section>
                        <section style={{ display: "flex", justifyContent: "end", alignItems: "center", paddingRight: '5%', width: '100%', height: '100%' }}>
                            <a href="https://github.com/IagoVinicius12" target="_blank" className={hovered === 'github'? "crescer_icone" : ''}>
                                <img src={gitLogo} alt="github.svg" style={{ width: '40px' }} onMouseEnter={() => setHovered('github')} onMouseLeave={() => setHovered('')} />
                            </a>
                            <a href="https://www.linkedin.com/in/iago-vin%C3%ADcius-39b675304/" target="_blank" className={hovered==='linkedin' ? "crescer_icone" : ''}>
                                <img src={linkedinLogo} alt="linkedin.svg" onMouseEnter={() => setHovered('linkedin')} onMouseLeave={() => setHovered('')} style={{ width: '40px' }} />
                            </a>
                        </section>
                    </div>
                    <div className='2' style={{ display: "flex", width: '70%', height: '100%', alignItems: "center", paddingBottom: '4%' }}>
                        <TypingText text={texto} speed={30} />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%', alignContent: "flex-start" }}>
                <hr style={{ width: '50%' }} />
            </div>
            <div style={{ flex: 1, height: '7%' }}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h2>
                    Projetos Pessoais
                </h2>
            </div>
            <Carousel></Carousel>
            <div style={{ flex: 1, height: '7%' }}></div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <section style={{ display: "flex", width: '60%', justifyContent: "start" }}><a>
                    Sobre Mim</a></section>
            </div>
            <div style={{ display: "flex", width: '100%', height: '40%', justifyContent: "center", alignItems: "center", gap: '20px', paddingTop: '20px' }}>
                <img src={Sla} alt="" className="entrando_esquerda" style={{ width: '30%', height: '100%', borderRadius: 25 }} />
                <section className="entrando_direita" style={{ display: "flex", width: '30%', height: '100%', alignItems: 'start' }}>
                    <p>
                        Olá, me apresentando novamente, sou Iago Vinícius Braga França, estudante de Engenharia da Computação na UFU e ex-coordenador de Projetos da empresa júnior Conselt.
                        <br></br>
                        Atualmente busco uma forma de me desenvolver profissionalmente nas áreas de desenvolvimento web e software e continuar melhorando para um dia conseguir coordenar essa área e ao mesmo tempo ser alguém que se torne referência no meio onde estou.
                    </p>

                </section>
            </div>
            <div style={{ flex: 1, height: '7%' }}></div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%', alignContent: "flex-start" }}>
                <hr style={{ width: '70%' }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%', alignContent: "flex-start", paddingBottom: '100px' }}>
                <section style={{ width: '70%' }} >
                    <a href={Curriculo} target="_blank"> @aaaaasd</a>
                </section>
            </div>
        </div>
    )
}
export default Home