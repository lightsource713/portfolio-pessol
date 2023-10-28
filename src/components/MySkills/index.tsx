import './styles.css'
import { useState } from 'react'

export default function MySkills() {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className="sectionSkills">
                <img src="./boneco-cruzado.png" className="sectionImg ImgSkills" />
                <div className="form skillsTag" onClick={toggleVisibility}>
                    <p>Soft Skills</p>
                    <img src="./arrow-down.svg" className='icon' />
                </div>
                {visible && (
                    <div className="content">
                        <p>Comunicate</p>
                    </div>
                )}
                <div className="form skillsTag">
                <p>Hard Skills</p>
                <img src="./arrow-down.svg" className='icon' />
                </div>
            </div>
        </>
    )
}