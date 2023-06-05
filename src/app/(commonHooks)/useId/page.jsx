"use client"

import { useId } from "react"

export default function UseIdPage() {
    const id = useId()
    const id2 = useId()
    const id3 = useId()

    return (
        <div>
            <button
                onClick={() => {
                    console.log(id)
                    console.log(id2)
                    console.log(id3)
                }}
            >
                CLICK HERE
            </button>
        </div>
    )
}
