"use client"

import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action) {
        case "plus":
            return { width: state.width + 15 }
        case "minus":
            return { width: Math.max(state.width - 15, 2) }
        default:
            throw new Error("what's going on?")
    }
}

export default function useReducerPage() {
    const [state, dispatch] = useReducer(reducer, { width: 2 })

    return (
        <div>
            <h1>{state.width}</h1>
            <button onClick={() => dispatch("plus")}>MAIS</button>
            <button onClick={() => dispatch("minus")}>MENOS</button>
        </div>
    )
}
