import axios from "axios"

export async function getServerSideProps() {
    // Simule uma chamada a uma API ou qualquer outra lógica de obtenção de dados
    const data = await (await axios("https://viacep.com.br/ws/84640000/json/")).data

    // Retorne os dados como propriedades para a página
    return {
        props: {
            data,
        },
    }
}

export default function SSRTest({ data }) {
    // Renderize os dados na página
    return (
        <div>
            <h1>Server-Side Rendering (SSR) Test</h1>
            <p>Data: {data.cep}</p>
            <button></button>
        </div>
    )
}
