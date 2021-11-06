import React, { useState } from 'react'

function Subscribe() {

    const [name, setName] = useState({firstName: '', surname: ''})
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [continent, setContinent] = useState('Europe')
    const [highElfChecked, setHighElfChecked] = useState(false)
    const [woodElfChecked, setWoodElfChecked] = useState(false)
    const [khajiitChecked, setKhajiitChecked] = useState(false)
    const [nordChecked, setNordChecked] = useState(false)

    const handleChange=(e)=>{
        setGender( e.target.value);
     }

    return (
        <div>
            <div className='subscribe'>
                <h2 className='subTitle'>Subscribe</h2>
            </div>
            <form>
                <div className='subscribe'>
                    <div className='firstAndLastName'>
                    First Name: <br /> <input
                    className='firstNames' 
                    type='text'
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value})}
                    />
                    <br /> <br />
                    Surname: <br /> <input 
                    className='lastNames'
                    type='text'
                    value={name.surname}
                    onChange={e => setName({...name, surname: e.target.value})}
                    />
                    </div>
                    <br />
                    <br />
                    Age: <input 
                    className='ages'
                    type='number'
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    />
                    <br />
                    <br />
                    <div className='radios'>
                        <p>Gender: </p>
                        <div className='maleRadio'>
                                <input 
                                    type="radio" 
                                    value="Male" 
                                    id="Male"
                                    onChange={handleChange} 
                                    name="gender" 
                                />
                                <label for="Male">Male</label>
                        </div>
                        <div className='femaleRadio'>
                            <input 
                                type="radio" 
                                value="Female" 
                                id="Female"
                                onChange={handleChange} 
                                name="gender"
                            />
                            <label for="Female">Female</label>
                        </div>
                        <div className='otherRadio'>
                            <input 
                                type="radio" 
                                value="Other" 
                                id="Other"
                                onChange={handleChange} 
                                name="gender"
                            />
                            <label for="Other">Other</label>
                        </div>
                    </div>
                    <br />
                    <br />

                    Email: 
                    <input
                        className='emails' 
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p>Continent:</p>
                    <select className='textBox' value={continent} onChange={e => setContinent(e.target.value)}>
                        <option value='Europe'>Europe</option>
                        <option value='Asia'>Asia</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='North America'>North America</option>
                        <option value='South America'>South America</option>
                        <option value='Antarctica'>Antarctica</option>
                    </select>
                    <br />
                    <p>Allies:</p>
                    <div className='checkboxesDiv'>
                    <input 
                        type='checkbox'
                        checked={highElfChecked}
                        onChange={e => setHighElfChecked(e.target.checked)} 
                    />High Elf
                    <br />
                    <input 
                        type='checkbox'
                        checked={woodElfChecked}
                        onChange={e => setWoodElfChecked(e.target.checked)}
                    />Wood Elf
                    <br />
                    <input 
                        type='checkbox'
                        checked={khajiitChecked}
                        onChange={e => setKhajiitChecked(e.target.checked)}
                    />Khajiit
                    <br />
                    <input 
                        type='checkbox'
                        checked={nordChecked}
                        onChange={e => setNordChecked(e.target.checked)}
                    />Nord
                    </div>
                    <br />
                    <br />
                    Secret Key: <input
                    className='secretKey' 
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='answers'>
                    <p>Name: {name.firstName} {name.surname}</p>
                    <p>Age: {age}</p>
                    <p>Home: {continent}</p>
                    <p>You gender is --> {gender}</p>
                    <p> Allies: 
                        {highElfChecked ? 'High Elf, ' : null}
                        {woodElfChecked ? 'Woof Elf, ' : null}
                        {khajiitChecked ? 'Khajiit, ' : null}
                        {nordChecked ? 'Nord' : null}
                    </p>
                    <p>Email Address: {email}</p>
                </div>
            </form>
        </div>
    )
}

export default Subscribe
