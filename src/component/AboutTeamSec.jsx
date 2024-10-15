import React from "react";
import "./aboutteam.css";
import Teamdetails from "./Teamdetails";
const AboutTeamSec = () => {
  return (
    <div>
      <div className="bImage">
        <div className="bell">
          <div className="icon">
            <i class="fa-solid fa-bell"></i>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="managingTeam"></div> */}
        <div className="managingTeam2">
          <div className="teamMember">
            <h2>Gaurav Gupta</h2>
            <p className="para">(Developer and Management)</p>
            <p className="about">
              Gaurav is responsible for both the development and the management
              of the project. With strong technical skills and leadership, he
              oversees the entire project execution.
            </p>
          </div>

          <div className="teamMember">
            <h2>Krishna Kumar</h2>
            <p className="para">(CEO and Management)</p>
            <p className="about">
              Krishna is the CEO and takes care of the overall management of the
              team. His expertise in business strategy helps drive the company
              forward.
            </p>
          </div>

          <div className="teamMember">
            <h2 >Prabhakar Rajput</h2>
            <p className="para">(Logic Developer and Director)</p>
            <p className="about">
              Prabhakar is the logic developer and director of the project. He
              ensures that the algorithms and system logic are effectively
              implemented.
            </p>
          </div>
        </div>
      </div>
      <Teamdetails/>
    </div>
  );
};

export default AboutTeamSec;
