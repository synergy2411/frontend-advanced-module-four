import { useRef, useState } from 'react';

const Login = () => {

    const inputEmailRef = useRef();

    const [password, setPassword] = useState('');

    const passwordChangeHandler = event => setPassword(event.target.value)

    const submitHandler = event => {
        event.preventDefault();
        console.log("Email : ", inputEmailRef.current.value)
        console.log("Password : ", password);
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Email :</label>
            <input type="email" name="email" id="email" ref={inputEmailRef} />
            <br />
            <label>Password : </label>
            <input type="password" name="password"
                value={password}
                onChange={passwordChangeHandler} />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;