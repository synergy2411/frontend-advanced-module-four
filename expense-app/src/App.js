import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login/Login";
import UseContextDemo from "./components/Demo/UseContextDemo";
import UseEffectDemo from "./components/Demo/UseEffectDemo";
import UseReducerDemo from "./components/Demo/UseReducerDemo";
import Expenses from "./components/Expenses/Expenses";
import AuthContext from "./context/auth-context";

function App() {
  // const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onLogin = () => {
    console.log("ON LOGIN")
    setIsLoggedIn(true);
  }

  const onLogout = () => setIsLoggedIn(false);

  return (
    <UseReducerDemo />

    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin, onLogout: onLogout }}>
    //   <UseContextDemo />
    // </AuthContext.Provider>
  );
}

export default App;
