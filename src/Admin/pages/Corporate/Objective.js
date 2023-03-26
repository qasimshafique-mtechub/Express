import { Typography } from "@mui/material";
import { Input } from "antd";
import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";

import { setContactInfo } from "../../../features/Resume2/Contact";
import { useDispatch } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import CorporateTemplate from "./CorporateTemplate";
import { setFontSize } from "../../../features/Contact/FontSlice";

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
  const [buttoncolor, setbuttoncolor] = useState("grey");

  const fontChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttoncolor("blue");
    dispatch(
      setFontSize({
        font: "Times New Roman",
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
           
            <button
              className="btn "
              style={{ marginLeft: "5px", background: buttoncolor }}
              onClick={fontChnage}
            >
              Aa
            </button>
            <button
              className="btn "
              style={{ marginLeft: "5px", background: "grey" }}
            >
              Aa
            </button>
            <button
              className="btn "
              style={{ marginLeft: "5px", background: "grey" }}
            >
              Aa
            </button>
            <button
              className="btn "
              style={{ marginLeft: "5px", background: "grey" }}
            >
              Aa
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-5">
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

          <div className="col-lg-7">
            <div className="col-lg-12 col-12">
              <div className="col-12">
                <CorporateTemplate />
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
