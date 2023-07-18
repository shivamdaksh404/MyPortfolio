import React, { useRef, useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState({
    home: true,
    resume: false,
    project: false,
    contact: false,
  });
  const gotoHome = () => {
    navigate("/");
    const activeLink = { ...isSelected };
    activeLink.home = true;
    activeLink.resume = false;
    activeLink.project = false;
    activeLink.contact = false;
    setIsSelected(activeLink);
  };
  const gotoResume = () => {
    navigate("/resume");
    const activeLink = { ...isSelected };
    activeLink.home = false;
    activeLink.resume = true;
    activeLink.project = false;
    activeLink.contact = false;
    setIsSelected(activeLink);
  };

  const gotoProject = () => {
    navigate("/project");
    const activeLink = { ...isSelected };
    activeLink.home = false;
    activeLink.resume = false;
    activeLink.project = true;
    activeLink.contact = false;
    setIsSelected(activeLink);
  };

  const gotoContact = () => {
    navigate("/contact");
    const activeLink = { ...isSelected };
    activeLink.home = false;
    activeLink.resume = false;
    activeLink.project = false;
    activeLink.contact = true;
    setIsSelected(activeLink);
  };

  return (
    <nav className="navbar navbar-light mx-3 bg-light">
      <div className="container-fluid ">
        <div className="containerLeft">
          <img
            onClick={gotoHome}
            style={
              isSelected.home === true
                ? { border: " 0.20rem solid #00acee" }
                : {}
            }
            src="/ProfilePhoto.enc"
            alt=""
            width="30"
            height="24"
            className="rounded-circle img"
          />

          <li>
            Shivam Daksh <span className="fw-light">Frontend Developer</span>
          </li>
        </div>

        <div className="containerRight">
          <div className="liDiv">
            <li
              style={
                isSelected.resume === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={gotoResume}
            >
              Resume
            </li>
          </div>
          <div className="liDiv">
            <li
              style={
                isSelected.project === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={gotoProject}
            >
              Project
            </li>
          </div>
          <div className="liDiv">
            <li
              style={
                isSelected.contact === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={gotoContact}
            >
              Contact
            </li>
          </div>
        </div>
        {/* Full screen modal*/}
        <div className="toggleContainer">
          <IconButton
            type="button"
            className="  btn iconButton"
            data-bs-toggle="modal"
            data-bs-target="#menuPopup"
            size="large"
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div
          className="modal fade"
          id="menuPopup"
          //   tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen modalDiv">
            <div className="modal-content modalContant">
              <div className=" modalHeader">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body modalBody">
                <div className="liDiv" data-bs-dismiss="modal">
                  <li
                    style={
                      isSelected.resume === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={gotoResume}
                  >
                    Resume
                  </li>
                </div>
                <div className="liDiv" data-bs-dismiss="modal">
                  <li
                    style={
                      isSelected.project === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={gotoProject}
                  >
                    Project
                  </li>
                </div>
                <div className="liDiv" data-bs-dismiss="modal">
                  <li
                    style={
                      isSelected.contact === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={gotoContact}
                  >
                    Contact
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
