import ClientComponent from "@/components/ClienteComponent"
import { useEffect, useState } from "react"
export default function index() {
    const [components, setComponents] = useState([])
    const [nomes, setNomes] = useState(["gabriel", "eduardo", "felipe", "lucas"])

    function renderizaComponents() {
        const tempComponent = []
        for (let i = 0; i < nomes.length; i++) {
            tempComponent.push(<ClientComponent key={i} urlFinal={nomes[i]} />)
        }
        setComponents(tempComponent)
    }

    useEffect(() => {
        renderizaComponents()
    }, [])

    return (
        <div className="h-screen text-white flex flex-col justify-center items-center w-screen h-screen bg-[#2f2f2f] text-white">
            <h1 className="text-7xl mb-10 font-bold">Client Rendering</h1>
            <div className="flex gap-5 flex-wrap">
                {components.map((a) => {
                    return a
                })}
            </div>
        </div>
    )
}
