import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='header'>
                <a href="/">
                    <h1>Anabe</h1>
                </a>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/about">Skills</Link>
                    <Link to="/about/contact">Contact</Link>
                </div>
            </header>
        </>
    )
}