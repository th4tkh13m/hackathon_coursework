import React, { useLocation } from 'react';
import styled from "styled-components";
import { hackathon_coursework_backend } from '../../../../declarations/hackathon_coursework_backend';

export default function CustomerUpdate() {
    const location = useLocation()
    const { id } = location.state
    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        let sex = e.target.sex.value
        const dob = e.target.dob.value
        const phone = e.target.phone.value
        const address = e.target.address.value
        const user = { dob, sex, address, phone, lastName, firstName }
        console.log(id);
        console.log(user)
        await hackathon_coursework_backend.updateCustomer(id, user)
        console.log("Saved!");
    }
    return (
        <Container>
            <h1>{customerUpdate}</h1>
            <form action="
            " onSubmit={handleSubmit}>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">First name</span>
                    <input type="text" class="form-control" placeholder="First name" aria-label="Username" aria-describedby="addon-wrapping" name="firstName" />
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Last name</span>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Username" aria-describedby="addon-wrapping" name="lastName" />
                </div>
                <div class="input-group flex-nowrap align-items-center">
                    <span class="input-group-text" id="addon-wrapping">Last name</span>
                    <div className="radio_btn">
                        <label htmlFor="">Male</label>
                        <input type="radio" name="sex" value="male" id="" n />
                    </div>
                    <div className="radio_btn">
                        <label htmlFor="">Female</label>
                        <input type="radio" name="sex" value="female" id="" />
                    </div>
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Date of birth</span>
                    <input type="date" id="start" name="dob" />
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Phone</span>
                    <input type="text" name="phone" class="form-control" placeholder="Last name" aria-label="Phone" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Address</span>
                    <input type="text" name="address" class="form-control" placeholder="Last name" aria-label="Address" aria-describedby="addon-wrapping" />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </form>

        </Container>
    )
}


const Container = styled.div`
    width: 800px;
    margin: 0px calc((100% - 800px) / 2);
    span{
        width: 30%;
    }
    .radio_btn{
        margin-right: 15px;
        label{
            margin-left: 15px;
            color: #6c757d
        }
        input{
            margin-left: 15px;
            cursor: pointer;
        }
    }
`;