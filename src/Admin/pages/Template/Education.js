import { colors, Paper, Typography } from "@mui/material";
import { Button, Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { setUserInfo } from "../../../features/Contact/ContactSlice";
import {
  DetailForm,
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
import EducationForm from "./EducationForm";
import { setEducationInfo } from "../../../features/Resume2/Education";
import { DatePicker, Space } from "antd";
import { date } from "yup";
import { setFontSize } from "../../../features/Contact/FontSlice";
import Template from "./Template";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
import {
  BlueCircle,
  PinkCircle,
  RedCircle,
} from "../../../styles/Resume1.styled";
import { FaCheck } from "react-icons/fa"; // Import the check icon from react-icons/fa

const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Education() {
  const firstname = useSelector((state) => state.contact.firstname);
  const lastname = useSelector((state) => state.contact.lastname);
  const address = useSelector((state) => state.contact.address);
  const drivinglicense = useSelector((state) => state.contact.drivinglicense);
  const email = useSelector((state) => state.contact.email);
  const content = useSelector((state) => state.objective.content);
  const contact_number = useSelector((state) => state.contact.contact_number);
  const image = useSelector((state) => state.contact.image);

  const [institute, setinstitute] = useState("Virtual` University");
  const [degree, setdegree] = useState("MCS");
  const [location, setlocation] = useState("Gujar khan");
  const [graduation_year, setgraduation_year] = useState("2022-03-23");
  const [graduation_year_end, setgraduation_year_end] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [images, setimages] = useState("");
  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();
  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);
  const handleFontChange = (e) => {
    e.preventDefault();
    dispatch(
      setFontSize({
        font: "",
        color: color,
      })
    );
  };

  const handlecolorChange = (e) => {
    e.preventDefault();
    console.log("color");
    dispatch(
      setFontSize({
        font: font,
        color: "green",
      })
    );
  };

  const token = getToken();

  // child form
  const [childForms, setChildForms] = useState([]);

  const addForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setChildForms([
      ...childForms,
      { institute: "", degree: "", graduation_year: "", location: "" },
    ]);
    dispatch(
      setEducationInfo({
        institute: institute,
        degree: degree,
        graduation_year: graduation_year,
        location: location,
        experiences: childForms,
      })
    );
  };

  const updateForm = (index, field, value) => {
    const forms = [...childForms];
    forms[index][field] = value;
    setChildForms(forms);
  };

  const removeForm = (index) => {
    const forms = [...childForms];
    forms.splice(index, 1);
    const forme = forms.filter((item) => item.id !== index);
    console.log(forme, "after");
    dispatch(
      setEducationInfo({
        institute: institute,
        degree: degree,
        graduation_year: graduation_year,
        location: location,
        experiences: forme,
      })
    );

    setChildForms(forme);
    console.log(childForms, " after removeForm");
  };
  useEffect(() => {
    dispatch(
      setEducationInfo({
        institute: institute,
        degree: degree,
        graduation_year: graduation_year,
        location: location,
      })
    );
  }, [institute, degree, location, graduation_year]);

  // delete button
  const deleteform = () => {
    setinstitute("");
    setdegree("");
    setgraduation_year("");
    setgraduation_year_end("");
    setlocation("");
    setShowForm(true);
  };
  const [buttonArialcolor, setbuttonArialcolor] = useState("grey");
  const [buttonVerdanacolor, setbuttonVerdanacolor] = useState("grey");
  const [buttonTahomacolor, setbuttonTahomacolor] = useState("grey");
  const [buttonTimescolor, setbuttonTimescolor] = useState("grey");
  const [selected, setSelected] = useState(false); // Initialize the selected state to false

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
            <Typography variant="h6">Education Detail</Typography>
            <br />
            <br />
            <br />
            {showForm ? (
              <Form
                form={form}
                initialValues={{ remember: true }}
                // style={{ marginTop: "113px" }}
              >
                {" "}
                <div className="row">
                  <div className="col">
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "please enter institute!" },
                      ]}
                    >
                      <Input
                        type="text"
                        placeholder="institute"
                        defaultValue={institute}
                        onChange={(e) => setinstitute(e.target.value)}
                      />{" "}
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Input
                      type="text"
                      placeholder="Degree"
                      defaultValue={degree}
                      onChange={(e) => setdegree(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col">
                    {/* <RangePicker onChange={onChange} /> */}

                    <Input
                      type="date"
                      placeholder="Enter graduation year"
                      defaultValue={graduation_year}
                      onChange={(e) => setgraduation_year(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <Input
                      type="text"
                      placeholder="Enter Location"
                      defaultValue={location}
                      onChange={(e) => setlocation(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
              </Form>
            ) : (
              <Paper>
                <DetailSkillForm>
                  {institute}
                  <br />
                  {degree}
                </DetailSkillForm>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/image/add_arrow.png"
                    alt="Add"
                    style={{
                      height: "22px",
                      marginTop: "37px",
                      marginBottom: "30px",
                    }}
                  />
                  <img
                    src="/image/delete.png"
                    alt="Add"
                    onClick={deleteform}
                    style={{ height: "22px", marginTop: "57px" }}
                  />
                </div>
              </Paper>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "31px",
              }}
            >
              {/* <button onClick={addForm}  style={{  backgroundColor: "orange" }}>Add Form</button> */}
              <button type="submit" onClick={addForm} class="btn btn-warning">
                Add Form
              </button>
            </div>

            {/* <Button></Button> */}
            {childForms.map((form, index) => (
              <EducationForm
                key={index}
                index={index}
                form={form}
                updateForm={updateForm}
                removeForm={removeForm}
              />
            ))}
          </div>

          <div className="col-lg-8">
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
