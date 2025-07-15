import {  Routes, Route } from "react-router-dom"; // Corrected import for Router, Routes, and Route
import Home from "./Home";
import Useeffect from "./pages/Useeffect";
import ScriptVerseNavbar from "./components/ScriptVerseNavbar"; // Corrected import path for Navbar
import TypescriptBasics from "./pages/TypescriptBasics";

function App() {
  return (
    // The entire application that uses routing should be wrapped in Router
    // <Router>
      <div className="w-full m-0 min-h-screen bg-gradient-to-bl from-gray-950 to-gray-900 ">
        <ScriptVerseNavbar /> {/* The Navbar should always be visible */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/useeffect" element={<Useeffect />} />
          {/* Add more routes for other tutorial pages as you create them */}
          {/* Example placeholders for future pages: */}
          {/* <Route path="/async-js" element={<div>Async JS Content</div>} /> */}
          <Route path="/typescript-basics" element={<TypescriptBasics />} />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;