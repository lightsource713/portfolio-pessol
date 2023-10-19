import './MyRoutine.css'


export default function MyRoutine() {
    return (
        <>
            <div className="section routine">
                <img src="./bnc-terno.png" className="sectionImg"/>
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
            </div>
        </>
    )
}