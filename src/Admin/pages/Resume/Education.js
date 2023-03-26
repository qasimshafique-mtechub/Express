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
import { DetailEducationForm } from "../../../styles/Resume2.styled";
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
  const educations = useSelector((state) => state.resumeeducation.educations);

  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();
  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);

  // child form
  const [childForms, setChildForms] = useState([]);
  const [newchildForms, setNewChildForms] = useState([]);

  const addForm = (e) => {
    e.preventDefault();
    setChildForms([
      ...childForms,
      { institute: "", degree: "", graduation_year: "", location: "" },
    ]);
    console.log(childForms, "childForms");
  };

  const updateForm = (index, field, value) => {
    const forms = [...childForms];
    forms[index][field] = value;
    setChildForms(forms);
  };

  const removeForm = (index) => {
    const myArray = [...educations];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    dispatch(
      setEducationInfo({
        institute: institute,
        degree: degree,
        graduation_year: graduation_year,
        location: location,
        educations: updatedArray,
      })
    );
    const forms = [...childForms];
    forms.splice(index, 1);
    const forme = forms.filter((item) => item.id !== index);
    setShowForm(false);
    setChildForms([forms]);
    setChildForms(forme);
  };
  const DeleteForm = (index) => {
    const myArray = [...educations];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    console.log(updatedArray); // [1, 2, 3, 4, 5, 6]
    console.log(index, "index");
    updatedArray.splice(index, 1);
    console.log(updatedArray, "ater"); // [1, 2, 3, 4, 5, 6]
    console.log(childForms, "childForms remove");
    setNewChildForms([...childForms, ...educations]);
    console.log(newchildForms, "newchildForms remove");
    dispatch(
      setEducationInfo({
        institute: institute,
        degree: degree,
        graduation_year: graduation_year,
        location: location,
        educations: updatedArray,
      })
    );
  };

  // delete button
  const deleteform = () => {
    setinstitute("");
    setdegree("");
    setgraduation_year("");
    setgraduation_year_end("");
    setlocation("");
    setShowForm(true);
  };
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "160px" }}>
          <div className="col-lg-5">
            <Typography variant="h6">Educations Detail</Typography>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "31px",
                  }}
                >
                  <button
                    type="submit"
                    onClick={removeForm}
                    class="btn btn-warning"
                    style={{ width: "214px" }}
                  >
                    Add
                  </button>
                </div>
              </Form>
            ) : (
              <>
                <Paper>
                  <DetailEducationForm>
                    {institute}
                    <br />
                    {degree}
                  </DetailEducationForm>
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
                <br />
                <br />
                {educations?.map((item, index) => (
                  <Paper>
                    <DetailEducationForm
                      style={{
                        position: "absolute",
                        top: "604px",
                        left: "182px",
                      }}
                    >
                      {item.institute}
                      <br />
                      {item.degree}
                    </DetailEducationForm>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
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
                        onClick={() => DeleteForm(index)}
                        style={{ height: "22px", marginTop: "57px" }}
                      />
                    </div>
                  </Paper>
                ))}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "31px",
                  }}
                >
                  {/* <button onClick={addForm}  style={{  backgroundColor: "orange" }}>Add Form</button> */}
                  <button
                    type="submit"
                    onClick={addForm}
                    class="btn btn-warning"
                  >
                    Add Form
                  </button>
                </div>
              </>
            )}
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
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
