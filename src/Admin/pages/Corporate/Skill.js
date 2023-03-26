/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Paper, Typography } from "@mui/material";
import { Button, Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { setUserInfo } from "../../../features/Contact/ContactSlice";
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
} from "../../../styles/Resume2.styled";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import SkillForm from "./SkillForm";
import { setEducationInfo } from "../../../features/Contact/EducationSlice";
import { DatePicker, Space } from "antd";
import { date } from "yup";
import { setskillInfo } from "../../../features/Resume2/Skill";
import { setFontSize } from "../../../features/Contact/FontSlice";
import Select from "react-select";
import CorporateTemplate from "./CorporateTemplate";
import { useAddSkillMutation } from "../../../services/AuthApi";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
import { DetailCorporateEducation } from "../../../styles/Corporate.styled";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Skill() {
  const institute = useSelector((state) => state.education.institute);
  console.log(institute, "institute");
  const [skill, setskill] = useState("Web Developer");
  const [level, setlevel] = useState("Expert");
  const [showForm, setShowForm] = useState(true);
  const [font, setfont] = useState("");
  const [buttoncolor, setbuttoncolor] = useState("grey");

  // const [font, setFont] = useState("");
  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();

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



  // child form
  const [childForms, setChildForms] = useState([]);
  const [newchildForms, setNewChildForms] = useState([]);

  const addForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setChildForms([...childForms, { skill: "", level: "" }]);
    console.log(childForms, "childForms");
    dispatch(
      setskillInfo({
        skill: skill,
        level: level,
        skills: childForms,
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
      setskillInfo({
        skill: skill,
        level: level,
        skills: forme,
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
      console.log(newchildForms, "newchildForms");
      console.log(childForms, "newchildForms");
      // setNewChildForms(childForms)
      dispatch(
        setskillInfo({
          skill: skill,
          level: level,
          skills: newchildForms,
        })
      );
    };
  }, [skill, level]);
  console.log(newchildForms, "newchildForms");
  // delete button
  const deleteform = () => {
    setskill("");
    setlevel("");
    setShowForm(true);
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
            <Typography variant="h6">Skill Detail</Typography>
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
                      placeholder="Skill"
                      defaultValue={skill}
                      onChange={(e) => setskill(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <select
                      onChange={(e) => setlevel(e.target.value)}
                      className="form-control"
                    >
                      <option value="initial">Initial</option>
                      <option value="intermediate">intermediate</option>
                      <option value="expert">expert</option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
              </Form>
            ) : (
              <Paper>
                <DetailCorporateEducation>
                  {skill}
                  <br />
                  {level}
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
              <SkillForm
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

export default Skill;
