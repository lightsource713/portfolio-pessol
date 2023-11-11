import './styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//images
import IC from '../../assets/img/ICwebsite.png'
import CantinaGo from '../../assets/img/CantinaGo.png'
//icons
// import html from "../../assets/icons/html.svg"
// import css from "../../assets/icons/css.svg"
// import bootstrap from "../../assets/icons/bootstrap.svg"
import figma from "../../assets/icons/figma.svg"
// import node from "../../assets/icons/nodejs.svg"
import vercel from "../../assets/icons/vercel.svg"
import next from "../../assets/icons/next.svg"
// import linux from "../../assets/icons/linux.svg"
// import windows from "../../assets/icons/windows.svg"
import js from "../../assets/icons/javascript.svg"
import vite from "../../assets/icons/Group-1.svg"
import ts from "../../assets/icons/Group.svg"
import java from "../../assets/icons/java.svg"
// import git from "../../assets/icons/git.svg"
import spring from "../../assets/icons/spring.svg"
import mui from "../../assets/icons/mui.svg"
import react from "../../assets/icons/react.svg"
import pgadmin from "../../assets/icons/pgsql.svg"

export function ProjectsModal() {
    interface ArrowProps {
        onClick: () => void;
    }

    const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
        <div className="arrow next" onClick={onClick}>
            <img src="./arrow-down.svg" className=' arrow arrowRight' />
        </div>
    );

    const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
        <div className="arrow prev" onClick={onClick}>
            <img src="./arrow-down.svg" className=' arrow arrowLeft' />
        </div>
    );

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={() => { }} />,
        prevArrow: <PrevArrow onClick={() => { }} />,
    };

    return (
        <>
            <div className="slideContainer">
                <Slider {...settings} className='slider'>
                    <div>
                        <div className="slideProj">
                            <p>Iniciação Científica</p>
                           <a href="https://ic-website-2023.vercel.app/" target='_blank' className='linkImg'>
                            <img src={IC} />
                           </a>
                            <div className="iconsHard iconsProj">
                                <img src={figma} />
                                <img src={mui} />
                                <img src={js} />
                                <img src={react} />
                                <img src={next} />
                                <img src={vercel} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideProj">
                            <p>S.A. Cantina</p>
                            <a href="https://github.com/Senai-SC-CTAI/SA_2023_3B_CantinaGo" target='_blank' className='linkImg'>
                            <img src={CantinaGo} />
                           </a>
                            <div className="iconsHard iconsProj">
                                <img src={figma} />
                                <img src={ts} />
                                <img src={react} />
                                <img src={vite} />
                                <img src={pgadmin} />
                                <img src={java} />
                                <img src={spring} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideProj">
                            <p>Website Iniciação Científica</p>
                            <img src={IC} />
                            <div className="iconsHard iconsProj">
                                <img src={figma} />
                                <img src={mui} />
                                <img src={js} />
                                <img src={react} />
                                <img src={next} />
                                <img src={vercel} />
                            </div>
                        </div>
                    </div>
                    <div className='slideProj'>
                        <h3>4</h3>
                    </div>
                    <div className='slideProj'>
                        <h3>5</h3>
                    </div>
                    <div className='slideProj'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    );
}
