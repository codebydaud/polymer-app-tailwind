import React, { useState, useEffect } from 'react';
import TextField from './TextField';

const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hellooo' + formData.username);
    onSubmit(formData);
  };

  const handleButtonClick = () => {
    console.log(formData.username);
  };



  return (
    <form onSubmit={handleSubmit} className="flex-col w-full max-w-sm">
      {/* <TextField
        label="Username"
        name="username"
        newValue={formData.username}
        onValueChange={handleChange}
        placeholder='Enter this username "RM1234"'
      /> */}
      <text-field
        label="Username"
        name="username"
        newValue={formData.username}
        onValueChange={handleChange}
        placeholder='Enter this username "RM1234"'
      />
      <text-field
        label="Password"
        type="password"
        name="password"
        newValue={formData.password}
        onValueChange={handleChange}
        placeholder='Enter this password "123"'
      />
      <custom-button onClick={handleButtonClick} label="Login"></custom-button>
    </form>
  );
};

export default SignUpForm;
