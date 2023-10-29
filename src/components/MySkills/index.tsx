import './styles.css'
import { useState } from 'react'

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
                <img src="./boneco-cruzado.png" className="ImgSkills" />
                <div className="skillsTag form" onClick={toggleVisibility}>
                    <p>Soft Skills</p>
                    <img src="./arrow-down.svg" className='icon' />
                </div>
                {visibleSoft && (
                    <div className="content">
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
                     <span>JavaScript</span>
                     <div className="bar">
                         <div className="progress js"></div>
                     </div>
                     <span>
                         TypeScript</span>
                     <div className="bar">
                         <div className="progress ts"></div>
                     </div>
                     <span>HTML</span>
                     <div className="bar">
                         <div className="progress html"></div>
                     </div>
                     <span>CSS</span>
                     <div className="bar">
                         <div className="progress css"></div>
                     </div>
                     <span>Java</span>
                     <div className="bar">
                         <div className="progress java"></div>
                     </div>
                     <span>React</span>
                     <div className="bar">
                         <div className="progress react"></div>
                     </div>
                 </div>
                )}
            </div>
        </>
    )
}