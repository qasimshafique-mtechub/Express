import { Typography } from "@mui/material";
import { Input } from "antd";
import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";

import { setContactInfo } from "../../../features/Resume2/Contact";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import Template from "./Template";
import { setFontSize } from "../../../features/Contact/FontSlice";
import {
  BlueCircle,
  PinkCircle,
  RedCircle,
} from "../../../styles/Resume1.styled";
import { FaCheck } from "react-icons/fa"; // Import the check icon from react-icons/fa

import { setObjectiveInfo } from "../../../features/Resume2/Objective";
const { TextArea } = Input;
function Objective() {
  // initialize state for font
  const dispatch = useDispatch();
  // const firstname = useSelector((state) => state.resumecontact.firstname);
  // const lastname = useSelector((state) => state.resumecontact.lastname);
  // const email = useSelector((state) => state.resumecontact.email);
  // const address = useSelector((state) => state.resumecontact.address);
  // const contact_number = useSelector(
  //   (state) => state.resumecontact.contact_number
  // );
  //   const handleFontChange = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       setFontSize({
  //         font: "",
  //         color: color,
  //       })
  //     );
  //   };

  //   const handlecolorChange = (e) => {
  //     e.preventDefault();
  //     setshowicon(false);
  //     console.log("color");
  //     dispatch(
  //       setFontSize({
  //         font: font,
  //         color: "green",
  //       })
  //     );
  //   };

  const token = getToken();
  // const onChange = (e) => {
  //   dispatch(
  //     setUserInfo({
  //       firstname: e.target.value,
  //       lastname: e.target.value,
  //     })
  //   );
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setContactInfo(name, value));
  };
  // const handleFileInputChange = (event) => {
  //   const file = event.target.files[0];
  //   setimages(event.target.files[0]);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     // dispatch(
  //     //   setUserInfo({
  //     //     image: image,
  //     //   })
  //     // );
  //     // setcontactInfo
  //     setImage(reader.result);
  //   };
  // };
  const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    content:
      "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content",
  });
  const [contents, setcontent] = useState("ssss");
  useEffect(() => {
    dispatch(
      setObjectiveInfo({
        content: post.content,
      })
    );
  }, [post.content]);
  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };
  
  const [buttonArialcolor, setbuttonArialcolor] = useState("grey");
  const [buttonVerdanacolor, setbuttonVerdanacolor] = useState("grey");
  const [buttonTahomacolor, setbuttonTahomacolor] = useState("grey");
  const [buttonTimescolor, setbuttonTimescolor] = useState("grey");
  const [selected, setSelected] = useState(false); // Initialize the selected state to false

  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);
  const fontArialChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttonArialcolor("blue");
    setbuttonVerdanacolor("grey");
    setbuttonTahomacolor("grey");
    setbuttonTimescolor("grey");
    dispatch(
      setFontSize({
        font: "Arial",
        color: color,
      })
    );
  };
  const fontVerdanaChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttonArialcolor("grey");
    setbuttonVerdanacolor("blue");
    setbuttonTahomacolor("grey");
    setbuttonTimescolor("grey");
    dispatch(
      setFontSize({
        font: "Verdana",
        color: color,
      })
    );
  };
  const fontTahomaChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttonArialcolor("grey");
    setbuttonVerdanacolor("grey");
    setbuttonTahomacolor("blue");
    setbuttonTimescolor("grey");
    dispatch(
      setFontSize({
        font: "Tahoma",
        color: color,
      })
    );
  };

  const fontTimesRomanChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttonArialcolor("grey");
    setbuttonVerdanacolor("grey");
    setbuttonTahomacolor("grey");
    setbuttonTimescolor("blue");
    dispatch(
      setFontSize({
        font: "Times New Roman",
        color: color,
      })
    );
  };
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
    <>
      <div className="container">
      <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary">Change Template</button>
          <div>
            <div style={{ display: "flex" }}>
              <RedCircle
                className={`color-button ${selected ? "selected" : ""}`}
                onClick={chnageredcolor}
              >
                {" "}
                {selected && <FaCheck className="tick-icon" />}{" "}
              </RedCircle>
              <PinkCircle onClick={chnagepinkcolor}></PinkCircle>
              <BlueCircle onClick={chnageBluecolor}></BlueCircle>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttonArialcolor }}
                onClick={fontArialChnage}
              >
                Aa
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttonVerdanacolor  }}
                onClick={fontVerdanaChnage}
              >
                Aa
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttonTahomacolor }}
                onClick={fontTahomaChnage}
              >
                Aa
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttonTimescolor }}
                onClick={fontTimesRomanChnage}
              >
                Aa
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4">
            <Typography variant="h6">Contact Detail</Typography>
            <br />
            <br />
            <br />
            <form>
              <div className="row">
                <div className="col">
                  <JoditEditor
                    ref={editor}
                    value={post.content}
                    onChange={(newContent) => contentFieldChanaged(newContent)}
                  />{" "}
                </div>
              </div>
              <br />
              <br />
            </form>
          </div>

          <div className="col-lg-8">
            <div className="col-lg-12 col-12">
              <div className="col-12">
                <Template />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 col-12 bottom_Sec_div"></div>
              <div className="col-md-6 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
