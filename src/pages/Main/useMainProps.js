import { useState } from "react"
import { useRequest } from "../../hooks/useRequests"


export const useMainProps = () => {


    const [search, setSearch] = useState("")

    const [select, setSelect] = useState("")

    const addUrl = select ? `/region/${select}`: (search ? `/name/${search}` : "/all")

    const data = useRequest(addUrl)

    const options = [
        {
            value: "",
            label: "Filter by Region",
            id: 1,
            selected: true,
            disabled: true,
        },
        {
            value: "",
            label: "All",
            id: 2,
        },
        {
            value: "Africa",
            label: "Africa",
            id: 3,
        },
        {
            value: "America",
            label: "America",
            id: 4,
        },
        {
            value: "Asia",
            label: "Asia",
            id: 5,
        },
        {
            value: "Europe",
            label: "Europe",
            id: 6,
        },
        {
            value: "Oceania",
            label: "Oceania",
            id: 7,
        },
    ]

    function searchChange(ev) {
        setSearch(ev.target.value)
    }

    function selectChange (e) {
        console.log(e.target)
        setSelect(e.target.value)
    }

    return {
        data,
        options,
        searchChange,
        selectChange,
    }

}