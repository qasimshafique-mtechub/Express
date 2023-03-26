import { Paper, Typography } from "@mui/material";
import { Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { DetailForm } from "../../../styles/Resume.styled";
import { setFontSize } from "../../../features/Contact/FontSlice";
import {
  BlueCircle,
  PinkCircle,
  RedCircle,
} from "../../../styles/Resume1.styled";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import { DatePicker } from "antd";
import Template from "./Template";
import { setExperienceInfo } from "../../../features/Resume2/Experience";
import { DetailSkillForm } from "../../../styles/Resume1.styled";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Experience() {
  const firstname = useSelector((state) => state.contact.firstname);
  const lastname = useSelector((state) => state.contact.lastname);
  const image = useSelector((state) => state.contact.image);
  const institute = useSelector((state) => state.education.institute);

  console.log(institute, "institute");
  const [showForm, setShowForm] = useState(true);
  const [position, setposition] = useState("Web developer");
  const [company, setcompany] = useState("ABC Company");
  const [locations, setlocations] = useState("Rawalpindi");
  const [start_date, setstart_date] = useState("2022-03-23");
  const [end_date, setend_date] = useState("2022-12-23");
  const [notes, setnotes] = useState(
    "HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content"
  );

  // const [font, setFont] = useState("");
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
      {
        company: "",
        position: "",
        start_date: "",
        end_date: "",
        note: "",
        location: "",
      },
    ]);
    dispatch(
      setExperienceInfo({
        company: company,
        position: position,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        locations: locations,
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
      setExperienceInfo({
        company: company,
        position: position,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        locations: locations,
        experiences: forme,
      })
    );
    setChildForms(forme);
    console.log(childForms, " after removeForm");
  };
  console.log(childForms, "remove");
  useEffect(() => {
    dispatch(
      setExperienceInfo({
        company: company,
        position: position,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        locations: locations,
      })
    );
  }, [company, position, start_date, end_date, notes, locations]);
  // delete button
  const deleteform = () => {
    setcompany("");
    setposition("");
    setstart_date("");
    setend_date("");
    setlocations("");
    setnotes("");
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
            <Typography variant="h6">Experience Detail</Typography>

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
                        placeholder="Company"
                        defaultValue={company}
                        onChange={(e) => setcompany(e.target.value)}
                      />{" "}
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Input
                      type="text"
                      placeholder="Degree"
                      defaultValue={position}
                      onChange={(e) => setposition(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {/* <RangePicker onChange={onChange} /> */}

                    <Input
                      type="date"
                      defaultValue={start_date}
                      onChange={(e) => setstart_date(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <Input
                      type="date"
                      defaultValue={end_date}
                      onChange={(e) => setend_date(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                  <div className="col">
                    {/* <RangePicker onChange={onChange} /> */}

                    <Input
                      type="text"
                      placeholder="Location"
                      defaultValue={locations}
                      onChange={(e) => setlocations(e.target.value)}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
                <TextArea
                  rows={4}
                  placeholder="maxLength is 6"
                  maxLength={50}
                  value={notes}
                  onChange={(e) => setnotes(e.target.value)}
                />{" "}
              </Form>
            ) : (
              <Paper>
                <DetailSkillForm>
                  {company}
                  <br />
                  {position}
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
              <ExperienceForm
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

export default Experience;
