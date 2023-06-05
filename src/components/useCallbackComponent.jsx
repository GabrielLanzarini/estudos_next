export default function useCallbackComponent() {
    const memoFunction = useCallback(() => {
        console.log("usando o callback")
    })
    return (
        <div>
            <button></button>
        </div>
    )
}

// Study more later
