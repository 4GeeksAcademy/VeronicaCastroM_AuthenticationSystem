import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from 'react-router-dom';

export const Home = () => {
	const { store, actions } = useContext(Context);
    !store.hiddenLogout ? actions.changeLogoutButton(true): null 
	return (
		<div className="text-center container mt-5">
			<h1>Authentication system with Python Flask and React.js</h1>
			<p>
				<img src="https://cdn.pixabay.com/photo/2017/01/16/20/22/bubbles-1985152_640.png"/>
			</p>

			<div className="links d-flex justify-content-center me-3">
				<Link to={"/LogIn/"}>
					<p className="me-3">
						LogIn
					</p>
				</Link>

				<Link to={"/SignUp/"}>
					<p className="me-3">
						SignUp
					</p>
				</Link>
			</div>
		</div>
	);
};
