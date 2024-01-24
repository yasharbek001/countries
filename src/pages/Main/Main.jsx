import style from "./style.module.css"
import Container from "../../components/Container/Container";
import { CountryCard } from "./components/CountryCard/CountryCard";
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
// import { useEffect, useState } from "react";
// import { useRequests } from "../../hooks/useRequests";
import { useMainProps } from "./useMainProps";

// const BaseUrl = "https://restcountries.com/v3.1"

export const  Main = () => {

    const { data, options, searchChange, selectChange} = useMainProps()
    // const [countries, setCountries] = useState([])

    // const [search, setSearch] = useState("")

    // const [select, setSelect] = useState("")

    // const {data} = useRequests('/all')

    // console.log(data)

    // const options = [
    //     {
    //         value: "",
    //         label: "Filter by Region",
    //         id: 1,
    //         selected: true,
    //         disabled: true,
    //     },
    //     {
    //         value: "",
    //         label: "All",
    //         id: 2,
    //     },
    //     {
    //         value: "Africa",
    //         label: "Africa",
    //         id: 3,
    //     },
    //     {
    //         value: "America",
    //         label: "America",
    //         id: 4,
    //     },
    //     {
    //         value: "Asia",
    //         label: "Asia",
    //         id: 5,
    //     },
    //     {
    //         value: "Europe",
    //         label: "Europe",
    //         id: 6,
    //     },
    //     {
    //         value: "Oceania",
    //         label: "Oceania",
    //         id: 7,
    //     },
    // ]

    // function searchChange(ev) {
    //     setSearch(ev.target.value)
    // }

    // function selectChange (e) {
    //     console.log(e.target)
    //     setSelect(e.target.value)
    // }
    
    // // useEffect(() => {
    //     const AddUrl = select ? `/region/${select}`: (search ? `/name/${search}` : "/all")

    //     fetch(BaseUrl + AddUrl)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if (data.length) setCountries(data)
    //         })
    //    }, [select, search])

    return (
       <article className={style.main}>
            <Container>
                <form action="#">
                    <Input onChange={searchChange} name="search" type="search" placeholder="Search for a country…"/>
                    <Select onChange={selectChange} options={options}/>
                </form>
                <div className={style.countries}>
                    {
                        data?.map((countryDatas, index) => {
                            return (
                                <CountryCard 
                                    key={index}
                                    img={countryDatas.flags?.png}
                                    name={countryDatas.name?.common}
                                    population={countryDatas.population}
                                    region={countryDatas.region}
                                    capital={countryDatas.capital?.[0]}
                                    
                                />
                            )
                        })              
                    }
                </div>
            </Container>
       </article>
    )
}
