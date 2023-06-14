import { useEffect, useState } from "react";


function Content() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [type, setType] = useState('posts');
    const allTypes = ['posts', 'albums', 'todos'];

    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then((data) => {setData(data)})
    }, [type])

    return (
        <div>
            {allTypes.map((item, index) => (
                <button 
                    key={index}
                    onClick={() => setType(item)}
                    style={type === item ? {color: "#fff", backgroundColor: "#111"} : {}}
                >
                    {item}
                </button>
            ))
            }
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {data.map((datum, index) => (
                    <li key={index}>{datum.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;