import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import Login from "../Auth/Login/Login";
import Expenses from "../Expenses/Expenses";

const UseContextDemo = () => {
    const context = useContext(AuthContext);
    return (
        <div className="container">
            <Login />
            {context.isLoggedIn && <Expenses />}
        </div>
    );
}

export default UseContextDemo;
