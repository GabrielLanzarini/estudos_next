"use client"

import { useRef } from "react"

export default function useRefPage() {
    const referenceTitle = useRef(null)

    const click = () => {
        referenceTitle.current.value = "You made that with useRef "
    }

    return (
        <div>
            <h1>Use Ref</h1>
            <div className="flex flex-col">
                <input ref={referenceTitle} />
                <button onClick={click} className="bg-red-200">
                    CLICK HERE
                </button>
            </div>
        </div>
    )
}
