import { Footer } from '../../../components/Footer'
import { Text, Magazine, Modernism } from '../iframes'
import Header from '../../../components/Header'
import '../School.css'
import ScrollToTop from '../../../components/Scroll'

export function Languages() {
    scrollTo(0, 0)
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Linguagens <span> e suas Tecnologias</span></h1>

                <div className="sectionWorks">
                    <div className="schoolSbj">
                        {/* <img src="../../../../bnc-book2.png" className="sectionImg" id='lng' /> */}
                        <h2 className='subtitle'>
                            Resenhas Críticas
                        </h2>
                        <Text />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Modernismo: Sala de aula invertida
                        </h2>
                        <Modernism />
                    </div>
                    <div className="schoolSbj">
                        <h2 className='subtitle'>
                            Revista Literária: Obras da UFSC 2024
                        </h2>
                        <Magazine />
                    </div>
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}