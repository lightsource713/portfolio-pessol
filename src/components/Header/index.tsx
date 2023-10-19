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
                    <a href="/about#aboutme">About</a>
                    <a href="/about#skills">Skills</a>
                    <a href="/about/contact">Contact</a>
                </div>
            </header>
        </>
    )
}