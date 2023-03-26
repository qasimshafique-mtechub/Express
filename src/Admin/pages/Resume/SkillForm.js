import React, { useState } from "react";
import { Input } from "antd";

function SkillForm({ index, form, updateForm, removeForm }) {
  const [skill, setskill] = useState(form.skill);
  const [level, setlevel] = useState(form.level);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, "is", value, "value");
    const field = id.split("-")[0];
    console.log(field, "field");

    switch (field) {
      case "skill":
        setskill(value);
        break;
      case "level":
        setlevel(value);
        break;
      default:
        break;
    }
    updateForm(index, field, value);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <Input
            type="text"
            placeholder="Skill"
            id={`skill-${index}`}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            id={`level-${index}`}
            onChange={handleChange}
          >
            <option value="initial">Initial</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
        </div>
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

export default SkillForm;
