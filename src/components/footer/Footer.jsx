import React from "react";
import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="containerDiv">
      <div className="mainContainer">
        <div className="phoneDiv">
          <li>Phone</li>
          <a href="tel:+919315406624">9315406624</a>
        </div>
        <div className="emailDiv">
          <li>Email</li>
          <a href="mailto:shivofficial05@gmail.com">shivofficial05@gmail.com</a>
        </div>
        <div className="socialDiv">
          <li>Follow Me </li>
          <div className="icons">
            {/* <li> */}
              <a target="_blank" href="https://github.com/shivamdaksh404">
                <GitHubIcon />
              </a>
            {/* </li> */}
            {/* <li> */}
              <a target="_blank" href="https://www.linkedin.com/in/shivamdaksh404/">
                <LinkedInIcon />
              </a>
            {/* </li> */}
           
          </div>
        </div>
        <div className="copyRigthDiv">
          <p>
            © 2023 By Shivam Daksh. <br />
            Powered and secured by Shivam Daksh
          </p>
        </div>
      </div>
    </div>
  );
}
