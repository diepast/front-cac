import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./layout.css";
const LayoutMain = (props) => {
  return (
    <div className="layout ">
      <header className="layout-header">
        <h2>Amazing</h2>
        <Navbar />
      </header>
      <main className="layout-main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
