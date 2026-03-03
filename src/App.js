import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/App";
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
