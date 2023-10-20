import { Footer } from '../../../components/Footer'
import { OlgaFilm, SecXX, Vargas } from '../iframes'
import Header from '../../../components/Header'
import '../School.css'
import ScrollToTop from '../../../components/Scroll'

export function History() {
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Ciências Humanas <span> e suas Tecnologias</span></h1>
                <div className="section schoolSbj">
                    <img src="../../../../bnc-thinking.png" className="sectionImg" id='his' />
                    <h2 className='subtitle'>
                        Infográfico Era Vargas
                        <Vargas />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Filme Totalitarismo
                        <OlgaFilm />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                        Os meios de comunicação na virada do século XX
                        <SecXX />
                    </h2>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}