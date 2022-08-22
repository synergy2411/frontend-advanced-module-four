import { useEffect, useState } from 'react';
import axios from 'axios';

console.clear();

const UseEffectDemo = () => {


    const [search, setSearch] = useState('');

    useEffect(() => {
        let notifier = setTimeout(() => {
            axios.get(`https://api.github.com/users/${search}/repos`)
                .then(response => console.log(response.data))
                .catch(console.log)
        }, 1000)
        return () => {
            clearTimeout(notifier)
        }
    }, [search])

    // const [toggle, setToggle] = useState(false)
    // const [show, setShow] = useState(false)

    // useEffect(() => {
    //     console.log("USE EFFECT WORKS")
    //     return () => {
    //         console.log("CLEAN UP");
    //     }
    // }, [toggle, show])

    return (
        <div>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Use effect demo - TOGGLE</p>}
            <button onClick={() => setShow(!show)}>Show</button>
            {show && <p>Use effect demo - SHOW</p>} */}
        </div>
    )

}

export default UseEffectDemo;