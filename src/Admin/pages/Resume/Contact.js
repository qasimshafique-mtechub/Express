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
import Template from "./Template";
const { TextArea } = Input;
function Contact() {
  const [firstname, setfirstname] = useState("Qasim");
  const [lastname, setlastname] = useState("shafique");
  const [email, setemail] = useState("qasim.shafique875@gmail.com");
  const [address, setaddress] = useState("Barky jadeed ward no 3");
  //   const [drivinglicense, setdrivinglicense] = useState("123456789");
  const [contact_number, setcontact_number] = useState("123456789");
  const random_id = useSelector((state) => state.resumecontact.random_id);
  //   const [image, setImage] = useState("/image/img.png");
  //   const [images, setimages] = useState("");
  //   const [showicon, setshowicon] = useState(false);

  // initialize state for font
  const dispatch = useDispatch();
  // const firstname = useSelector((state) => state.resumecontact.firstname);
  // const lastname = useSelector((state) => state.resumecontact.lastname);
  // const email = useSelector((state) => state.resumecontact.email);
  // const address = useSelector((state) => state.resumecontact.address);
  // const contact_number = useSelector(
  //   (state) => state.resumecontact.contact_number
  // );
  useEffect(() => {
    dispatch(
      setContactInfo({
        firstname: firstname,
        lastname: lastname,
        address: address,
        email: email,
        contact_number: contact_number,
        random_id: random_id,
      })
    );
  }, [firstname, lastname, address, contact_number, email]);
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
  return (
    <>
      <div className="container" >
        <div className="row" style={{ marginTop: "160px" }}>
          <div className="col-lg-5">
            <Typography variant="h6">Contact Detail</Typography>
            <br />
            <br />
            <br />

            <form>
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
                    placeholder="Enter COntact Number"
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

          <div className="col-lg-7" style={{ fontFamily: "cursive" }}>
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

export default Contact;
