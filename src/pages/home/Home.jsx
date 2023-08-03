import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gotoContact, gotoProject, gotoResume } from "../../ReduxFiles/Slices";

export default function Home() {
  const navigate = useNavigate();
// const navigationData = useSelector((state=>state.navigation))
const dispatch = useDispatch()
// console.log(navigationData)
  return (
    <div className="containerDivHome ">
      <div className="row">
        <div className="col col1">
          <div className="imgDiv">
            <img src="/ProfilePhoto.enc" alt="" />
          </div>
        </div>
        <div className="col col2">
          <div className="contentDiv">
            <h1>Hello</h1>
            <h4>A Bit About Me</h4>
            <p>
            I am highly motivated, adaptable, and a fast learner, always eager to take on new challenges and contribute to a collaborative team environment. I am confident that my technical skills, creativity, and commitment to excellence make me a valuable addition to the team.
            </p>
            <div className="pageRedirectDiv">
              <h4 className="redirection" onClick={()=>dispatch(gotoResume()) && navigate("/resume")}>Resume</h4>
              <h4 className="redirection" onClick={()=>dispatch(gotoProject()) && navigate("/project")}>Projects</h4>
              <h4 className="redirection" onClick={()=>dispatch(gotoContact()) && navigate("/contact")}>Contact</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
