import React, { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, user])
        console.log(users);
    }
    return (
        <div className="
        ">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                Female
                            </label>
                        </div>
                    </div>
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="date" className="form-check-input" id="exampleCheck3" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="exampleCheck3">Date of birth</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register