"use client"

import { useEffect, useMemo } from "react"

// Used to save the function result in cache improving the component performance
export default function useMemoPage() {
    const a = 1
    const b = 2

    const soma = useMemo(() => {
        return a + b
    }, [a, b])

    useEffect(() => {
        console.log(soma)
    })

    return (
        <div>
            <h1>Use Memo</h1>
            <div></div>
        </div>
    )
}
