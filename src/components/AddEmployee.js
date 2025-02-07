import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createEmployee(employee).then(() => {
            navigate("/");
        }).catch(error => console.error("Error adding employee:", error));
    };

    return (
        <div className="container mt-4">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={employee.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input type="text" name="department" className="form-control" value={employee.department} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
