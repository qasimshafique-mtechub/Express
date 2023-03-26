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
import {
  BlueCircle,
  PinkCircle,
  RedCircle,
} from "../../../styles/Resume1.styled";
import { FaCheck } from "react-icons/fa"; 
import { useAddSkillMutation } from "../../../services/AuthApi";
import { setLanguageInfo } from "../../../features/Resume2/Language";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Language() {
  const firstname = useSelector((state) => state.contact.firstname);
  const lastname = useSelector((state) => state.contact.lastname);
  const address = useSelector((state) => state.contact.address);
  const drivinglicense = useSelector((state) => state.contact.drivinglicense);
  const email = useSelector((state) => state.contact.email);
  const content = useSelector((state) => state.objective.content);
  const contact_number = useSelector((state) => state.contact.contact_number);
  const image = useSelector((state) => state.contact.image);
  const institute = useSelector((state) => state.education.institute);
  const degree = useSelector((state) => state.education.degree);
  const graduation_year = useSelector(
    (state) => state.education.graduation_year
  );
  const graduation_year_end = useSelector(
    (state) => state.education.graduation_year_end
  );
  const location = useSelector((state) => state.education.location);
  console.log(institute, "institute");
  const [language, setlanguage] = useState("English");
  const [showForm, setShowForm] = useState(true);
  // const [font, setFont] = useState("");
  const [form] = Form.useForm();
  // initialize state for font
  const dispatch = useDispatch();

  const handleFontChange = (e) => {
    e.preventDefault();
    dispatch(
      setFontSize({
        font: "",
      })
    );
  };

  const handlecolorChange = (e) => {
    e.preventDefault();
    console.log("color");
    dispatch(
      setFontSize({
        color: "green",
      })
    );
  };
  const font = useSelector((state) => state.font.font);
  const color = useSelector((state) => state.font.color);

  const token = getToken();

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
  const updateForm = async (index, field, value, id) => {
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
                style={{ marginLeft: "5px", background: buttonVerdanacolor }}
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
        <br />{" "}
        <div className="row">
          <div className="col-lg-4">
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
          <div className="col-lg-8">
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}

export default Language;
