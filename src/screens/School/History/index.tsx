import { Footer } from '../../../components/Footer'
import Header from '../../../components/Header'
import '../School.css'

export function History(){
    return (
        <>
        <Header />
        <div className="containerSchool">
            <h1 className='title'>Ciências Humanas <span> e suas Tecnologias</span></h1>
            <div className="section schoolSbj">
                <img src="../../../../bnc-thinking.png" className="sectionImg"/>
            </div>
        </div>
        <Footer />
        </>
    )
}