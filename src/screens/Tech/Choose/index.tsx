import './Tech.css'
import Header from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { TS, IC, SiteIC } from '../../School/iframes'
import ScrollToTop from '../../../components/Scroll'

export function Choose() {
    return (
        <>
            <Header />

            <div className="containerSchool">
                <h1 className='title'>Projetos Extra</h1>
                <div className="section schoolSbj">
                    <img src="../../../../pbc.png" className="sectionImg" id='pbc' />
                    <h2 className='subtitle'>
                        Artigo Científico <br />
                        <span>Desenvolvimento de uma plataforma calculadora para análise dos níveis de ruído rodoviário</span>
                        <IC />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Site Iniciação Científica
                        <SiteIC />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Relatório TypeScript
                        <TS />
                    </h2>
                </div>
                {/* <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Vídeo sobre Redação
                        <Video />
                    </h2>
                </div> */}


            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
