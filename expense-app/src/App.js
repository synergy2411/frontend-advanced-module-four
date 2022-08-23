import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import Courses from "./pages/Courses/Courses";
import AddUser from "./pages/Lego/AddUser/AddUser";
import ListUsers from "./pages/Lego/ListUsers/ListUsers";

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
      <Header />
      <br />
      <Routes>
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>


      {/* <p>App Works</p>
      <Routes>
        <Route path="/expenses" element={<Expenses />} />         
        <Route path="/courses/*" element={<Courses />} />
      </Routes> */}
    </div>
    // <DemoParent />
    // <UseReducerDemo />

    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin, onLogout: onLogout }}>
    //   <UseContextDemo />
    // </AuthContext.Provider>
  );
}

export default App;



// /data> json-server db.json --watch --port=3030