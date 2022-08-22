import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login/Login";
import UseContextDemo from "./components/Demo/UseContextDemo";
import UseEffectDemo from "./components/Demo/UseEffectDemo";
import Expenses from "./components/Expenses/Expenses";
import AuthContext from "./context/auth-context";

function App() {
  // const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onLogin = () => {
    console.log("ON LOGIN")
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin }}>
      <UseContextDemo />
    </AuthContext.Provider>
  );
}

export default App;
