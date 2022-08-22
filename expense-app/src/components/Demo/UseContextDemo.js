import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import Login from "../Auth/Login/Login";
import Expenses from "../Expenses/Expenses";

const UseContextDemo = () => {
    const context = useContext(AuthContext);
    return (
        <div className="container">
            {!context.isLoggedIn && <Login />}
            {context.isLoggedIn && <Expenses />}
            {context.isLoggedIn && <button onClick={() => context.onLogout()}> Logout </button>}
        </div>
    );
}

export default UseContextDemo;
