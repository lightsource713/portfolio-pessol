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
                <div className="sectionWorks">
                    
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Folder - Como diminuir o lixo
                        </h2>
                        <Folder />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            MindMap - Mapa Citologia
                        </h2>
                        <MindMap />
                    </div>
                    <div className="schoolSbj">
        
                        <h2 className='subtitle'>
                            Prática - Experimento Eletroimã
                        </h2>
                        <Pratice />
                    </div>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}