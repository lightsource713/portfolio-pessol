import './MyRoutine.css'
import useMediaQuery from '@mui/material/useMediaQuery'

const MediaQueryComponent = () => {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const isMobile = useMediaQuery('(max-width:800px)');

    return { isDesktop, isMobile };
};


export default function MyRoutine() {
    const { isDesktop, isMobile } = MediaQueryComponent();

    return (
        <>
            <div className="section routine">
                <img src="./bnc-terno.png" className="sectionImg imgRout" />
                {isDesktop && (
                    <>

                        <table className="table form">
                            <tr>
                                <th>Horário</th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                            </tr>
                            <tr>
                                <td>7:40</td>
                                <td>Desenvolvimento de Sistemas</td>
                                <td>Ciências Humanas</td>
                                <td>Linguagens</td>
                                <td>Banco de Dados</td>
                                <td>Desenvolvimento de Sistemas</td>
                            </tr>
                            <tr>
                                <td>10:10</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>10:30</td>
                                <td>Modelagem de Sistemas</td>
                                <td>Ciências da Natureza</td>
                                <td>Programação de Aplicativos</td>
                                <td>Desenvolvimento de Sistemas</td>
                                <td>Matemática</td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Academia</td>
                                <td>Academia</td>
                                <td>Academia</td>
                                <td>Academia</td>
                                <td>Academia</td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>Projetos / Estudo</td>
                                <td>Projetos / Estudo</td>
                                <td>Projetos / Estudo</td>
                                <td>Projetos / Estudo</td>
                                <td>Projetos / Estudo</td>
                            </tr>
                        </table>
                    </>)}
                    {isMobile &&(
                        <>
                        <div className="mobileTable">
                        <h1>Segunda-Feira</h1>

                        <p><span>07:40</span>Desenvolvimento de Sistemas</p>
                        <p><span>10:30</span>Modelagem de Sistemas</p>
                        <p><span>15:00</span>Academia</p>
                        <p><span>18:00</span>Projetos / Estudo</p>

                        <h1>Terça-Feira</h1>
                        <p><span>07:40</span>Ciências Humanas</p>
                        <p><span>10:30</span>Ciências da Natureza</p>
                        <p><span>15:00</span>Academia</p>
                        <p><span>18:00</span>Projetos / Estudo</p>
                        
                        <h1>Quarta-Feira</h1>
                        <p><span>07:40</span>Linguagens</p>
                        <p><span>10:30</span>Programação de Aplicativos</p>
                        <p><span>15:00</span>Academia</p>
                        <p><span>18:00</span>Projetos / Estudo</p>

                        <h1>Quinta-Feira</h1>
                        <p><span>07:40</span>Banco de Dados</p>
                        <p><span>10:30</span>Desenvolvimento de Sistemas</p>
                        <p><span>15:00</span>Academia</p>
                        <p><span>18:00</span>Projetos / Estudo</p>
                        
                        <h1>Sexta-Feira</h1>
                        <p><span>07:40</span>Desenvolvimento de Sistemas</p>
                        <p><span>10:30</span>Matemática</p>
                        <p><span>15:00</span>Academia</p>
                        <p><span>18:00</span>Projetos / Estudo</p>

                        </div>
                        </>
                    )}
            </div>
        </>
    )
}