import { useState } from "react";
import reactLogo from "./assets/react.svg";
import FAQ from "./components/Homepage/FAQ";
import { Box } from "@mui/material";
import ImageCard from "./components/Homepage/Card";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/authentication/sign-in";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/sign-in" element={<SignIn></SignIn>} />

          <Route exact path="/sign-up" element={<SignIn></SignIn>} />
          <Route path="/" element={<Homepage></Homepage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
