import React, { useState } from "react";
import { Input } from "antd";

function EducationForm({ index, form, updateForm, removeForm, addEducation }) {
  const [institute, setinstitute] = useState(form.institute);
  const [degree, setdegree] = useState(form.degree);
  const [graduation_year, setgraduation_year] = useState(form.graduation_year);
  const [location, setlocation] = useState(form.location);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, "is", value, "value");
    const field = id.split("-")[0];
    console.log(field, "field");

    switch (field) {
      case "institute":
        setinstitute(value);
        break;
      case "degree":
        setdegree(value);
        break;
      case "graduation_year":
        setgraduation_year(value);
        break;
      case "location":
        setlocation(value);
        break;
      default:
        break;
    }
    updateForm(index, field, value);
  };
  const handleChangeDate = (event, dates) => {
    const { id, value } = event.target;
    console.log(id, "is", value, "value");
    const field = id.split("-")[0];
    console.log(field, "field");
    console.log(dates);

    // switch (field) {
    //   case "graduation_year":
    //     setgraduation_year(value);
    //     break;
    //   case "location":
    //     setlocation(value);
    //     break;
    //   default:
    //     break;
    // }
    // updateForm(index, field, value);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col">
            <Input
              type="text"
              placeholder="institute"
              id={`institute-${index}`}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Input
              type="text"
              id={`degree-${index}`}
              placeholder="Degree"
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <Input
              type="date"
              placeholder="Graduation Year"
              defaultValue={graduation_year}
              id={`graduation_year-${index}`}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Input
              type="text"
              placeholder="Location"
              id={`location-${index}`}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          
          marginTop: "31px",
        }}
      >
        {/* <button onClick={addForm}  style={{  backgroundColor: "orange" }}>Add Form</button> */}

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
          onClick={() => removeForm(index)}
          class="btn btn-warning"
          style={{ width: "214px" }}
        >
          Add
        </button>
      </div>
      </div>
      {/* <button >Remove Form</button> */}
    </div>
  );
}

export default EducationForm;
