import React, { useState } from "react";
import StudentList from "../components/StudentList";

const Dashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
