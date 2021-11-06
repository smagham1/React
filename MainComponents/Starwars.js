import React, { useState, useEffect } from 'react'
import { GiStarfighter } from "react-icons/gi";
import axios from 'axios'


function Starwars() {

    const [data, getData] = useState({})
    const [data1, getData1] = useState({})
    const [data2, getData2] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1/')
        .then(res => getData(res.data))
    }, [])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1/`)
        .then(res => getData2(res.data))
    }, [])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/4/')
        .then(res => getData1(res.data))
    }, [])

    return (
        <div className='starwars'>
            <GiStarfighter className='fighter'/>
            <h2>Death Star</h2>
            <p>who is {data.name}?</p>
            <ol>
                <li>Height: {data.height}</li>
                <li>Mass: {data.mass}</li>
                <li>Hair Colour: {data.hair_color}</li>
                <li>Birth Year: {data.birth_year}</li>
                <li>Gender: {data.gender}</li>
            </ol>
            <ol>
                <li>{data2.films}</li>
            </ol>
            <p>who is {data1.name}?</p>
            <ol>
                <li>Height: {data1.height}</li>
                <li>Mass: {data1.mass}</li>
                <li>Hair Colour: {data1.hair_color}</li>
                <li>Birth Year: {data1.birth_year}</li>
                <li>Gender: {data1.gender}</li>
            </ol>
        </div>
    )
}

export default Starwars
