import React from "react";
import "./landing.css";
import Navbar from "./Navbar";
const  Landing= () => {
  return (
    <>
        <Navbar/>
        <div className="landing_head">
            <h1>IntelliTrade</h1>
            <p>Beyond the Numbers: Redefining Market Precision with AI-Driven Quant Trading</p>
            
        </div>
    </>
  );
};

export default Landing;
