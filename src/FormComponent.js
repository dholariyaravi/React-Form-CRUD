// FormComponent.js
import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({formData});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormComponent;
