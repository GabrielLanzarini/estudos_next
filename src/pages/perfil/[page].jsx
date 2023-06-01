import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function teste() {
    const queryset = useRouter()
    const [query, setQuery] = useState(null)

    useEffect(() => {
        setQuery(queryset.query.page)
    }, [])

    return (
        <div>
            <h1>awuidhawuiod</h1>
            <h2>Você está na página de {query}</h2>
        </div>
    )
}
