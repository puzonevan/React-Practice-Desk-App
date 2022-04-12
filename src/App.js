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

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
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

      <form></form>
      <Button variant="outlined">Add Employee</Button>
    </div>
  );
}
