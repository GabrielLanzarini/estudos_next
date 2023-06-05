import { useContext } from "react"

export default function useContextPage() {
    const value = useContext()

    return (
        <div>
            <h1>Use Context</h1>
            <div>
                <h2></h2>
            </div>
        </div>
    )
}
