import './Senai.css'
// import Link from 'react'
export default function Senai() {
    return (
        <>
            <div className="section works">
                <img src="./bnc-lupa.png" className="sectionImg" />
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
            <div className="card">
                <a href="/school/math">
                <img src="./bnc-math.png" className="cardImage" />
                <p>
                    Matemática e suas Tecnologias
                </p>
                </a>
            </div>
        </>
    )
}

export function Languages() {
    return (
        <>
            <div className="card">
                <img src="./bnc-book.png" className="cardImage" />
                <p>
                Linguagens e suas Tecnologias
                </p>
            </div>
        </>
    )
}


export function History() {
    return (
        <>
            <div className="card">
                <img src="./bnc-thinking.png" className="cardImage" />
                <p>

                Ciências Humanas e suas Tecnologias
                </p>
            </div>
        </>
    )
}


export function Nature() {
    return (
        <>
            <div className="card">
                <img src="./bnc-science.png" className="cardImage" />
                <p>
                    Ciências da Natureza e suas Tecnologias
                    </p>
            </div>
        </>
    )
}



