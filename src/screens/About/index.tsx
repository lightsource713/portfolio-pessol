import './About.css'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe';
import MySkills from '../../components/MySkills';
import MyRoutine from '../../components/MyRoutine';
import Senai from '../../components/Senai';

export function About() {
    return (
        <>
            <Header />
            <div className="container">
                {/* <div className="tag">
                    <p>About</p>
                </div> */}
                <p className='title'>{"<AboutMe />"}</p>
            </div>
            <AboutMe />
            <div className="container containerSkills">
            <p className='title'>{"<MySkills />"}</p>
            </div>
            <MySkills />
            <div className="container containerRoutine">
            <p className='title'>{"<MyRoutine />"}</p>
            </div>
            <MyRoutine />
            <div className="container containerRoutine">
            <p className='title'>{"<SchoolWorks />"}</p>
            </div>
            <Senai />
        </>
    )
}
