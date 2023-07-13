import axios from "axios"
import { useEffect, useState } from "react"
import PostItem from "./PostItem"

const ListPost = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     const url = 'https://jsonplaceholder.typicode.com/posts'
    //     axios.get(url)
    //         .then(res => setPosts(res.data))
    //         .catch(error => console.log(error))
    // },[])

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await axios.get(url)
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}
export default ListPost