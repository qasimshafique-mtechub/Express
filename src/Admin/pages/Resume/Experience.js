import { Paper, Typography } from "@mui/material";
import { Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { DetailForm } from "../../../styles/Resume.styled";
import { useDispatch, useSelector } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import { DatePicker } from "antd";
import Template from "./Template";
import { setExperienceInfo } from "../../../features/Resume2/Experience";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Experience() {
  const institute = useSelector((state) => state.education.institute);
  const experiences = useSelector(
    (state) => state.resumeexperience.experiences
  );

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

  // child form
  const [childForms, setChildForms] = useState([]);
  const [newchildForms, setNewChildForms] = useState([]);

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
        location: "",
        note: "",
      },
    ]);
    // dispatch(
    //   setExperienceInfo({
    //     company: company,
    //     position: position,
    //     start_date: start_date,
    //     end_date: end_date,
    //     notes: notes,
    //     locations: locations,
    //     experiences: childForms,
    //   })
    // );
  };
  const updateForm = (index, field, value) => {
    const forms = [...childForms];
    forms[index][field] = value;
    setChildForms(forms);
  };

  const removeForm = (index) => {
    const myArray = [...experiences];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    dispatch(
      setExperienceInfo({
        company: company,
        position: position,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        locations: locations,
        experiences: updatedArray,
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
    const myArray = [...experiences];
    const newData = [...childForms];
    const updatedArray = myArray.concat(newData);
    console.log(updatedArray); // [1, 2, 3, 4, 5, 6]
    console.log(index, "index");
    updatedArray.splice(index, 1);
    console.log(updatedArray, "ater"); // [1, 2, 3, 4, 5, 6]
    console.log(childForms, "childForms remove");
    setNewChildForms([...childForms, ...updatedArray]);
    console.log(newchildForms, "newchildForms remove");
    dispatch(
      setExperienceInfo({
        company: company,
        position: position,
        start_date: start_date,
        end_date: end_date,
        notes: notes,
        locations: locations,
        experiences: updatedArray,
      })
    );
  };

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
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "160px" }}>
          <div className="col-lg-5">
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
              <>
                <Paper>
                  <DetailForm>
                    {company}
                    <br />
                    {position}
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
                {experiences?.map((item, index) => (
                  <Paper>
                    <DetailForm
                      style={{
                        position: "absolute",
                        top: "455px",
                        left: "180px",
                      }}
                    >
                      {" "}
                      {item.company}
                      <br />
                      {item.position}
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
              <ExperienceForm
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

export default Experience;
