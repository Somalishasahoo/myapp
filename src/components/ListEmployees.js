import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res.data));
    }, []);

    const handleDelete = (id) => {
        deleteEmployee(id).then(() => {
            setEmployees(employees.filter(emp => emp.id !== id));
        });
    };

    return (
        <div className="container mt-4">
            <h2>Employee List</h2>
            <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>
                                <Link to={`/edit/${emp.id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={() => handleDelete(emp.id)} className="btn btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployees;