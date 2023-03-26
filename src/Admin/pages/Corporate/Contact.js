import { Typography } from "@mui/material";
import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { setContactInfo } from "../../../features/Resume2/Contact";
import {
  ResumeContact,
  ResumeHeader,
  ResumeHeading,
  ResumeImage,
  ResumeNmber,
  ResumeTitle,
  VerticalLine,
  VerticalLineEducation,
  VerticalLineSkill,
} from "../../../styles/Resume.styled";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import { setFontSize } from "../../../features/Contact/FontSlice";
import CorporateTemplate from "./CorporateTemplate";
import {
  BlueCircle,
  PinkCircle,
  RedCircle,
} from "../../../styles/Resume1.styled";
import { Link } from "react-router-dom";
const { TextArea } = Input;
function Contact() {
  const [firstname, setfirstname] = useState("Qasim");
  const [lastname, setlastname] = useState("shafique");
  const [email, setemail] = useState("qasim.shafique875@gmail.com");
  const [address, setaddress] = useState("Barky jadeed ward no 3");
  //   const [drivinglicense, setdrivinglicense] = useState("123456789");
  const [contact_number, setcontact_number] = useState("123456789");
  //   const [image, setImage] = useState("/image/img.png");
  //   const [images, setimages] = useState("");
  //   const [showicon, setshowicon] = useState(false);
  const [image, setImage] = useState("/image/img.png");
  const [images, setimages] = useState("");
  // initialize state for font
  const dispatch = useDispatch();
  // const firstname = useSelector((state) => state.resumecontact.firstname);
  // const lastname = useSelector((state) => state.resumecontact.lastname);
  // const email = useSelector((state) => state.resumecontact.email);
  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);

  // const contact_number = useSelector(
  //   (state) => state.resumecontact.contact_number
  // );
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setimages(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // dispatch(
      //   setUserInfo({
      //     image: image,
      //   })
      // );
      // setcontactInfo
      setImage(reader.result);
    };
  };
  useEffect(() => {
    dispatch(
      setContactInfo({
        firstname: firstname,
        lastname: lastname,
        address: address,
        email: email,
        contact_number: contact_number,
        image: image,
      })
    );
  }, [firstname, lastname, address, contact_number, email, image]);
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
  const [buttoncolor, setbuttoncolor] = useState("grey");

  const fontChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttoncolor("#2A62FF");
    dispatch(
      setFontSize({
        font: "Times New Roman",
        color: color,
      })
    );
  };
  const fontSecondChnage = (e) => {
    e.preventDefault();
    console.log("sa");
    setbuttoncolor("#2A62FF");
    dispatch(
      setFontSize({
        font: "Candara",
        color: color,
      })
    );
  };

  const chnagecolor = (e) => {
    e.preventDefault();
    console.log("sa");
    dispatch(
      setFontSize({
        color: "red",
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
          <button className="btn btn-primary"><Link to="/resume4">Change Template</Link></button>
          <div>
            <div style={{ display: "flex" }}>
              <RedCircle onClick={chnagecolor}></RedCircle>
              <PinkCircle onClick={chnagecolor}></PinkCircle>
              <BlueCircle onClick={chnagecolor}></BlueCircle>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttoncolor }}
                onClick={fontChnage}
              >
                Aa
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: buttoncolor }}
                onClick={fontSecondChnage}
              >
                Aa
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: "grey" }}
              >
                ssdssd
              </button>
              <button
                className="btn "
                style={{ marginLeft: "5px", background: "grey" }}
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
            <form>
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    type="text"
                    placeholder="First Name"
                    defaultValue={firstname}
                    maxLength="6"
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div className="col">
                  <Input
                    type="text"
                    maxLength="8"
                    placeholder="Last Name"
                    defaultValue={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <Input
                    type="text"
                    placeholder="Enter Email Address"
                    defaultValue={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="col">
                  <Input
                    type="text"
                    placeholder="Enter Contact Number"
                    defaultValue={contact_number}
                    onChange={(e) => setcontact_number(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <br />

              <br />
              <br />
              <TextArea
                rows={4}
                placeholder="maxLength is 6"
                maxLength={50}
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </form>
          </div>

          <div className="col-lg-8" style={{ fontFamily: "cursive" }}>
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

export default Contact;
