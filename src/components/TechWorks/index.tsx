import { NavLink } from "react-router-dom";
import '../Senai/Senai.css'

export function TechWorks() {
    return (
        <>
            <div className="section sectionTech">
                <img src="./boneco-mao.png" className="sectionImg" />
                <NavLink to="/school/technician">
                    <div className="card form">
                        <img src="./pbc.png" className="cardImage" />
                        <p>
                            Projetos do Tecnico
                        </p>
                    </div>
                </NavLink>
                <NavLink to="/school/technician/choose">
                    <div className="card form">
                        <img src="./pbc.png" className="cardImage" />
                        <p>
                            Projetos de Escolha
                        </p>
                    </div>
                </NavLink>

            </div>

        </>

    )
}