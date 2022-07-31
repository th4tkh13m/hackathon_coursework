import React, { useState } from "react";
import { hackathon_coursework_backend } from '../../../../declarations/hackathon_coursework_backend';

const Register = () => {



    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        let sex = e.target.sex.value
        const dob = e.target.dob.value
        const phone = e.target.phone.value
        const address = e.target.address.value
        const user = { dob, sex, address, phone, lastName, firstName }

        await hackathon_coursework_backend.createAccount(user)
    }
    return (
        <div className="
        ">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >First name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label" >Last name</label>
                    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name="lastName" />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="sex" id="flexRadioDefault1" value="male" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="sex" id="flexRadioDefault2" value="fmale" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="date" className="form-check-input" id="exampleCheck3" name="dob" />
                    <label className="form-check-label" htmlFor="exampleCheck3">Date of birth</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="address" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register