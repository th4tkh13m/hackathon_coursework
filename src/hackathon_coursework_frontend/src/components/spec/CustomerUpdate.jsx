import React from 'react'

export default function CustomerUpdate() {
    return (
        <div>
            <h1>Update</h1>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">First name</span>
                <input type="text" class="form-control" placeholder="First name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Last name</span>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Last name</span>
                <label htmlFor="">Male</label>
                <input type="radio" name="sex" value="male" id="" />
                <label htmlFor="">Female</label>
                <input type="radio" name="sex" value="female" id="" />
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
            <button type="button" class="btn btn-success">Save</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    )
}
