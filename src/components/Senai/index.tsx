import { NavLink } from 'react-router-dom'
import './Senai.css'
// import Link from 'react'
export default function Senai() {
    return (
        <>
            <div className="section works">
                <img src="./bnc-like.png" className="sectionImg" />
                <div className="school">
                    <Math />
                    <Languages />
                    <History />
                    <Nature />
                </div>
            </div>
        </>
    )
}
export function Math() {
    return (
        <>
            <NavLink to="/school/math">
                <div className="card form">
                    <img src="./bnc-math.png" className="cardImage" />
                    <p>
                        Matemática e suas Tecnologias
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export function Languages() {
    return (
        <>
            <NavLink to="/school/languages">
                <div className="card form">
                    <img src="./bnc-book2.png" className="cardImage" />
                    <p>
                        Linguagens e suas Tecnologias
                    </p>
                </div>
            </NavLink>
        </>
    )
}


export function History() {
    return (
        <>
            <NavLink to="/school/history">
                <div className="card form">
                    <img src="./bnc-thinking.png" className="cardImage" />
                    <p>

                        Ciências Humanas e suas Tecnologias
                    </p>
                </div>
            </NavLink>
        </>
    )
}


export function Nature() {
    return (
        <>
            <NavLink to="/school/science">
                <div className="card form">
                    <img src="./bnc-science.png" className="cardImage" />
                    <p>
                        Ciências da Natureza e suas Tecnologias
                    </p>
                </div>
            </NavLink>
        </>
    )
}



