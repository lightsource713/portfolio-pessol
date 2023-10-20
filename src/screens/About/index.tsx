import './About.css'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe';
import MySkills from '../../components/MySkills';
import MyRoutine from '../../components/MyRoutine';
import Senai from '../../components/Senai';
import ScrollToTop from '../../components/Scroll';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
            <Header />
            <div className="container" id='aboutme'>
                {/* <div className="tag">
                    <p>About</p>
                </div> */}
                <p className='title elementH'>{"<AboutMe />"}</p>
            </div>
            <AboutMe />
            <div className="container containerSkills" id='skills'>
                <p className='title elementH'>{"<MySkills />"}</p>
            </div>
            <MySkills />
            <div className="container containerRoutine">
                <p className='title elementH'>{"<MyRoutine />"}</p>
            </div>
            <MyRoutine />
            <div className="container">
                <p className='title elementH'>{"<SchoolWorks />"}</p>
            </div>
            <Senai />
            <div className="container">
                <p className='title elementH'>{"<TechWorks />"}</p>
            </div>
            <div className="section">
                <img src="./boneco-mao1.png" className="sectionImg" />
                <Link to="/school/technician">
                    <div className="card form">
                        <img src="./pbc.png" className="cardImage" />
                        <p style={{ color: "black" }}>
                            Projetos do tecnico de 2023
                        </p>
                    </div>
                </Link>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    )
}
