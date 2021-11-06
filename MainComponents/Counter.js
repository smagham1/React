import React, { useState, useEffect } from 'react'
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";
import { BsPlay } from "react-icons/bs";
import { BsStop } from "react-icons/bs";
import randomcolor from 'randomcolor'


function Counter() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState(randomcolor())
    const [start, setStart] = useState(false)

    const letsStart = () => {
        setStart(prevStart => !prevStart)
    }

    const Increment = () => {
        setCount(prevState => prevState + 1)
    }

    const Decrement = () => {
        setCount(prevState => prevState - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    let counting;
        if (count === 0) {
            counting = "Counter";
            } else {
            counting = "Counting"
            }
    return (
        <div className='counter'>
            <h2 className='countTitle'>{counting}</h2>
            <h2 className='countNow' style={{color: color}}>{count}</h2>
            <div style={{display: start ? 'block' : 'none'}}>
                <button className='buttonCountPlus' onClick={Increment}><BsPlusCircle /></button>
                <button className='buttonCountMinus' onClick={Decrement}><BsDashCircle /></button>
                <button className='buttonCountRefresh' onClick={Reset}><RiRefreshLine /></button>
            </div>
            <button className='startButton' 
                    onClick={letsStart}
                    style={{color: start ? 'red' : 'green'}}
                    >{start ? <BsStop /> : <BsPlay />}</button>
        </div>
    )
}

export default Counter
