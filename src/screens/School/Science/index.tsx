import { Footer } from '../../../components/Footer'
import Header from '../../../components/Header'
import ScrollToTop from '../../../components/Scroll'
import '../School.css'
import { Pratice, Folder, MindMap } from '../iframes'

export function Science() {
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Ciências da Natureza<span> e suas Tecnologias</span></h1>
                <div className="section schoolSbj">
                    <img src="../../../../bnc-science.png" className="sectionImg sci" />
                    <h2 className='subtitle'>
                        Prática - Experimento Eletroimã
                        <Pratice />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Folder - Como diminuir o lixo
                        <Folder />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        MindMap - Mapa Citologia
                        <MindMap />
                    </h2>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}