"use client"

import { useEffect, useState } from "react"

export default function useStatePage() {
    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)

    useEffect(() => {
        console.log("contador 1")
    }, [contador])

    useEffect(() => {
        console.log("contador 2")
    }, [contador2])

    const updateContador = () => setContador(contador + 1)
    const updateContador2 = () => setContador2(contador2 + 1)

    return (
        <div>
            <button onClick={updateContador}>UPDATE</button>
            <button onClick={updateContador2}>UPDATE 2</button>
        </div>
    )
}
