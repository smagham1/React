import React, { useState, useEffect } from 'react'
import axios from 'axios'


function ApiCall2() {

    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1/')
        .then(res => setData(res.data))
    }, [])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/2/')
        .then(res => setData2(res.data))
    }, [])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/3/')
        .then(res => setData3(res.data))
    }, [])

    return (
        <div>
        <div>
            <p>Name: {data.name} <br /> 
            Height: {data.height}</p>

        </div>
        <div>
            <p>Name: {data2.name} <br /> 
            Height: {data2.height}</p>

        </div>
        <div>
            <p>Name: {data3.name} <br /> 
            Height: {data3.height}</p>

        </div>
        </div>
    )
}

export default ApiCall2
