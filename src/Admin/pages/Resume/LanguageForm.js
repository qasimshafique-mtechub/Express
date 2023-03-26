import React, { useState } from "react";
import { Input } from "antd";

function LanguageForm({ index, form, updateForm, removeForm }) {
  const [language, setlanguage] = useState(form.language);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, "is", value, "value");
    const field = id.split("-")[0];
    console.log(field, "field");

    switch (field) {
      case "language":
        setlanguage(value);
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
            placeholder="Language"
            id={`language-${index}`}
            onChange={handleChange}
          />
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

export default LanguageForm;
