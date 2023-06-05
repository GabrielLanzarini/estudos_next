"use client"

import { useState } from "react"

export default function useStatePage() {
    const [object, setObject] = useState({ name: "Gabriel", age: 13 })

    const update = () => setObject({ ...object, name: "Jorge" })
    // const update = () => setObject({ name: "Jorge" }) // [X] Wrong

    return (
        <div>
            <p>{object.name}</p>
            <p>{object.age}</p>
            <button onClick={update}>UPDATE</button>
        </div>
    )
}
