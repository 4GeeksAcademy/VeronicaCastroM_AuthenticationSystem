import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate()
	const { store, actions } = useContext(Context);
    store.signup ? navigate('/login'):null
    return (
        <>
        <h1>Sign In</h1>
            <form className="needs-validation text-center" noValidate onSubmit={e => {
					e.preventDefault()
					actions.signUpUser()
					e.target.reset();
				}}>
                <div class="mb-3">
                    <label for="userName" class="form-label">Username</label>
                    <input name="username" type="text" class="form-control" id="input_username" onChange={actions.handleChange} required/>
                    <div id="userNameHelp" class="form-text">Your username has to be unique</div>

                    <label for="firstName" class="form-label">First Name</label>
                    <input name="first_name" type="text" class="form-control" id="input_first_name" onChange={actions.handleChange} required/>

                    <label for="lastName" class="form-label">Last Name</label>
                    <input name="last_name" type="text" class="form-control" id="input_last_name" onChange={actions.handleChange} required />

                    <label for="userEmail" class="form-label">Email</label>
                    <input name="email" type="text" class="form-control" id="input_email" onChange={actions.handleChange} required/>

                    <label for="userPassword" class="form-label">Password</label>
                    <input name="password" type="password" class="form-control" id="input_password" onChange={actions.handleChange} required />

                    <button className="btn btn-login border text-dark" type="submit">Sign Up</button>

                </div>
            </form>
        </>
    )
}
