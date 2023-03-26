/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Paper, Typography } from "@mui/material";
import { Input, Form } from "antd";
import React, { useState } from "react";
import { DetailForm } from "../../../styles/Resume2.styled";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../services/LocalStorage";
import SkillForm from "./SkillForm";
import { DatePicker } from "antd";
import { setskillInfo } from "../../../features/Resume2/Skill";
import { setFontSize } from "../../../features/Contact/FontSlice";
import Template from "./Template";
import { useAddSkillMutation } from "../../../services/AuthApi";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Skill() {
  const institute = useSelector((state) => state.education.institute);
  const skills = useSelector((state) => state.resumeskill.skills);

  console.log(institute, "institute");
  const [skill, setskill] = useState("Web Developer");
  const [level, setlevel] = useState("Expert");
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
    setChildForms([...childForms, { skill: "", level: "" }]);
    // dispatch(
    //   setskillInfo({
    //     skill: skill,
    //     level: level,
    //     skills: childForms,
    //   })
    // );
  };
  const [addSkill] = useAddSkillMutation();
  const updateForm = async (index, field, value) => {
    const forms = [...childForms];
    forms[index][field] = value;
    setChildForms(forms);
  };

  const removeForm = (index) => {
    const myArray = [...skills];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    dispatch(
      setskillInfo({
        skill: skill,
        level: level,
        skills: updatedArray,
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
    const myArray = [...skills];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    console.log(updatedArray); // [1, 2, 3, 4, 5, 6]
    console.log(index, "index");
    updatedArray.splice(index, 1);
    console.log(updatedArray, "ater"); // [1, 2, 3, 4, 5, 6]
    console.log(childForms, "childForms remove");
    setNewChildForms([...childForms, ...skills]);
    console.log(newchildForms, "newchildForms remove");
    dispatch(
      setskillInfo({
        skill: skill,
        level: level,
        skills: updatedArray,
      })
    );
  };

  const deleteform = () => {
    setskill("");
    setlevel("");
    setShowForm(true);
  };
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "160px" }}>
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
                  <DetailForm>
                    {skill}
                    <br />
                    {level}
                  </DetailForm>
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
                <div style={{ display: "flex", width: "100%" }}>
                  {skills?.map((item, index) => (
                    <Paper>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div>
                          <img
                            src="/image/add_arrow.png"
                            alt="Add"
                            style={{
                              height: "22px",
                              marginTop: "37px",
                              marginBottom: "30px",
                            }}
                          />
                        </div>
                        <div>
                          <img
                            src="/image/delete.png"
                            alt="Add"
                            onClick={() => DeleteForm(index)}
                            style={{ height: "22px", marginTop: "57px" }}
                          />
                        </div>
                      </div>
                    </Paper>
                    // <Paper>

                    //   <>
                    //     {item.skill}
                    //     <br />
                    //     {item.level}
                    //   </>
                    //   <div
                    //     style={{
                    //       display: "flex",
                    //       justifyContent: "space-between",
                    //     }}
                    //   >
                    //     <img
                    //       src="/image/add_arrow.png"
                    //       alt="Add"
                    //       style={{
                    //         height: "22px",
                    //         marginTop: "37px",
                    //         marginBottom: "30px",
                    //       }}
                    //     />
                    //     <img
                    //       src="/image/delete.png"
                    //       alt="Add"
                    //       onClick={() => DeleteForm(index)}
                    //       style={{ height: "22px", marginTop: "57px" }}
                    //     />
                    //   </div>
                    // </Paper>
                  ))}
                </div>

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
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
