import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/about";
import UserDashboard from "./Components/User/userDashboard";
// import Teams from "./Components/Teams/Teams.js";
import SingleEvent from "./Components/Singleevent/event";
import Events from "./Components/Events/events.component";
// import Tribute from "./Components/Tribute/tribute";
// import Timeline from "./Components/Timeline/Timeline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* <Route element={<Timeline />} path="/timeline" exact /> */}
        <Route element={<Home />} path="/" exact />
        {/* <Route element={<Teams />} path="/teams" exact /> */}
        <Route element={<About />} path="/about" exact />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route element={<UserDashboard />} path="/user" exact />
        <Route element={<Events />} path="/events" exact />
        {/* <Route element={<Tribute />} path="/tribute" exact /> */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
