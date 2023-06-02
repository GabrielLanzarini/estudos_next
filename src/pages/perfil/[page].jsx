import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function teste() {
    const queryset = useRouter()
    const [query, setQuery] = useState(null)

    useEffect(() => {
        setQuery(queryset.query.page)
    }, [])

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between items-center">
                <h1 className="text-7xl font-bold">PERFIL</h1>
                <h2 className="text-xl">Você está na página de {query}</h2>
            </div>
            <div className="h-screen w-screen bg-red-100 flex justify-center items-center">
                <h1 id="gabriel" className="text-7xl font-bold">
                    SEÇÃO 1
                </h1>
            </div>
            <div className="h-screen w-screen bg-blue-100 flex justify-center items-center">
                <h1 className="text-7xl font-bold">SEÇÃO 2</h1>
            </div>
        </div>
    )
}
