import "./styles.css";
import { EmployeeCard } from "./Card/Card";
import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function App() {
  //Support Desk app
  //  - app to display a list of support desk employees
  //  - displays their contact information.

  // Components
  //  - card: displays employee contact information

  // State
  //  - App: stateful, contains list of employees
  //  - Card: stateless, props: list of employees coming from app

  const basicEmployees = [
    {
      name: "John Doe",
      phone: "999-999-9999",
      email: "doejohn@gmail.com"
    },
    {
      name: "Jane Doe",
      phone: "999-999-9999",
      email: "doejohn@gmail.com"
    },
    {
      name: "Joe Joe",
      phone: "999-999-9999",
      email: "doejohn@gmail.com"
    }
  ];

  const [employees, setEmployees] = useState(basicEmployees);
  const [employee, setEmployee] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const addEmployee = (e) => {
    e.preventDefault();
    setEmployees([...employees, employee]);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
    console.log(employee);
  };

  return (
    <div className="App">
      <h1>Support Desk App</h1>

      <ul className="employees">
        {employees.map((employee) => {
          return (
            <EmployeeCard
              key={`employee-${employee.name}`}
              employee={employee}
            />
          );
        })}
      </ul>

      <form onSubmit={addEmployee}>
        <TextField
          variant="outlined"
          name="name"
          label="Employee Name"
          style={{ marginBottom: 10 }}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          variant="outlined"
          name="phone"
          label="Employee Number"
          style={{ marginBottom: 10 }}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          variant="outlined"
          name="email"
          label="Employee Email"
          style={{ marginBottom: 10 }}
          onChange={handleInputChange}
        />
        <br />

        <Button variant="outlined" type="submit">
          Add Employee
        </Button>
      </form>
    </div>
  );
}
