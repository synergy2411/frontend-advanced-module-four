import React, { useState } from 'react';
import DemoOutput from './DemoOutput/DemoOutput';

const Greetings = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h1>Good morning!</h1>
            {!toggle && <p>Good to see you today</p>}
            {toggle && <p>Changed</p>}
            <button onClick={() => setToggle(!toggle)}>Change</button>

            <DemoOutput />
        </div>
    );
}

export default Greetings;
