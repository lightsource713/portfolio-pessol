import './About.css'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe';
import MySkills from '../../components/MySkills';

function About() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="tag">
                    <p>About</p>
                </div>
                <p className='title'>{"<AboutMe />"}</p>
            </div>
            <AboutMe />
            <div className="container">
            <p className='title'>{"<MySkills />"}</p>
            </div>
            <MySkills />
        </>
    )
}

export default About;