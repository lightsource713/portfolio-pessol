import './Tech.css'
import Header from '../../../components/Header'
import { Footer } from '../../../components/Footer'
// import { NavLink } from 'react-router-dom'
import { XP, SA, POO, VM, APIGit, FisicBD, RetakeBD, Print, CanvaAPI } from '../../School/iframes'
import ScrollToTop from '../../../components/Scroll'

export function Choose() {
    return (
        <>
            <Header />

            {/* <div className="containerTech"> */}
            {/* <NavLink to="/">
                    <h1 className="titleTech">Técnico em Análise e Desenvolvimento de Sistemas</h1>
                </NavLink>
                <div className="school">
                    <div className="cardtec form">
                        <p className='subtitle'>Modelagem de Sistemas e programação aplicativos</p>
                    </div>
                    <div className="cardtec form">
                        <p className='subtitle'>Implantação e Manutenção de Sistemas</p>
                    </div>
                    <div className="cardtec form">
                        <p className='subtitle'>Desenvolvimento de Sistemas</p>
                    </div>
                    <div className="cardtec form">
                        <p className='subtitle'>Banco de Dados</p>
                    </div>
            </div>|
                </div> */}
            <div className="containerSchool">
                <h1 className='title'>Técnico em Análise e Desenvolvimento de Sistemas</h1>
                <div className="section schoolSbj">
                    <img src="../../../../pbc.png" className="sectionImg" id='pbc' />
                    <h2 className='subtitle'>
                        Modelagem e programação de aplicativos <br />
                        <span>
                            Processo de Desenvolvimento de Software
                        </span>
                        <XP />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        <span>
                            Diagramas e telas da Situação de Aprendizaem
                        </span>
                        <SA />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        <span>
                            Teoria da POO
                        </span>
                        <POO />
                    </h2>
                </div>
                {/* Charles */}
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Implantação e Manutenção de Sistemas <br />
                        <span>
                            Pesquisa de Virtualizadores
                        </span>
                        <VM />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        <span>Atividade Prática</span>
                        <Print />
                    </h2>
                </div>

                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Desenvolvimento, Testes e Banco de Dados <br />
                        <span>APIGitHub</span>
                        <APIGit />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Desenvolvimento, Testes e Banco de Dados <br />
                        <span>APIGitHub</span>
                        <CanvaAPI />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        <span>Modelo Físico Banco de Dados</span>
                        <FisicBD />
                    </h2>
                </div>

                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        <span>Retomada Banco de Dados</span>
                        <RetakeBD />
                    </h2>
                </div>

            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
