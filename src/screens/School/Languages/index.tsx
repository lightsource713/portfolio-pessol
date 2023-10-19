import { Footer } from '../../../components/Footer'
import { Text, Magazine, Modernism } from '../Math/iframes'
import Header from '../../../components/Header'
import '../School.css'

export function Languages() {
    return (
        <>
            <Header />
            <div className="containerSchool">
                <h1 className='title'>Linguagens <span> e suas Tecnologias</span></h1>
                <div className="section schoolSbj">
                    <img src="../../../../bnc-book2.png" className="sectionImg" id='lng' />
                    <h2 className='subtitle'>
                    Resenhas Críticas
                    <Text />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                    Modernismo: Sala de aula invertida
                    <Modernism />
                    </h2>
                </div>
                <div className="section schoolSbj">
                    <h2 className='subtitle'>
                    Revista Literária: Obras da UFSC 2024
                    <Magazine />
                    </h2>
                </div>
            </div>
            <Footer />
        </>
    )
}