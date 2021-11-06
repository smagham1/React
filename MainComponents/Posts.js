import React, { useState, useEffect} from 'react'
import axios from 'axios'


function Posts() {

    
    const [posts, setPosts] = useState([])

   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => setPosts(res.data))
   }, [])

    return (
        <div>
            <h2>Api All Over </h2>
            <ol>{
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>

                ))}
            </ol>
        </div>
    )
}

export default Posts
