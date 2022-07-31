import React from 'react';
import { Link } from "react-router-dom";

export default function Customers() {
    return (
        <div>
            <h1>Customer List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Giacomo Guil</td>
                        <td>20/07/2000</td>
                        <td>0123456789</td>
                        <td>Male</td>
                        <td>
                            <button type="button" className="btn btn-warning">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Giacomo Guil</td>
                        <td>20/07/2000</td>
                        <td>0123456789</td>
                        <td>Male</td>
                        <td>
                            <button type="button" className="btn btn-warning">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Giacomo Guil</td>
                        <td>20/07/2000</td>
                        <td>0123456789</td>
                        <td>Male</td>
                        <td>
                            <button type="button" className="btn btn-warning">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/register">
                <button type="button" className="btn btn-primary">Register</button>
            </Link>
        </div>
    )
}
