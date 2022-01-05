import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component";
import Rooms from "./pages/rooms/rooms.component";
import SingleRoom from "./pages/single-room/single-room.component";
import Error from "./pages/error/error.component";
import RoomsLayout from "./pages/rooms-layout/rooms-layout.component";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsLayout />}>
          <Route index element={<Rooms />} />
          <Route path=":roomId" element={<SingleRoom />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
