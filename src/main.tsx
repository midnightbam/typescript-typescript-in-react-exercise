import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UsersList from "./pages/UserList";
import "./index.css"; // TODO: ตรวจสอบว่า TailwindCSS ถูก import แล้ว

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TODO: กำหนด props name ของ Home */}
        <Route path="/" element={<Home name="Alice" />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
