import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home.js";
import CourseLoad from "./pages/CourseLoad.js";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/homecomponents/footer.js";
import ClassCatalog from "./pages/ClassCatalog";
import Card from "./pages/classcatalogcomponents/classInfoCard.js";
import ClassCatalogSpecific from "./pages/classCatalogSpecific";
import ClassInfo from "./pages/ClassInfo.js";
import classes from "./pages/classes";
import { API, graphqlOperation } from "aws-amplify";
import { listClasses } from "./graphql/queries.js";
import About from "./pages/About";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  function stringUrl(string) {
    if (string.includes(" ")) {
      return string.replaceAll(" ", "%20");
    } else {
      return string;
    }
  }

  useScrollToTop();
  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    fetchClass();
  }, []);

  const fetchClass = async () => {
    try {
      const classData = await API.graphql(graphqlOperation(listClasses));
      const classList = classData.data.listClasses.items;
      setClassInfo(classList);
    } catch (e) {
      console.log("error on fetching classes", e);
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CourseLoad" element={<CourseLoad data={classInfo} />} />
        <Route path="/ClassCatalog" element={<ClassCatalog />} />
        <Route path="/About" element={<><div className="row"><About /></div></>} />
        {classInfo.map((classes) => {
          return (
            <Route
              path={`/ClassCatalog/${stringUrl(classes.name)}`}
              element={
                <ClassInfo
                  nameClass={classes.name}
                  enjoyment={classes.enjoyment}
                  difficulty={classes.difficulty}
                  load={classes.load}
                  homework={classes.homework}
                  entries={classes.entries}
                  id={classes.id}
                  description={classes.description}
                  onAdd={() => {
                    fetchClass();
                  }}
                />
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
