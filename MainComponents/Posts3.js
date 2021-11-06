import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Posts3() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleChange = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => setPost(res.data))
    }, [idFromButtonClick])

    return (
        <div>
            <p>Hello</p>
            <input
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={handleChange}>Fetch Data</button><p>{post.title}</p>
        </div>
    )
}

export default Posts3
