import React from "react";
import Authentication from "./pages/authentication";
import SignIn from "./pages/sign-in";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Authentication} />
        <Route path='/sign-in' Component={SignIn} />
      </Routes>
    </div>
  );
}

export default App;
