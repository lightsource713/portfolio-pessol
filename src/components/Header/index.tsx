import './Header.css'
// import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
// import { DarkMode } from '../DarkMode'

export default function Header() {
    
    return (
        <>
            <header className='header'>
                <NavLink to="/" className="titleHeader">
                    <span id='secondA'>A</span>nabe
                </NavLink>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    {/* <Link to="skills">Skills</Link> */}
                    <NavLink to="/about/contact">Contact</NavLink>
                    {/* <DarkMode /> */}
                </div>
            </header>
        </>
    )
}