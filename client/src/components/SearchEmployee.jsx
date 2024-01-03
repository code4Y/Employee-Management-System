import { useState } from 'react';

const SearchEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch the employee data from your server here.
    // This is just dummy data for the example.
    const fetchedEmployee = {
      id: employeeId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      jobTitle: 'Software Engineer',
      department: 'Engineering'
    };
    setEmployee(fetchedEmployee);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleDelete = () => {
    // Delete the employee from your server here.
    console.log(`Employee ${employeeId} deleted.`);
    setEmployee(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input type="text" value={employeeId} onChange={handleChange} required />
        </label>
        <button type="submit">Search</button>
      </form>
      {employee && (
        <div>
          <label>
            Name:
            <input type="text" value={employee.name} readOnly={!isEditable} />
          </label>
          <label>
            Email:
            <input type="email" value={employee.email} readOnly={!isEditable} />
          </label>
          <label>
            Job Title:
            <input type="text" value={employee.jobTitle} readOnly={!isEditable} />
          </label>
          <label>
            Department:
            <input type="text" value={employee.department} readOnly={!isEditable} />
          </label>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SearchEmployee;
