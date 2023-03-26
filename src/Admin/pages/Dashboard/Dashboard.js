import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import { Card, Col, Row } from "antd";
import Template from "../Template/Template";
import Templates from "../Resume/Template";

import CorporateTemplate from "../Corporate/CorporateTemplate";
import PersuasiveTemplate from "../Persuasive/PersuasiveTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import { setFontSize } from "../../../features/Contact/FontSlice";
import { BlueColor, RedColor, PinkColor } from "../../../styles/Resume1.styled";
import { Link } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState(false); // Initialize the selected state to false
  // initialize state for font
  const dispatch = useDispatch();
  const font = useSelector((state) => state.font.font);

  const chnageredcolor = (e) => {
    e.preventDefault();
    setSelected(!selected); // Toggle the selected state on click
    dispatch(
      setFontSize({
        color: "red",
        font: font,
      })
    );
  };
  const chnagepinkcolor = (e) => {
    e.preventDefault();
    setSelected(!selected); // Toggle the selected state on click
    dispatch(
      setFontSize({
        color: "pink",
        font: font,
      })
    );
  };
  const chnageBluecolor = (e) => {
    e.preventDefault();
    console.log("sa");
    dispatch(
      setFontSize({
        color: "blue",
        font: font,
      })
    );
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4 color="blue" style={{ color: "blue" }}>
          Select A Specific Template To Customize
        </h4>
        <br />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RedColor
          className={`color-button ${selected ? "selected" : ""}`}
          onClick={chnageredcolor}
        >
          {" "}
        </RedColor>
        <PinkColor onClick={chnagepinkcolor}></PinkColor>
        <BlueColor onClick={chnageBluecolor}></BlueColor>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Row gutter={16}>
          <Col span={12}>
            <Link to="/resume1">
              <Template />
            </Link>
          </Col>
          <Col span={12}>
            <Link to="/resume2">
              <Templates />
            </Link>
          </Col>

          <br />
          <br />
          <br />
          <br />

          <Col span={12} style={{ marginTop: "40px"}}>
            <Link to="/resume3">
              <CorporateTemplate />
            </Link>
          </Col>
          <Col span={12} style={{ marginTop: "40px"}}>
            <Link to="/resume4">
              <PersuasiveTemplate />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
