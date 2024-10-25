import React from "react";
import "./dashboard.css";
import pic from "./images/edit.png";
import DynamicGraph from "./graph";
import facebook from "./images/facebook.png"; 
import google from "./images/google.png"; 
import twitter from "./images/twitter.png"; 
import insta from "./images/insta.png"; 

const Dashboard = () => {
  return (
    <>
    <div className="landing">
        
      <div className="left_landing">
        <div className="profile">
          {/* <div className="profile_title"> */}
            <h2>Profile</h2>
          {/* </div> */}
          
          <div className="profile_details">
            <div className="profile_left">
                <div>Score: 90</div>
                <div>Score: 85</div>
                <div>Score: 95</div>
            </div>
            <div className="profile_right">
                <img src={pic} alt="Profile Pic" width="100px" height="100px" />
                <div>Hemang Jain</div>
            </div>
          </div>
        </div>
        <div className="prediction">
            TRade Predictor
            
        </div>
      </div>
      <div className="right_landing">
        <div className="chart_analyzer">
            <h2>
                Chart Analyser
            </h2>
            <DynamicGraph/>
        </div>
        {/* <div className="ESG_integration">
            ESG Integration */}
        <div className="ESG_integration">
            Stock Sentiments 
            <div className="social-media-logos">
                <img src={facebook} alt="Twitter" />
                <img src={insta} alt="Instagram" />
                <img src={twitter} alt="Facebook" />
                <img src={google} alt="LinkedIn" />
            </div>    
        </div>

        {/* </div> */}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
