import React, { useState } from "react";
import { Input } from "antd";

function ExperienceForm({ index, form, updateForm, removeForm }) {
  const [company, setcompany] = useState(form.company);
  const [position, setposition] = useState(form.position);
  const [start_date, setstart_date] = useState(form.start_date);
  const [end_date, setend_date] = useState(form.end_date);
  const [notes, setnotes] = useState(form.notes);
  const [location, setlocation] = useState(form.locations);

  const { TextArea } = Input;

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, "is", value, "value");
    const field = id.split("-")[0];
    console.log(field, "field");

    switch (field) {
      case "company":
        setcompany(value);
        break;
      case "position":
        setposition(value);
        break;
      case "start_date":
        setstart_date(value);
        break;
      case "end_date":
        setend_date(value);
        break;
      case "loation":
        setlocation(value);
        break;
      case "note":
        setnotes(value);
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
              placeholder="Company"
              id={`company-${index}`}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Input
              type="text"
              id={`position-${index}`}
              placeholder="Position"
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
              defaultValue={start_date}
              id={`start_date-${index}`}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Input
              type="date"
              placeholder="end_date"
              id={`end_date-${index}`}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            {/* <RangePicker onChange={onChange} /> */}

            <Input
              type="text"
              placeholder="Location"
              id={`location-${index}`}
              onChange={handleChange}
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
          id={`note-${index}`}
          onChange={handleChange}
        />{" "}
      </div>
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
      {/* <button >Remove Form</button> */}
    </div>
  );
}

export default ExperienceForm;
