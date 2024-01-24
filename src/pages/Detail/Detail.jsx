import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Country } from "./components/Country/Country"

const DetailUrl = "https://restcountries.com/v3.1"

export const Detail= () => {
    const {name} = useParams()

    const [countryData, setCountryData] = useState([])

    useEffect( () => {
        fetch(DetailUrl + `/name/${name}`)
        .then(res => res.json())
        .then(country => {
            setCountryData(country)
        })
    }, [name])


    return (
        countryData.map((datas => {
            return (
                <Country
                key={datas.idd.suffixes?.[0]}
                flag={datas.flags?.png}
                countryName={datas.name?.common}
                nativeName={datas.name?.nativeName}
                population={datas.population}
                region={datas.region}
                subregion={datas.subregion}
                capital={datas.capital?.[0]}
                tld={datas.tld?.[0]}
                currencies={datas.currencies}
                languages={datas.languages}
                borders={datas.borders}
            />
            )
        }))
    )
}

