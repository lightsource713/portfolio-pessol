import './Contact.css'
import Header from '../../components/Header'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

export function ContactPage() {
    return (
        <>
            <Header />
            <div className="containerContact">
                <h1 className="title">{"<ContactMe />"}</h1>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/anabe-sc/" target="_blank">
                        <LinkedInIcon 
                        sx={{fontSize: 70}}
                        />
                        <span>Linkedin</span>
                    </a>
                    <a href="https://github.com/anabmartins" target="_blank">
                        <GitHubIcon 
                        sx={{fontSize: 70}}
                        />
                        <span>GitHub</span>
                    </a>
                    <a href="https://lattes.cnpq.br/2958320245100870" target="_blank">
                    <BookIcon 
                        sx={{fontSize: 70}}
                        />
                        <span>Lattes</span>
                    </a>
                </div>

                {/* send me a message */}
            </div>
        </>
    )
}
