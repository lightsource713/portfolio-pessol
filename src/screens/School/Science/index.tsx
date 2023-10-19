import { Footer } from '../../../components/Footer'
import Header from '../../../components/Header'
import '../School.css'

export function Science(){
    return (
        <>
          <Header />
        <div className="containerSchool">
            <h1 className='title'>Ciências da Natureza<span> e suas Tecnologias</span></h1>
            <div className="section schoolSbj">
                <img src="../../../../bnc-science.png" className="sectionImg sci"/>
            </div>
        </div>
        <Footer />
        </>
    )
}