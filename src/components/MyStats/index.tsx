import { useEffect, useState } from 'react';
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
                        <img src={userData.avatar_url} className='gitImg'/>
                    </a>
                    <p className='title'>GitHub Stats</p>
                        <div className="userData">
                            <p><strong>Nome:</strong> {userData.name}</p>
                            <p><strong>Nickname:</strong> {userData.login}</p>
                            <p> <strong>Repositórios:</strong> {userData.public_repos}</p>
                            <p> <strong>Seguidores:</strong> {userData.followers}</p>
                            <p> <strong>Seguindo:</strong> {userData.following}</p>
                        </div>
                    </>
                )}
                <div className="gitstats">
                <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=anabmartins&theme=default" alt="" />
                <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=anabmartins&theme=default&exclude=HTML,CSS,Portugol"/>
                </div>
                {/* <p className='title'>TryHackMe</p>
                <a href="https://tryhackme.com/p/BeatrMart" target='_blank'>
                <img src="https://tryhackme-badges.s3.amazonaws.com/BeatrMart.png" alt="TryHackMe"/>
                </a> */}
            </div>
        </>
    )
}