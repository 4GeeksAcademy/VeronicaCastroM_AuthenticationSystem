import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const LogIn = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Login</h1>
			<ul className="list-group">
				<>
					<form>
						<div>
							<label for="email" class="form-label">Email</label>
							<input name="email" type="text" class="form-control" id="validationCustom01" onChange={actions.handleChange} required />

							<label for="password" class="form-label">Password</label>
							<input name="password" type="password" class="form-control" id="validationCustom02" onChange={actions.handleChange} required/>

							<div className="d-flex justify-content-center">
							<button className="btn btn-login border" type="submit">LogIn</button>
							
							<label className="text-white fw-bold">Don't have an account</label>
							<Link to="/signup">
								<button className="btn text-secondary fw-bold" onClick={() => actions.changeLoginButton(false)}>Sign Up</button>
							</Link>
							</div>
						</div>
					</form>
				</>
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
