import React, { useState } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from "./components/Counter/Counter";

import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import AddPost from "./pages/Lego/AddPost/AddPost";
import AddUser from "./pages/Lego/AddUser/AddUser";
import ListUsers from "./pages/Lego/ListUsers/ListUsers";
import User from "./pages/Lego/User/User";

import CompA from './components/Hoc/CompA';
import CompB from "./components/Hoc/CompB";

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
      {/* <Async /> */}
      <CompA />
      <CompB />
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Navigate to="/counter" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/posts/add-new" element={<AddPost />} />
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