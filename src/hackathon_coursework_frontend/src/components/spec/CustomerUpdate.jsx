import React from 'react';
import styled from "styled-components";

export default function CustomerUpdate() {
    return (
        <Container>
            <h1>Update</h1>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">First name</span>
                <input type="text" class="form-control" placeholder="First name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Last name</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap align-items-center">
                <span class="input-group-text" id="addon-wrapping">Last name</span>
                <div className="radio_btn">
                    <label htmlFor="">Male</label>
                    <input type="radio" name="sex" value="male" id="" />
                </div>
                <div className="radio_btn">
                    <label htmlFor="">Female</label>
                    <input type="radio" name="sex" value="female" id="" />
                </div>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Date of birth</span>
                <input type="date" id="start" name="trip-start" value="yyyy-mm-dd" />
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Phone</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Phone" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Address</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Address" aria-describedby="addon-wrapping" />
            </div>
            <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-success">Save</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
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