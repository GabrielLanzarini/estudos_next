"use client"

import { useState, useDeferredValue } from "react"

export default function UseDeferredValuePage() {
    const [contador, setContador] = useState(0)
    const valorAtrasado = useDeferredValue(contador)

    const incrementar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <p>Contador: {valorAtrasado}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}
