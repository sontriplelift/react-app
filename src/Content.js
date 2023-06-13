import { useEffect, useState } from "react";


function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((posts) => {setPosts(posts)})
    }, [])

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {console.log('render')}

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;