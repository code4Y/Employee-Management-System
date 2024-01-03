import { useState } from 'react';

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const validateForm = () => {
    const { name, email, jobTitle, department } = formData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !jobTitle || !department) {
      alert('Name, Job Title, and Department fields cannot be empty.');
      return false;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Job Title:
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={formData.department} onChange={handleChange} required />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default RegisterEmployee;
