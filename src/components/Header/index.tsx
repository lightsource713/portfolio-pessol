import './Header.css'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='header'>
                <a href="/">
                    <h1><span id='secondA'>A</span>nabe</h1>
                </a>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <Link to="skills">Skills</Link>
                    <NavLink to="/about/contact">Contact</NavLink>
                </div>
            </header>
        </>
    )
}