import axios from "axios"
import { useEffect, useState } from "react"

const baseUrl = "https://viacep.com.br/ws/"
export default function cep_search() {
    const [cepvalue, setCepValue] = useState("84640000")
    const [cepInfos, setcepInfos] = useState(undefined)

    const handleClickSearch = async () => {
        setcepInfos((await axios.get(baseUrl + cepvalue + "/json")).data)
        console.log(cepInfos);
    }

    const handleInput = (e) => {
        setCepValue(e.target.value)
    }

    return (
        <div className="h-screen text-white bg-[#2f2f2f] flex flex-col items-center justify-center">
            <h1>Search your cep infos</h1>
            <input className="text-black" value={cepvalue} onChange={handleInput} type="text" />
            <button className="bg-white text-black w-100" onClick={handleClickSearch}>
                Search
            </button>
            <div>
                
            </div>
        </div>
    )
}
