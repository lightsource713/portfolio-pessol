import { useEffect, useState } from 'react';
// ;import { useTheme } from '../../hook/useTheme';

import './styles.css'

export default function MyStats() {

    interface UserData {
        login: string;
        name: string | null;
        public_repos: number;
        followers: number;
        following: number;
        avatar_url: string;
    }

    const [nomeUsuario] = useState<string>("anabmartins");
    const [userData, setUserData] = useState<UserData | null>(null);
    // const [theme] = useTheme('dark');
    const themeForUrl = 
    // theme === 'light' ? 
    'default'
    //  : theme;
    const statsUrl = `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${nomeUsuario}&theme=${themeForUrl}`;

    const mostCommitLanguageUrl = `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${nomeUsuario}&theme=${themeForUrl}&exclude=HTML,CSS,Portugol`;

    useEffect(() => {
        if (nomeUsuario) {
            fetch(`https://api.github.com/users/${nomeUsuario}`)
                .then((response) => response.json())
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.log('Ocorreu um erro na solicitação: ' + error);
                });
        }
    }, [nomeUsuario]);

    return (
        <>
            <div className="section statSection">
                <img src="./bncpoint.png" className="statsImg" />
                {userData && (
                    <>
                        <a href="https://github.com/anabmartins" target='_blank'>
                            <img src={userData.avatar_url} className='gitImg' />
                        </a>
                        <p className='title'>GitHub Stats</p>
                        <div className="userData">
                            <p><strong>Nome:</strong> {userData.name}</p>
                            <p><strong>Nickname:</strong> {userData.login}</p>
                            <p> <strong>Repositórios:</strong> {userData.public_repos}</p>
                            <p> <strong>Seguidores:</strong> {userData.followers}</p>
                            <p> <strong>Seguindo:</strong> {userData.following}</p>
                        </div>
                        <div className="gitstats">
                            <img src={statsUrl} alt="" />
                            <img src={mostCommitLanguageUrl} />
                        </div>
                    </>
                )}
                {/* <p className='title'>TryHackMe</p>
                <a href="https://tryhackme.com/p/BeatrMart" target='_blank'>
                <img src="https://tryhackme-badges.s3.amazonaws.com/BeatrMart.png" alt="TryHackMe"/>
                </a> */}
            </div>
        </>
    )
}