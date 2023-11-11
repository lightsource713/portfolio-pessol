import './styles.css'
import { useState } from 'react'
import { Sentences } from '../../assets/data/sentences'
//icons
import html from "../../assets/icons/html.svg"
import css from "../../assets/icons/css.svg"
import bootstrap from "../../assets/icons/bootstrap.svg"
import figma from "../../assets/icons/figma.svg"
import node from "../../assets/icons/nodejs.svg"
import vercel from "../../assets/icons/vercel.svg"
import next from "../../assets/icons/next.svg"
import linux from "../../assets/icons/linux.svg"
import windows from "../../assets/icons/windows.svg"
import js from "../../assets/icons/javascript.svg"
import vite from "../../assets/icons/Group-1.svg"
import ts from "../../assets/icons/Group.svg"
import java from "../../assets/icons/java.svg"
import git from "../../assets/icons/git.svg"
import spring from "../../assets/icons/spring.svg"
import mui from "../../assets/icons/mui.svg"
import react from "../../assets/icons/react.svg"
import pgadmin from "../../assets/icons/pgsql.svg"
import tailwind from "../../assets/icons/tailwind.svg"

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { ProjectsModal } from '../Modal'

export default function MySkills() {

    const [visibleSoft, setVisibleSoft] = useState(false);
    const [visibleHard, setVisibleHard] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);

    const toggleVisibility = () => {
        setVisibleSoft(!visibleSoft);
        setVisibleHard(false);
    };

    const toggleVisibilityHard = () => {
        setVisibleHard(!visibleHard);
        setVisibleSoft(false);
    };

    const toggleVisibilityModal = () => {
        if (!visibleModal) { setVisibleModal(true); }
        else setVisibleModal(false)
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
                    <KeyboardArrowDownRoundedIcon className='icon' />
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
                    <KeyboardArrowDownRoundedIcon className='icon' />
                </div>
                {visibleHard && (
                    <div className="content">
                        <div className="iconsHard">
                            <img src={js} />
                            <img src={ts} />
                            <img src={react} />
                            <img src={css} />
                            <img src={html} />
                            <img src={git} />
                            <img src={node} />
                            <img src={figma} />
                            <img src={bootstrap} />
                            <img src={tailwind} />
                            <img src={mui} />
                            <img src={spring} />
                            <img src={java} />
                            <img src={linux} />
                            <img src={windows} />
                            <img src={pgadmin} />
                            <img src={vite} />
                            <img src={next} />
                            <img src={vercel} />
                        </div>
                        <div onClick={toggleVisibilityModal} className='btn'>
                            <p>Ver projetos</p>
                        </div>
                        {visibleModal && (
                            <div className="modalContainer">
                                    <CloseIcon 
                                    onClick={toggleVisibilityModal}
                                    className='close' 
                                    color='inherit' />
                                <ProjectsModal />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}