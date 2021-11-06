import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Posts2() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPost(res.data))
    }, [])

    return (
        <div>
            <p>Hello</p>
            <ol>{ post.map(posts => (<li key={posts.id}>{posts.title}</li>))}</ol>
        </div>
    )
}

export default Posts2
