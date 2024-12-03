import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student data by ID for editing
    setName("John Doe"); // Example data
    setEmail("john@example.com");
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Updated:", { id, name, email });
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
