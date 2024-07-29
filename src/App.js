import React from "react";
import { Routes, Route } from "react-router-dom";
import Result from "./pages/result";
import Result2 from "./pages/result2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Result2 />} />
      </Routes>
    </div>
  );
};

export default App;
