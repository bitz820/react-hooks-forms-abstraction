import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  });

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (e.target.type === "checkbox"){
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

  return (
    <form onSubmit={handleSubmit} >
      <input
        name="firstName"
        type="text"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        name="lastName"
        type="text"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
