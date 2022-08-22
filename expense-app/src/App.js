import React from "react";
import Login from "./components/Auth/Login/Login";
import UseEffectDemo from "./components/Demo/UseEffectDemo";
import Expenses from "./components/Expenses/Expenses";

function App() {
  return (
    <div className="container">
      {/* <UseEffectDemo /> */}
      {/* <Login /> */}
      <p className="display-4 text-center">Awesome Expense App</p>
      <Expenses />
    </div>
  );
}

export default App;
