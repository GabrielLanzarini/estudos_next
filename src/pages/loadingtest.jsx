import Loading from "@/components/loading"
import { Suspense, useState, useEffect } from "react"

const fetchData = () => {
    return new Promise((resolve) => {
        // Simula uma chamada assíncrona com um atraso de 2 segundos
        setTimeout(() => {
            resolve("Informações do servidor")
        }, 2000)
    })
}

export default function LoadingTest() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData().then((response) => {
            setData(response)
        })
    }, [])


    // So funciona em ambiente de prod
    return (
        <div className="h-screen flex items-center justify-center">
            <Suspense fallback={<Loading />}>
                <h1>{data}</h1>
            </Suspense>
        </div>
    )
}
