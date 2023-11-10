import './About.css'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe';
import MySkills from '../../components/MySkills';
import MyRoutine from '../../components/MyRoutine';
import Senai from '../../components/Senai';
import ScrollToTop from '../../components/Scroll';
import MyStats from '../../components/MyStats';
import { Footer } from '../../components/Footer';
import { TechWorks } from '../../components/TechWorks';
import { Welcome } from '../../components/Welcome';

export function About() {

    return (
        <>
            <Header />

            <div className="container">
            <p className='title elementH'>{"<Welcome />"}</p>
            <Welcome />
                <p className='title elementH' id="about">{"<AboutMe />"}</p>
            </div>
            <AboutMe />
            <div className="container" id='skills'>
                <p className='title elementH'>{"<MySkills />"}</p>
            </div>
            <MySkills />
            <div className="container">
                <p className='title elementH'>{"<MyStats />"}</p>
            </div>
            <MyStats />
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
            <TechWorks />
            <ScrollToTop />
            <Footer />
        </>
    )
}
