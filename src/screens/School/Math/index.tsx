import '../School.css'
import { Footer } from '../../../components/Footer'
import { ReportagemMtm, AtvFilm } from '../iframes'
import Header from '../../../components/Header'
import ScrollToTop from '../../../components/Scroll'

export function Math() {
    scrollTo(0, 0)
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Matemática <span> e suas Tecnologias</span></h1>
                <div className="sectionWorks">

                    <div className="schoolSbj">
                        {/* <img src="../../../../bnc-math.png" className="sectionImg" /> */}
                        <h2 className='subtitle'>
                            Entrevista sobre profissões
                        </h2>
                        <ReportagemMtm />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Filme Quebrando a banca
                        </h2>
                        <AtvFilm />
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}