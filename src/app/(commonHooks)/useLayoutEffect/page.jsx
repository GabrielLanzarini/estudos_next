"use client"

import { useLayoutEffect, useState } from "react"

export default function useLayoutEffectPage() {
    const [value, setValue] = useState("")
    const [nomes, setNomes] = useState([])

    // Use when there is a component that will appear on the screen
    useLayoutEffect(() => {
        console.log(nomes)
    }, [nomes])

    return (
        <div>
            <h1>Use LayoutEffect</h1>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                <button onClick={() => setNomes([...nomes, value])}>CLICK HERE</button>
            </div>
        </div>
    )
}
