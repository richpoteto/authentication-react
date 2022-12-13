import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import i18n from "./i18n";

function App() {
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <select onChange={changeLanguage}>
        <option value="en" selected>
          en
        </option>
        <option value="ru">ru</option>
      </select>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
