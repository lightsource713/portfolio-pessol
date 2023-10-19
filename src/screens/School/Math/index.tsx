import { Footer } from '../../../components/Footer'
import { ReportagemMtm, AtvFilm } from './iframes'
import Header from '../../../components/Header'
import '../School.css'
import ScrollToTop from '../../../components/Scroll'

export function Math() {
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Matemática <span> e suas Tecnologias</span></h1>
                <div className="section schoolSbj">
                    <img src="../../../../bnc-math.png" className="sectionImg" />
                    <h2 className='subtitle'>
                        Entrevista sobre profissões
                        <ReportagemMtm />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Filme Quebrando a banca
                        <AtvFilm />
                    </h2>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}