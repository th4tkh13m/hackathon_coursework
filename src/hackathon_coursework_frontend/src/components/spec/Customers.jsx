import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { hackathon_coursework_backend } from '../../../../declarations/hackathon_coursework_backend';

export default function Customers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getNfts() {
            const data = await hackathon_coursework_backend.readAccount()
            console.log(data)
            setUsers(data)
        }
        getNfts()
    }, [])

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
                    {
                        users.map((user, index) => {
                            console.log(user)
                            const { firstName, lastName, dob, phone, address, sex } = user[1]
                            return (<tr>
                                <th scope="row">{index + 1}</th>
                                <td>{lastName + " " + firstName}</td>
                                <td>{sex}</td>
                                <td>{phone}</td>
                                <td>{address}</td>
                                <td>{dob}</td>
                                <td>
                                    <Link to="/customer/update">
                                        <button type="button" class="btn btn-warning">Update</button>
                                    </Link>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <Link to="/register">
                <button type="button" className="btn btn-primary">Register</button>
            </Link>
        </div>
    )
}