/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Paper, Typography } from "@mui/material";
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
} from "../../../styles/Resume2.styled";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import LanguageForm from "./LanguageForm";
import { setEducationInfo } from "../../../features/Contact/EducationSlice";
import { DatePicker, Space } from "antd";
import { date } from "yup";
import { setskillInfo } from "../../../features/Resume2/Skill";
import { setFontSize } from "../../../features/Contact/FontSlice";
import Select from "react-select";
import Template from "./Template";
import { useAddSkillMutation } from "../../../services/AuthApi";
import { setLanguageInfo } from "../../../features/Resume2/Language";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Language() {
  const lan = useSelector((state) => state.resumelanguage.languages);

  const [language, setlanguage] = useState("English");
  const [showForm, setShowForm] = useState(true);
  // const [font, setFont] = useState("");
  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();

  // child form
  const [childForms, setChildForms] = useState([]);
  const [newchildForms, setNewChildForms] = useState([]);

  const addForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setChildForms([...childForms, { language: "" }]);
  };
  const [addSkill] = useAddSkillMutation();
  const updateForm = async (index, field, value) => {
    const forms = [...childForms];
    forms[index][field] = value;
    setChildForms(forms);
  };

  const removeForm = (index) => {
    const myArray = [...lan];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    dispatch(
      setLanguageInfo({
        language: language,
        languages: updatedArray,
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
    const myArray = [...lan];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    console.log(updatedArray); // [1, 2, 3, 4, 5, 6]
    console.log(index, "index");
    updatedArray.splice(index, 1);
    console.log(updatedArray, "ater"); // [1, 2, 3, 4, 5, 6]
    console.log(childForms, "childForms remove");
    setNewChildForms([...childForms, ...lan]);
    console.log(newchildForms, "newchildForms remove");
    dispatch(
      setLanguageInfo({
        language: language,
        languages: updatedArray,
      })
    );
  };
  const deleteform = () => {
    setlanguage("");
    setShowForm(true);
  };
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "160px" }}>
          <div className="col-lg-5">
            <Typography variant="h6">Language Detail</Typography>
            <br />
            <br />
            <br />
            {showForm ? (
              <Form form={form} initialValues={{ remember: true }}>
                {" "}
                <div className="row">
                  <div className="col">
                    <Input
                      type="text"
                      placeholder="Language"
                      defaultValue={language}
                      onChange={(e) => setlanguage(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
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
                  <DetailForm>{language}</DetailForm>
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

                {lan?.map((item, index) => (
                  <Paper>
                    <DetailForm
                      style={{
                        position: "absolute",
                        top: "612px",
                        left: "180px",
                      }}
                    >
                      {item.language}
                    </DetailForm>
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
                        // onClick={removeForm}
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
              <LanguageForm
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

export default Language;
