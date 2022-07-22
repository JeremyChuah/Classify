import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import Home from "./pages/Home.js";
import CourseLoad from "./pages/CourseLoad.js";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/homecomponents/footer.js";
import ClassCatalog from "./pages/ClassCatalog";
import Card from "./pages/classcatalogcomponents/classInfoCard.js";
import ClassCatalogSpecific from "./pages/classCatalogSpecific";
import ClassInfo from "./pages/ClassInfo.js";
import classes from "./pages/classes";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CourseLoad" element={<CourseLoad />} />
        <Route path="/ClassCatalog" element={<ClassCatalog />} />
        <Route path="/ClassCatalog/test" element={<ClassInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
