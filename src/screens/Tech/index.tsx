import './Tech.css'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
// import { NavLink } from 'react-router-dom'
import { XP } from '../School/iframes'

export function Tech() {
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
                        Modelagem e programação de aplicativos <br />
                        <span>
                        Diagrama de Casos de Uso da SA
                        </span>
                        <XP />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Modelagem e programação de aplicativos <br />
                        <span>
                        Diagrama de Atividades da SA
                        </span>
                        <XP />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Modelagem e programação de aplicativos <br />
                        <span>
                        Diagrama de Classe da SA
                        </span>
                        <XP />
                    </h2>
                </div>
            </div>
            <Footer />
        </>
    )
}
