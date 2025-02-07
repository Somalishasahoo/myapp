import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    const { id } = useParams(); // Get employee ID from URL
    const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
    const navigate = useNavigate();

    useEffect(() => {
        getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        }).catch(error => console.error("Error fetching employee:", error));
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, employee).then(() => {
            navigate("/");
        }).catch(error => console.error("Error updating employee:", error));
    };

    return (
        <div className="container mt-4">
            <h2>Edit Employee</h2>
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
                <button type="submit" className="btn btn-warning">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
