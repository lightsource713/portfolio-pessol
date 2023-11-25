import './Tech.css'
import Header from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { TS, IC, SiteIC } from '../../School/iframes'
import ScrollToTop from '../../../components/Scroll'

export function Choose() {
    scrollTo(0, 0)
    return (
        <>
            <Header />

            <div className="containerSchool">
                <h1 className='title'>Projetos de Escolha</h1>
                <div className="sectionWorks Tech">
                    <div className="schoolSbj">
                        {/* <img src="../../../../pbc.png" className="sbjImg" id='pbc' /> */}
                        <h2 className='subtitle'>
                            Artigo Científico <br />
                        </h2>
                        <IC />
                            {/* <span>Desenvolvimento de uma plataforma calculadora para análise dos níveis de ruído rodoviário</span> */}
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Site Iniciação Científica
                        </h2>
                        <SiteIC />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Relatório TypeScript
                        </h2>
                        <TS />
                    </div>
                    {/* <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Vídeo sobre Redação
                        <Video />
                    </h2>
                </div> */}


                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
