import { Link } from "react-router-dom";

export function TechWorks() {
    return (
        <>
            <div className="section sectionTech">
                <img src="./boneco-mao1.png" className="sectionImg" />
                <Link to="/school/technician">
                    <div className="card form">
                        <img src="./pbc.png" className="cardImage" />
                        <p style={{ color: "black" }}>
                            Projetos do Tecnico
                        </p>
                    </div>
                </Link>
                <Link to="/school/technician/choose">
                    <div className="card form">
                        <img src="./pbc.png" className="cardImage" />
                        <p style={{ color: "black" }}>
                            Projetos de Escolha
                        </p>
                    </div>
                </Link>

            </div>

        </>

    )
}