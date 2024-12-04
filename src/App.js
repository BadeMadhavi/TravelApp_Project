import React from "react";
import {Routes, Route } from "react-router-dom";
import UselayOut from "./uselayouteffect/UseLayout";
import Home from "./Travel/Home";
import SignUp from "./Travel/Signup";
import Login from "./Travel/Login";
import TripDetail from "./Travel/TripDetail";
import TripList from "./Travel/TripList";
import EditTrip from "./Travel/TripEdit";
import Dashboard from "./Travel/Dash";
import Trips from "./Travel/Trips";

const App = () => {
  return (
       <Routes>
        <Route path="uselayout" element={<UselayOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/tripdetail" element={<TripDetail/>}/>
        <Route path="/triplist" element={<TripList/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/trips" element={<Trips />} />
        <Route path="/edittrip/:index" element={<EditTrip />} />
      </Routes>
  );
};

export default App;
