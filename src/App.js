import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import CourseLoad from "./pages/CourseLoad.js";
import FindClass from "./pages/FindClass.js";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/homecomponents/footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CourseLoad" element={<CourseLoad />} />
        <Route path="/FindClass" element={<FindClass />} />
      </Routes>
      <Footer />
    </>
  );
}

function LoadCoursePage() {
  return (
    <div>
      <CourseLoad course="Math" />
    </div>
  );
}

export default App;
