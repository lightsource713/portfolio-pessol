import './styles.css'
import { useState } from 'react'
import { Sentences } from '../../assets/data/sentences'

export default function MySkills() {

    const [visibleSoft, setVisibleSoft] = useState(false);
    const [visibleHard, setVisibleHard] = useState(false);


    const toggleVisibility = () => {
        setVisibleSoft(!visibleSoft);
        setVisibleHard(false);
    };

    const toggleVisibilityHard = () => {
        setVisibleHard(!visibleHard);
        setVisibleSoft(false);
    };

    return (
        <>
            <div className="sectionSkills">
                <div className="imgContainer">
                    <img src="./boneco-cruzado.png" className="ImgSkills" />
                    <span className="balaoSkills">
                        {Sentences[5]}
                    </span>
                </div>
                <div className="skillsTag form" onClick={toggleVisibility}>
                    <p>Soft Skills</p>
                    <img src="./arrow-down.svg" className='icon' />
                </div>
                {visibleSoft && (
                    <div className='content'>
                        <span>Comunicação</span>
                        <div className="bar">
                            <div className="progress f"></div>
                        </div>
                        <span>
                            Habilidades de apresentação</span>
                        <div className="bar">
                            <div className="progress s"></div>
                        </div>
                        <span>Organização</span>
                        <div className="bar">
                            <div className="progress t"></div>
                        </div>
                        <span>Criatividade</span>
                        <div className="bar">
                            <div className="progress q"></div>
                        </div>
                    </div>
                )}
                <div className="skillsTag form" onClick={toggleVisibilityHard}>
                    <p>Hard Skills</p>
                    <img src="./arrow-down.svg" className='icon' />
                </div>
                {visibleHard && (
                    <div className="content">
                         <img
  src="https://skillicons.dev/icons?i=html,css,js,ts,nextjs,react,vite,vercel,figma,bootstrap,mui" />
                       <img
  src="https://skillicons.dev/icons?i=nodejs,java,spring,py,mysql,postgres,git,github,linux" />

  <a href="" className='btn'>
                            <p>Ver projetos</p>                        
                        </a>
                    </div>
                )}
                {/* <span id="seta">
                    <img src="./arrow-down.svg" className='icon' />
                     </span> */}
            </div>
        </>
    )
}