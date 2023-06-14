import { useEffect, useState } from "react";

const allTypes = ['posts', 'albums', 'todos'];

function Content() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [type, setType] = useState('posts');
    const [width, setWidth] = useState(window.innerWidth);
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [countdown, setCountdown] = useState(200);

    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then((data) => {setData(data)})
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll);

        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        // Clean up function
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h2>Window width: {width}</h2>
            <h2>Timer: {countdown}</h2>

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

            <div>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>

            <ul>
                {data.map((datum, index) => (
                    <li key={index}>{datum.title}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{position: "fixed", right: "20px", bottom: "20px"}}
                    onClick={() => window.scrollTo(0 ,0)}
                >Go to top
                </button>
            )}
        </div>
    )
}

export default Content;