import './Tech.css'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
// import { NavLink } from 'react-router-dom'
import { XP, SA, POO, VM, APIGit, RetakeBD, Print, CanvaAPI } from '../School/iframes'
import ScrollToTop from '../../components/Scroll'

export function Tech() {
    scrollTo(0, 0)
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
                <h1 className='title'>Análise e Desenvolvimento<span> de Sistemas</span></h1>
                <div className="sectionWorks Tech">
                    <div className="schoolSbj">
                        {/* <img src="../../../../pbc.png" className="sbjImg" id='pbc' /> */}
                        <h2 className='subtitle'>
                            Modelagem e programação de aplicativos <br />
                        </h2>
                            <XP />
                            {/* <span>Processo de Desenvolvimento de Software</span> */}
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                        Diagramas e telas da Situação de Aprendizaem
                        </h2>
                            <SA />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                        Teoria da POO
                        </h2>
                            <POO />
                    </div>
                    {/* Charles */}
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Implantação e Manutenção de Sistemas <br />
                        </h2>
                            <VM />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                        Atividade Prática
                        </h2>
                            <Print />
                    </div>

                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Testes e Banco de Dados <br />
                        </h2>
                            {/* <span>APIGitHub</span> */}
                            <APIGit />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Desenvolvimento, Testes e Banco de Dados <br />
                        </h2>
                            <CanvaAPI />
                    </div>
                    {/* <div className="schoolSbj">
                        <h2 className='subtitle'>
                        </h2>
                            <FisicBD />
                            <span>Modelo Físico Banco de Dados</span>
                    </div> */}

                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                        Retomada Banco de Dados
                        </h2>
                            <RetakeBD />
                    </div>

                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
