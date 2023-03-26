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
import CorporateTemplate from "./CorporateTemplate";
import { useAddSkillMutation } from "../../../services/AuthApi";
import { setLanguageInfo } from "../../../features/Resume2/Language";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Language() {
  const institute = useSelector((state) => state.education.institute);
  console.log(institute, "institute");
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
    console.log(childForms, "childForms");
    dispatch(
      setLanguageInfo({
        language: language,
        languages: childForms,
      })
    );
  };
  const [addSkill] = useAddSkillMutation();
  const updateForm = async (index, field, value) => {
    console.log(value, "value");
    console.log(field, "field");
    const forms = [...childForms];
    console.log(forms, "forms");
    forms[index][field] = value;
    setChildForms(forms);
    // dispatch(
    //   setskillInfo({
    //     skills: forms
    //   })
    // );
    //    const filteredItems = childForms.filter((item) => {
    //   return !childForms.some((storedItem) => storedItem.skill === item.skill);
    // });
    // setChildForms(filteredItems);
  };

  // useEffect(() => {
  //   const storeskill = async() => {
  //     const res = await addSkill({childForms});
  //     console.log(res, 'res');
  //   }
  //   // storeskill();

  // }, [childForms])

  console.log(childForms, "res");

  const removeForm = (index) => {
    const forms = [...childForms];
    forms.splice(index, 1);
    const forme = forms.filter((item) => item.id !== index);
    console.log(forme, "after");
    dispatch(
      setLanguageInfo({
        language: language,
        languages: forme,
      })
    );
    setChildForms(forme);
    console.log(childForms, " after removeForm");
  };
  // useEffect(() => {
  //      const filteredItems = childForms.filter((item) => {
  //     return !childForms.some((storedItem) => storedItem.skill === item.skill);
  //   });
  //   console.log(filteredItems, 'filteredItems')
  // }, [childForms]);
  console.log(childForms, "childForms");
  useEffect(() => {
    setNewChildForms(childForms);
  }, [childForms]);

  useEffect(() => {
    console.log("first");
    return () => {
      // Run code when component unmounts
      console.log("ssd");
      console.log(newchildForms, "newchildForms");
      console.log(childForms, "newchildForms");
      // setNewChildForms(childForms)
      dispatch(
        setLanguageInfo({
          language: language,
        })
      );
    };
  }, [language]);
  console.log(newchildForms, "newchildForms");
  // delete button
  const deleteform = () => {
    setlanguage("");
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
            <Typography variant="h6">Language Detail</Typography>
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
                    <Input
                      type="text"
                      placeholdنer="Language"
                      defaultValue={language}
                      onChange={(e) => setlanguage(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
              </Form>
            ) : (
              <Paper>
                <DetailSkillForm>{language}</DetailSkillForm>
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
            <CorporateTemplate />
          </div>
        </div>
      </div>
    </>
  );
}

export default Language;
