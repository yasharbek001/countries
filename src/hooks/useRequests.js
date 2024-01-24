// import { useEffect, useState } from "react"
// import { request } from "../services/httpRequests"

import { useState, useEffect } from "react"

const BaseUrl = "https://restcountries.com/v3.1"


export const useRequest = (addUrl) => {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch(BaseUrl + addUrl)
      .then(resp => resp.json())
      .then(data => {
      if (data.length) setData(data)
    })
  }, [addUrl])

  return data

}

// export const useRequests = (AddUrl) => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch(request + AddUrl)
//             .then(resp => resp.json())
//             .then(data => {
//                 if (data.length) setData(data)
//             })
//     }, [AddUrl])

//     return (
//         {data}
//     )
// }

// import { useEffect, useState } from "react"
// import request from ".././services/httpRequests/index"

// export const useRequest = (AddUrl) => {
//   const [data, setData] = useState([])

//   useEffect(() => {
    
//     request.get(AddUrl).then(data => setData(data.data))

//   }, [AddUrl])

//   return {
//     data
//   }
// }