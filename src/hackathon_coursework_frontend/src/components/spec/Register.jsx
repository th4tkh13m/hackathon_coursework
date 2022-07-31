import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {

    }
    return (
        <div className="
        ">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail2" class="form-label">Last name</label>
                    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <div className="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2" >
                                Default checked radio
                            </label>
                        </div>
                    </div>
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="exampleCheck3">Date of birth</label>
                    <input type="date" class="form-check-input" id="exampleCheck3" />
                </div>
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="exampleCheck4">Phone</label>
                    <input type="checkbox" class="form-check-input" id="exampleCheck4" />
                </div>
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="exampleCheck5">Address</label>
                    <input type="checkbox" class="form-check-input" id="exampleCheck5" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register