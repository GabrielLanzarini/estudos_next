import Link from "next/link"

export default function ClientComponent({ urlFinal }) {
    return (
        <Link href={{ pathname: "/perfil/[page]", query: { page: urlFinal } }}>
            <div className=" text-black bg-white p-10 rounded-xl">
                <h1>Page of {urlFinal}</h1>
            </div>
        </Link>
    )
}
