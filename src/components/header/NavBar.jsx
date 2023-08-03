import React, { useRef, useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gotoContact, gotoProject, gotoResume, gotoHome } from "../../ReduxFiles/Slices";

export default function NavBar() {
  const navigate = useNavigate();
  const navigationData = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
 
  return (
    <nav className="navbar navbar-light mx-3 bg-light">
      <div className="container-fluid ">
        <div className="containerLeft">
          <img
            onClick={() => dispatch(gotoHome()) && navigate("/")}
            style={
              navigationData.value.home === true
                ? { border: " 0.20rem solid #00acee" }
                : {}
            }
            src="/ProfilePhoto.enc"
            alt=""
            width="30"
            height="24"
            className="rounded-circle img"
          />

          <li onClick={() => dispatch(gotoHome()) && navigate("/")}>
            Shivam Daksh <span className="fw-light">Frontend Developer</span>
          </li>
        </div>

        <div className="containerRight">
          <div className="liDiv">
            <li
              style={
                navigationData.value.resume === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={() => dispatch(gotoResume()) && navigate('/resume')}
            >
              Resume
            </li>
          </div>
          <div className="liDiv">
            <li
              style={
                navigationData.value.project === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={() => dispatch(gotoProject())&& navigate("/project")}
            >
              Project
            </li>
          </div>
          <div className="liDiv">
            <li
              style={
                navigationData.value.contact === true
                  ? { borderBottom: " 0.15rem solid #00acee" }
                  : {}
              }
              onClick={() => dispatch(gotoContact()) && navigate("/contact")}
            >
              Contact
            </li>
          </div>
        </div>
        {/* ----------------------------------------------------- */}
        {/* Full screen modal*/}
        {/* ------------------------------------------------------- */}
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
                      navigationData.value.resume === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={() => dispatch(gotoResume()) && navigate("/resume")}
                  >
                    Resume
                  </li>
                </div>
                <div className="liDiv" data-bs-dismiss="modal">
                  <li
                    style={
                      navigationData.value.project === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={() => dispatch(gotoProject()) && navigate("/project")}
                  >
                    Project
                  </li>
                </div>
                <div className="liDiv" data-bs-dismiss="modal">
                  <li
                    style={
                      navigationData.value.contact === true
                        ? { borderBottom: " 0.15rem solid #00acee" }
                        : {}
                    }
                    onClick={() => dispatch(gotoContact()) & navigate("/contact")}
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
