import './Header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <a href="/">
                    <h1>Anabe</h1>
                </a>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="/contact">Contact</a>
                </div>
            </header>
        </>
    )
}