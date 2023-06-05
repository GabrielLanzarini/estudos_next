"use client"

import { useCallback, useState } from "react"

// Used to save the function in cache improving the component performance
export default function useCallbackPage() {
    const [number, setNumber] = useState(0)

    const increment = useCallback(() => {
        setNumber((n) => n + 1)
    }, [])

    return (
        <div>
            <h1>Use Callback</h1>
            <h1>{number}</h1>
            <div>
                <button onClick={increment}>AUMENTA</button>
            </div>
        </div>
    )
}

// Study more later
