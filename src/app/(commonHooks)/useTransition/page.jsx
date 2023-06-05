"use client"

import { useState, useTransition } from "react"

// Improve the UX with assynchronous functions
export default function useRefPage() {
    const [isPending, startTransition] = useTransition()
    const [tab, setTab] = useState("about")

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }

    return (
        <div>
            <h1>Use Transition</h1>
            <div className="flex flex-col">
                <h1>{tab}</h1>
                <button onClick={() => selectTab("aaaaa")}>CLICK HERE</button>
            </div>
        </div>
    )
}
