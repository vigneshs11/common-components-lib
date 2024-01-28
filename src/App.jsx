import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
