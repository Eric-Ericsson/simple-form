import React, { useEffect, useState } from "react";
import TextButton from "../../UIElements/Button/textButton";
import "./styles.scss";
import InputField from "../../UIElements/InputField/inputField";

const Signup = () => {
  const [dob, setDoB] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [lastName, setLastName] = useState("");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  useEffect(() => {
    const fieldValues = firstName && lastName && email && dob && gender;
    setIsDisabled(!fieldValues);
  }, [firstName, lastName, email, dob, gender]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      firstName,
      lastName,
      gender,
      dob,
      email,
    };

    try {
      const response = await fetch('https://formspree.io/f/xwkglgpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      alert('Thank you for registering')
    } catch (error) {
      alert('There was a problem submitting the form');
    }
  };
  

  return (
    <div className="signup-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-content">
          <h3 className="form-title">Register</h3>
            <div className="form-input">
              <InputField
                type="text"
                name="firstName"
                label="Firstname"
                value={firstName}
                onChange={handleChange(setFirstName)}
              />
              <InputField
                type="text"
                name="lastName"
                label="Lastname"
                value={lastName}
                onChange={handleChange(setLastName)}
              />
            </div>
            <div className="form-input">
              <InputField
                type="radio"
                name="gender"
                label="Gender"
                value={gender}
                onChange={handleChange(setGender)}
              />
              <InputField
                type="date"
                name="dob"
                label="Date of Birth"
                value={dob}
                setDoB={setDoB}
              />
            </div>
            <div className="form-input">
              <InputField
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleChange(setEmail)}
              />
            </div>
            <div className="form-btn-cnt">
              <TextButton text="continue" type="text" isDisabled={isDisabled} />
            </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
