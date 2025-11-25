import {  Routes, Route } from "react-router-dom"; 
// import Home from "./Home";
import Wordle from "./Wordle";



function App() {
  return (
      <div className="w-full m-0 min-h-screen ">
        <Routes>
          <Route path="/" element={<Wordle />} />
        </Routes>
      </div>
  );
}

export default App;