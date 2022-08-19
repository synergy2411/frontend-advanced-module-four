import { useRef, useState } from 'react';

const Login = () => {

    const inputEmailRef = useRef();

    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [emailIsFocused, setEmailIsFocused] = useState(false);

    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);

    const passwordChangeHandler = event => setPassword(event.target.value)

    const emailBlurHandler = () => {
        if (inputEmailRef.current.value.trim() === '') {
            setEmailIsValid(false)
        } else {
            setEmailIsValid(true)
        }
    }
    const emailFocusHandler = () => {
        setEmailIsFocused(true)
    }
    const submitHandler = event => {
        event.preventDefault();
        console.log("Email : ", inputEmailRef.current.value)
        console.log("Password : ", password);
    }

    const passwordBlurHandler = () => {
        password.trim() === '' ? setPasswordIsValid(false) : setPasswordIsValid(true)
    }

    const passwordFocusHandler = () => setPasswordIsFocused(true)

    let emailValidity = emailIsFocused && !emailIsValid;
    let passwordValidity = passwordIsFocused && !passwordIsValid;

    let formValidity = emailValidity && passwordValidity;

    return (
        <form onSubmit={submitHandler}>
            <label>Email :</label>
            <input type="email"
                name="email"
                id="email"
                ref={inputEmailRef}
                onBlur={emailBlurHandler}
                onFocus={emailFocusHandler} />
            {emailValidity && <p>Email is mandatory field</p>}
            <br />
            <label>Password : </label>
            <input type="password" name="password"
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                onFocus={passwordFocusHandler} />
            {passwordValidity && <p>Password is adatory field.</p>}
            <br />
            {formValidity ? 'true' : 'false'}
            <button type="submit" disabled={formValidity}>Login</button>
        </form>
    )
}

export default Login;