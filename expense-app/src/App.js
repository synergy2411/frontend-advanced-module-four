import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Expenses from "./components/Expenses/Expenses";
import Courses from "./pages/Courses/Courses";

function App() {
  // const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onLogin = () => {
    console.log("ON LOGIN")
    setIsLoggedIn(true);
  }

  const onLogout = () => setIsLoggedIn(false);

  return (
    <div className="container">
      <p>App Works</p>
      <Routes>
        <Route path="/expenses" element={<Expenses />} />          {/* http://localhost:3000/expenses */}
        <Route path="/courses/*" element={<Courses />} />
      </Routes>
    </div>
    // <DemoParent />
    // <UseReducerDemo />

    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin, onLogout: onLogout }}>
    //   <UseContextDemo />
    // </AuthContext.Provider>
  );
}

export default App;
