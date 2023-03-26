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
import CorporateTemplate from "./CorporateTemplate";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
import { DetailCorporateEducation } from "../../../styles/Corporate.styled";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Education() {

  const [institute, setinstitute] = useState("Virtual University");
  const [degree, setdegree] = useState("MCS");
  const [location, setlocation] = useState("Gujar khan");
  const [graduation_year, setgraduation_year] = useState("2022");
  const [graduation_year_end, setgraduation_year_end] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [images, setimages] = useState("");
  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();
  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);



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
                <DetailCorporateEducation>
                  {institute}
                  <br />
                  {degree}
                </DetailCorporateEducation>
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

          <div className="col-lg-7">
            <CorporateTemplate />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
