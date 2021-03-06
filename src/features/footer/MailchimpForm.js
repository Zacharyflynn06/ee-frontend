import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import style from "./Footer.module.css";

const MailchimpForm = ({ status, message, onValidated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
    }
    if (!formData.firstName) {
      toast.error("First Name is required");
    }
    if (!formData.lastName) {
      toast.error("Last Name is required");
    }
    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.email.indexOf("@") > -1
    ) {
      onValidated({
        MERGE0: formData.email,
        MERGE1: formData.firstName,
        MERGE2: formData.lastName,
      });
    }
  };

  const clearFields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  useEffect(() => {
    if (status === "success") {
      toast.success("Thanks for signing up");
      clearFields();
    }
    if (status === "error") {
      toast.error(message);
    }
  }, [status, message]);

  return (
    <>
      <h3>Sign up to receive news and updates!</h3>
      <form className={style.signupForm} onSubmit={handleSubmit}>
        <div className={style.nameContainer}>
          <input
            className={style.firstName}
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First Name"
          />

          <input
            className={style.lastName}
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last Name"
          />
        </div>

        <input
          type="email"
          name="email"
          className={style.email}
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
        />

        <div className={style.submitBtn}>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </>
  );
};

export default MailchimpForm;
